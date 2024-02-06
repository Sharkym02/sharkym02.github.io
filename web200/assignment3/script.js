// This function calculates the amount of paint needed and the cost to paint a room
function CalculatePaint() {
    var length = window.prompt("What is the Length of the room");
    var width = window.prompt("What is the Width of the room");
    var height = window.prompt("What is the Height of the room");
    var cover = window.prompt("How many square feet will a gallon of paint cover");
    var cost = window.prompt("How expensive is a gallon of paint");
    area = 2 * length * height + 2 * width * height;
    gallons = math.ceil(area / cover);
    totalCost = gallons * cost;
    window.alert("You need " + gallons + " gallons of paint, and it will cost " + totalCost + " dollars");
    //document.write("The numbers you input are " + number1 + " and " + number2 + ", and they concatenate into " + num1 + num2  + ".");
}
// this function calculates your pay over several time periods
function CalculatePay() {
    var hours = window.prompt("How many hours do you work a week?");
    var rate = window.prompt("What is your hourly rate?");
    var weekly = hours * rate;
    var monthly = weekly * 4;
    var annual = monthly * 13;
    window.alert("You make " + weekly + " dollars a week, " + monthly + " dollars a month, and " + annual + " dollars a year.")
    //document.write("You make " + weekly + " dollars a week, " + monthly + " dollars a month, and " + annual + " dollars a year.")
}
// this function calculates your age in different measurements
function CalculateAge() {
    var years = window.prompt("How many years old are you?");
    var months = years * 12
    var days = months * 31;
    var hours = days * 24;
    var seconds = hours * 3600;
    console.log("You are " + years + " year(s) old, " + months + " months old, " + days + " days old, " + hours + " hours old, and " + seconds + " seconds old.")
    //document.write("You make " + weekly + " dollars a week, " + monthly + " dollars a month, and " + annual + " dollars a year.")
}