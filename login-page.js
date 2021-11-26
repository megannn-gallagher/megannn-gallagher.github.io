
const loginPage = document.getElementById("login-page");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginPage.username.value;
    const password = loginPage.password.value;

    if (username === "megan" && password === "gal") {
        alert("You have successfully logged in.");
        location.href="dashboard.html"
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})