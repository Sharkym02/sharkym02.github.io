const para = document.createElement("p");
var node = document.createTextNode("")
para.appendChild(node);
const element = document.getElementById("avg");
element.appendChild(para);

function calculateAverage() {
    let number = document.getElementById("number").value;
    let values = [];
    for (let i = 0; i < number; i++) {
            p = i+1;
            values[i] = parseInt(prompt("What is score number " + p + "?"));
    }
    let sum = 0; 
    for (let i=0; i < number; i++) {
        sum += values[i];
    }
    node.nodeValue = "The Average is " + sum / number + ".";
}