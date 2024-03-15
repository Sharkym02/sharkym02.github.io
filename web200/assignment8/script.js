function mathExpressions()  {
    var value = document.getElementById("value").value;
    var expressions = document.getElementById("expressions").value;
    output = "";
    i=1;
    while (i <= expressions) {
        output += value + " * " + i + " = " + value * i + "\n";
        i++;
    }
    document.getElementById("math").innerText = output;
}
function calculateAverage() {
    var number = document.getElementById("number").value;
    total = 0;
    for (let i = 1; i <= number; i++) {
        total += parseInt(prompt("What is score number " + i + "?"));
    }
    document.getElementById("scores").innerText = total / number;
}