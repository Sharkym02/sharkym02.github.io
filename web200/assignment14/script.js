function user(  first,
    last,
    address,
    city,
    region,
    postal,
    email,
    phone,
    dob) {
    
    this.first = first;
    this.last = last;
    this.address = address;
    this.city = city;
    this.region = region;
    this.postal = postal;
    this.email = email;
    this.phone = phone;
    this.dob = dob;
}
function addUser() {
const newUser = new user(document.getElementById("first").value,
                document.getElementById("last").value, 
                document.getElementById("address").value, 
                document.getElementById("city").value,
                document.getElementById("region").value, 
                document.getElementById("postal").value, 
                document.getElementById("email").value, 
                document.getElementById("phone").value,
                document.getElementById("dob").value);
return newUser;
}
function get() {
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
document.getElementById("AJAX").innerHTML =
this.responseText;
}
xhttp.open("GET", "https://jsonplaceholder.typicode.com/users")
xhttp.send();
}