let input=document.getElementsByTagName("input");

let data=[];
 async function xyz(){
    await fetch('http://localhost:3000/register').then((x)=>x.json()).then((res)=>data.push(res))
 }





//registration form
async function registerr(){

event.preventDefault()
let fullname=input[0].value;
let Address=input[1].value;
let phone=input[2].value;
let email=input[3].value;
let password=input[4].value;
let confpass=input[5].value;
let male=input[6].value;
let female=input[7].value;
   
    let obj={
        fullname:fullname,
        Address:Address,
        phone:phone,
        email:email,
        password:password,
        gender:male||female
        
    }


    await fetch('http://localhost:3000/register',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"

        },
        body:JSON.stringify(obj)
    }).then((x)=>x.json()).then((resp)=>{alert("registration successful");location.href="login.html"})
  
}

// registration form

//login form


function log(){
    let email=input[0].value;
    let pass=input[1].value;
    

  
    let filterdata=data[0].filter(function(res){
        return (email === res.email) && (pass === res.password)
    })

    if(filterdata.length>0){
        alert("login successful");
        sessionStorage.setItem("name",filterdata[0].fullname)
        location.href="HomePage.html";
    }
    else{
        alert("please register first")
    }
 
    return false;
    
}



