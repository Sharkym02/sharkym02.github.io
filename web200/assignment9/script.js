function setDateTime() {
    var dateTime = new Date();
    var currentDateTime = dateTime.toLocaleString();
    //document.getElementById("datetime").innerHTML = currentDateTime;
    document.getElementById("currYear").innerHTML = "Year: " + dateTime.getFullYear();
    document.getElementById("currMonth").innerHTML = "Month: " + dateTime.getMonth();
    document.getElementById("currDay").innerHTML = "Day: " + dateTime.getDate();
    document.getElementById("currHour").innerHTML = "Hour: " + dateTime.getHours();
    document.getElementById("currMinute").innerHTML = "Minute: " + dateTime.getMinutes();
    document.getElementById("currSecond").innerHTML = "Second: " + dateTime.getSeconds();
}
setInterval(setDateTime, 1000);
document.getElementById("datePicker").addEventListener("change", function () {
    var input = this.value;
    var dateEntered = new Date(input);
    dateEntered.setDate(dateEntered.getDate() + 1);
    dateEntered.setMonth(dateEntered.getMonth() + 1);
    document.getElementById("selectedYear").innerHTML = "Selected Year: " + dateEntered.getFullYear();
    document.getElementById("selectedMonth").innerHTML = "Selected Month: " + dateEntered.getMonth();
    document.getElementById("selectedDay").innerHTML = "Selected Day: " + dateEntered.getDate();
});