function CalculatePay() {
    var hours = document.getElementById("hours").value;
    var rate = document.getElementById("rate").value;
    var overtime = document.getElementById("overtime");
    if ((overtime.checked) && (hours > 40)) {
        var weekly = 40 * rate + (hours - 40) * rate * 1.5
    }
    else 
    {
        var weekly = hours * rate;
    }
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
    var monthCheck = document.getElementById("Months").checked;
    var dayCheck = document.getElementById("Days").checked;
    var hourCheck = document.getElementById("Hours").checked;
    var secondCheck = document.getElementById("Seconds").checked;
    switch(secondCheck + hourCheck * 10 + dayCheck * 100 + monthCheck * 1000) {
        default:
            element = document.getElementById("ageCalc").innerText = "Please choose what units you would like to know your age in";
            break;
        case 1:
            element = document.getElementById("ageCalc").innerText = "You are " + seconds + " seconds old.";
            break;
        case 10:
            element = document.getElementById("ageCalc").innerText = "You are " + hours + " hours old.";
            break;
        case 11:
            element = document.getElementById("ageCalc").innerText = "You are " + hours + " hours and " + seconds + " seconds old.";
            break;
        case 100:
            element = document.getElementById("ageCalc").innerText = "You are " + days + " days old.";
            break;
        case 101:
            element = document.getElementById("ageCalc").innerText = "You are " + days + " days and " + seconds + " seconds old.";
            break;
        case 110:
            element = document.getElementById("ageCalc").innerText = "You are " + days + " days and " + hours + " hours old.";
            break;
        case 111:
            element = document.getElementById("ageCalc").innerText = "You are " + days + " days, " + hours + " hours, and" + seconds + " seconds old.";
            break;
        case 1000:
            element = document.getElementById("ageCalc").innerText = "You are " + months + " months old.";
            break;
        case 1001:
            element = document.getElementById("ageCalc").innerText = "You are " + months + " months and " + seconds + " seconds old.";
            break;
        case 1010:
            element = document.getElementById("ageCalc").innerText = "You are " + months + " months and " + hours + " hours old.";
            break;
        case 1011:
            element = document.getElementById("ageCalc").innerText = "You are " + months + " months, " + hours + " hours, and" + seconds + " seconds old.";
            break;
        case 1100:
            element = document.getElementById("ageCalc").innerText = "You are " + months + " months and " + days + " days old.";
            break;
        case 1101:
            element = document.getElementById("ageCalc").innerText = "You are " + months + " months, " + days + " days, and " + seconds + " seconds old.";
            break;
        case 1110:
            element = document.getElementById("ageCalc").innerText = "You are " + months + " months, " + days + " days, and " + hours + " hours old.";
            break;
        case 1111:
            element = document.getElementById("ageCalc").innerText = "You are " + months + " months old, " + days + " days old, " + hours + " hours old, and " + seconds + " seconds old.";
            break;
            
    }
}