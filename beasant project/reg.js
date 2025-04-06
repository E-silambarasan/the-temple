function reg(){
    var username=document.getElementById("user").value
var password=document.getElementById("pass").value
    if(username===""||password===""){
        alert("Fill the form")
        return;
    }
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);
    
    alert("success")
    window.location.href="login.html"
}