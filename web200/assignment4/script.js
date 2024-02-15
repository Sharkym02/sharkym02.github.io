
function CalculatePay() {
    var hours = document.getElementById("hours").value;
    var rate = document.getElementById("rate").value;
    var weekly = hours * rate;
    var monthly = weekly * 4;
    var annual = monthly * 13;
    //window.alert("You make " + weekly + " dollars a week, " + monthly + " dollars a month, and " + annual + " dollars a year.")
    element = document.getElementById("GrossPay").innerText = "You make " + weekly + " dollars a week, " + monthly + " dollars a month, and " + annual + " dollars a year.";
    //document.write("You make " + weekly + " dollars a week, " + monthly + " dollars a month, and " + annual + " dollars a year.")
}
function CalculateAge() {
    var age = document.getElementById("age").value;
    var months = age * 12;
    var days = months * 31;
    var hours = days * 24;
    var seconds = hours * 3600;
    //window.alert("You make " + weekly + " dollars a week, " + monthly + " dollars a month, and " + annual + " dollars a year.")
    element = document.getElementById("ageCalc").innerText = "You are " + age + " year(s) old, " + months + " months old, " + days + " days old, " + hours + " hours old, and " + seconds + " seconds old.";
    //document.write("You make " + weekly + " dollars a week, " + monthly + " dollars a month, and " + annual + " dollars a year.")
}
function CalculatePaint() {
    var length = document.getElementById("Length").value;
    var width = document.getElementById("Width").value;
    var height = document.getElementById("Height").value;
    var cover = document.getElementById("cover").value;
    var cost = document.getElementById("cost").value;
    area = 2 * length * height + 2 * width * height;
    gallons = Math.ceil(area / cover);
    totalCost = gallons * cost;
    element = document.getElementById("paint").innerText = "You need " + gallons + " gallons of paint, and it will cost " + totalCost + " dollars";
}