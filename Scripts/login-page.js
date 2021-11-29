
const loginPage = document.getElementById("login-page");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginPage.username.value;
    const password = loginPage.password.value;

    if (username === "megan" && password === "gal") {
        // Keep the alert box showing for longer than the time
        // to redirect so that the alert box does not disappear
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Logged in!',
            showConfirmButton: false,
            timer: 3500
          })

        setTimeout(function(){
            location.href = "dashboard.html"
        }, 3000); 
    } else {
        // Show the error msg
        loginErrorMsg.style.opacity = 1;
    }
})