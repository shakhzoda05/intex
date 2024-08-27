let elRegisterForm = document.querySelector(".register-form");

elRegisterForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const newData = {
        username: e.target.username.value,
        password: e.target.password.value
    };

    localStorage.setItem("registeredUser", JSON.stringify(newData));
    alert("Ro'yxatdan o'tish muvaffaqiyatli o'tdi!");

    setTimeout(() => location.pathname = "/", 1000);
});


