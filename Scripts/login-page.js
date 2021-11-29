// Keep the logged-in status in sessionStorage (not local storage)
// so that it'll reset when the storage ends, simulating logout.

const loginPage = document.getElementById("login-page");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginPage.username.value;
    const password = loginPage.password.value;

    if (username.length != 0 && password.length != 0) {
        // Expire after 30 mins (1 day divided by 48 half hours)
        Cookies.set('logged-in', 'true', { expires: (1/48) });
        
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
            location.href = "index.html"
        }, 3000); 
    } else {
        // Expire after 30 mins (1 day divided by 48 half hours)
        Cookies.set('logged-in', 'false', { expires: (1/48) });
        loginErrorMsg.style.opacity = 1;
    }
})