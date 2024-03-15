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
    document.getElementById("scores").innerText = sum / number;
}