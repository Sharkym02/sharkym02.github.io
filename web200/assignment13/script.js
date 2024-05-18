function get() {
    let form = document.getElementById("form");
    form.action = "http://postman-echo.com/get";
    form.method = "GET";
    form.submit();
}
function post() {
    let form = document.getElementById("form");
    form.action = "http://postman-echo.com/get";
    form.method = "POST";
    form.submit();
}
function isValid() {
    let form = document.getElementsByTagName("input");
    for (let i = 0; i < form.length; i++) {
        if (!form[i].checkValidity()) {
            document.getElementById("get").disabled = true;
            document.getElementById("post").disabled = true;
            return
        }
    }
    document.getElementById("get").disabled = false;
    document.getElementById("post").disabled = false;
}
setInterval(isValid, 200);