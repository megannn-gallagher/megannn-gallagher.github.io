$( function() {
     if (isLoggedIn()) {
        document.getElementById("login-button").style.display = "none";
        document.getElementById("signup-button").style.display = "none";
        document.getElementById("audit-button").style.display = "";
        
        // This only appears on company page
        try {
           document.getElementById("contribute-button").style.display = "";
        } catch (error) {
           return;
        }
     }    
     else {
        document.getElementById("login-button").style.display = "";
        document.getElementById("signup-button").style.display = "";
        document.getElementById("audit-button").style.display = "none";

		// This only appears on company page
        try {
         document.getElementById("contribute-button").style.display = "none";
      } catch (error) {
         return;
      }
     }
});

function isLoggedIn() {
    var loggedIn = Cookies.get("logged-in") == "true"; 
    return loggedIn;
}