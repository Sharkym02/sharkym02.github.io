function calculateAverage() {
    var number = document.getElementById("number").value;
    var values = [];
    for (let i = 0; i < number; i++) {
            p = i+1;
            values[i] == parseInt(prompt("What is score number " + p + "?"));
    }
    document.getElementById("scores").innerText = values.reduce((a, b) => a + b, 0) / number;
}