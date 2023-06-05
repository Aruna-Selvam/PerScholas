



function check1(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email1=document.getElementById("sign_email").value; 
    var pass1=document.getElementById("sign_pass").value;
    const customer = new Map();
    customer.set(email1,pass1);
    console.log(customer);
    if(email1.match(mailformat))
{
    
alert("Valid email address!");

return true;
}
else
{
alert("You have entered an invalid email address!");

return false;
}
}