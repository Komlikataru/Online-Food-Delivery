let lginout=document.getElementsByClassName("lginout")[0];
let user=document.getElementsByClassName("usern")[0];

let name=sessionStorage.getItem("name");

if(name){
    lginout.innerHTML="LOG OUT";
    user.innerHTML=name;
}
else{
    lginout.innerHTML="LOG IN";
    user.innerHTML="USER";
}

function logout(){
    lginout.innerHTML = "LOG IN";
    user.innerHTML = "USER";
    name = sessionStorage.removeItem("name");
    if(!(sessionStorage.getItem("name")) && lginout.innerHTML=="LOG IN"){
        location.href="/login.html";
    }
}
