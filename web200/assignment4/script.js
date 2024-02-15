function CalculatePay() {
    var hours = document.getElementById("hours").value;
    var rate = document.getElementById("rate").value;
    var weekly = hours * rate;
    var monthly = weekly * 4;
    var annual = monthly * 13;
    element = document.getElementById("GrossPay").innerText = "You make " + weekly + " dollars a week, " + monthly + " dollars a month, and " + annual + " dollars a year.";
}
function CalculateAge() {
    var age = document.getElementById("age").value;
    var months = age * 12;
    var days = months * 31;
    var hours = days * 24;
    var seconds = hours * 3600;
    element = document.getElementById("ageCalc").innerText = "You are " + age + " year(s) old, " + months + " months old, " + days + " days old, " + hours + " hours old, and " + seconds + " seconds old.";
}
function CalculatePaint() {
    var length = window.prompt("What is the Length of the room in feet");
    var width = window.prompt("What is the Width of the room in feet");
    var height = window.prompt("What is the Height of the room in feet");
    var cover = window.prompt("How many square feet will a gallon of paint cover");
    var cost = window.prompt("How expensive is a gallon of paint");
    area = 2 * length * height + 2 * width * height;
    gallons = Math.ceil(area / cover);
    totalCost = gallons * cost;
    window.alert("You need " + gallons + " gallons of paint, and it will cost " + totalCost + " dollars")
}