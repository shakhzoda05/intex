let elLoginForm=document.querySelector(".login-form")
elLoginForm.addEventListener("submit", function(e){
    e.preventDefault()
    const data={
        username:e.target.username.value,
        password:e.target.password.value
    }
    if(data.username=="shaxzoda" && data.password=="123"){
    location.pathname="./admin.html" 
    }
    else(
        alert("Xato malumot kiritildi!")
    )
})
