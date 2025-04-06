function sumbit() {
    var pa=document.getElementById("password").value;
    var user=document.getElementById("name").value;
    console.log(pa)
    if(pa === ""|| user === ""){
        alert("fill the form");
        return;
    }
    var storeuser = localStorage.getItem("username");
    var storepass = localStorage.getItem("password");

    
    if( storeuser===null || storepass===null){
        alert("no account");
        return;
    }
     if(pa===storepass && user===storeuser){
        window.location.href="story.html"
    }
    else{
        alert("invaild password")
    }
    
}