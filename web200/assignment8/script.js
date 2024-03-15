function calculateAverage() {
    var number = document.getElementById("number").value;
    var values = [];
    for (let i = 0; i < number; i++) {
            p = i+1;
            values[i] == parseInt(prompt("What is score number " + p + "?"));
    }
    var sum = 0;
    for (let i=0; i < values.length; i++) {
        sum += values[i];
    }
    document.getElementById("scores").innerText = sum;
}