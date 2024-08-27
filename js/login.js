let elLoginForm = document.querySelector(".login-form");

elLoginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        username: e.target.username.value,
        password: e.target.password.value
    };

    const defaultUser = {
        username: "shaxzoda",
        password: "123"
    };

    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
        (data.username === defaultUser.username && data.password === defaultUser.password) ||
        (registeredUser && data.username === registeredUser.username && data.password === registeredUser.password)
    ) {
        location.pathname = "./admin.html";
    } else {
        alert("Xato ma'lumot kiritildi!");
    }
});


