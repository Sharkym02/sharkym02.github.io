// This function performs several string operations
function StringOperate() {
    var num1 = window.prompt("Type the first of two numbers please");
    var num2 = window.prompt('Type the second of two numbers please');
    var number1 = Number(num1);
    var number2 = Number(num2);
    var float1 = number1.toFixed(number1);
    var float2 = number2.toFixed(number2);
    window.alert("The numbers you input are " + float1 + " and " + float2 + ", and they concatenate into " + num1 + num2  + ".")
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