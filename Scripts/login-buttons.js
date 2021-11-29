$( function() {
     if (isLoggedIn()) {
        document.getElementById("login-button").style.display = "none";
        document.getElementById("signup-button").style.display = "none";
        document.getElementById("audit-button").style.display = "";
     }    
     else {
        document.getElementById("login-button").style.display = "";
        document.getElementById("signup-button").style.display = "";
        document.getElementById("audit-button").style.display = "none";
     }
});

function isLoggedIn() {
    var loggedIn = Cookies.get("logged-in") == "true"; 
    return loggedIn;
}