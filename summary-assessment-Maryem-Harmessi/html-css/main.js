var password=document.getElementById("password")


function logIn(){
    var passwordText=password.innerText()
    console.log(password);
    var error=document.createElement("p")
    if(passwordText.length===0){
        error.innerText("please enter a password")
        console.log(error.innerText);
        document.body.appendChild(error)
    }
    if(passwordText.length<6){
        error.innerText("Your password must be longer than 6 characters")
        console.log(error.innerText)
        document.body.appendChild(error)
    }
    else{
        var form=getElementById("form")
        form.setAttribute("hidden")
    }
}


