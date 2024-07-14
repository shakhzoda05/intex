let elUserName=document.querySelector(".username")

const userData=JSON.parse(window.localStorage.getItem("userData"))
elUserName.textContent=userData.username