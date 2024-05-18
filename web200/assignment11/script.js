const nodes = document.body.childNodes;
const nodesHead = document.head.childNodes;
    var text = "";
    for (i = 0; i < nodesHead.length; i++) {
        text += "<br>" + nodesHead[i].nodeName;
    }
    for (i = 0; i < nodes.length; i++) {
        text += "<br>" + nodes[i].nodeName;
    }

document.getElementById("nodes").innerHTML = text;
displaySize();
function displaySize() {
    var winHeight = window.screen.height;
    var winWidth = window.screen.width;
    var docWidth = document.documentElement.clientWidth;
    var docHeight = document.documentElement.clientHeight;
    document.getElementById("screenSize").innerHTML = "The size of the screen is " + winWidth + "x" + winHeight;
    document.getElementById("windowSize").innerHTML = "The size of the window is " + docWidth + "x" + docHeight;
}
window.addEventListener("resize", displaySize);
const elements = document.getElementsByTagName("*");
for(let i = 0; i < elements.length; i++) {
    const element = elements.item(i);
    // document.getElementById(HTMLCollection.item(i)).innerText = "1";
    var newText = document.createTextNode(" <" + element.tagName+ ">");
    var newText1 = document.createTextNode(" <" + element.tagName+ ">");
    element.insertBefore(newText1, element.firstChild);
    element.appendChild(newText);
}