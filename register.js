let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    console.log(username)
    console.log(email)
    console.log(password)
    if(username.leghth < 8){
               console.log("có ít nhất 8 ký tự")
    }
    else if(password < 8){
        console.log("có it nhất 8 ký tự")
    }else{}
    if(localStorage.getItem("users")) {
        let users = JSON.parse(localStorage.getItem("users"))
    }

});