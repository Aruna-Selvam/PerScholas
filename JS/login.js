
    function auth(){
        var email=document.getElementById("email").value;
        var password =document.getElementById("password").value;
        if(email== "admin@gmail.com" && password=="123"){
            window.location.assign("home.html");
            alert("Login Successfully");
        }else{
            alert("Login Failed");
            return;
        }
    }

    