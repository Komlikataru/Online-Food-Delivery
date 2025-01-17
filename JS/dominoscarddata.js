
let cardsdata=[
    {
        id:"1",
        img:"./IMG/Blazing Onion & Paprika.jpeg",
        h3:"Blazing Onion & Paprika",
        p:"349"
    },
    {
        id:"2",
        img:"./IMG/Fiery Sausage & Paprika.jpeg",
        h3:"Fiery Sausage & Paprika ",
        p:"329"
    },
    {
        id:"3",
        img:"./IMG/Primavera Gourmet-Pizza.jpg",
        h3:"Primavera Gourmet-Pizza",
        p:"479"
    },
    {
        id:"4",
        img:"./IMG/Smoked Chicken Gourmet-Pizza.jpg",
        h3:"Smoked Chicken Gourmet-Pizza",
        p:"539"
    },
    {
        id:"5",
        img:"./IMG/Margherita.jpg",
        h3:"Margherita",
        p:"629"
    },
    {
        id:"6",
        img:"./IMG/Farmhouse.png",
        h3:"Farmhouse",
        p:"239"
    },
    {
        id:"7",
        img:"./IMG/Peppy Paneer.jpg",
        h3:"Peppy Paneer",
        p:"448"
    },
    {
        id:"8",
        img:"./IMG/Veg Extravaganza.jpg",
        h3:"Veg Extravaganza",
        p:"459"
    },
    {
        id:"9",
        img:"./IMG/Veggie Paradise.jpg",
        h3:"Veggie Paradise",
        p:"559"
    },
    {
        id:"10",
        img:"./IMG/Cheese n Corn.jpg",
        h3:"Cheese n Corn",
        p:"349"
    },
    {
        id:"11",
        img:"./IMG/Pepper Barbecue Chicken.jpg",
        h3:"Pepper Barbecue Chicken",
        p:"449"
    },
    {
        id:"12",
        img:"./IMG/Chicken Sausage.jpg",
        h3:"Chicken Sausage",
        p:"369"
    }
   

]

function add(id){
    location.href=`dominoscheckout.html?id=${id}`
}

let cardwrap=document.getElementsByClassName("card_wrap")[0];
let totalwrap=document.getElementsByClassName("total_wrap")[0];



let qunt=1;

function inc(){
    ch()
    if(qunt<10){
    return qunt++;
    }
}
function dec(){
    ch()
    if(qunt>1){
        return qunt--;
        }
   
}
function checkout(total){
    alert(`your order is placed with amount ${total}`);
    history.go(-1);
}

function ch(){
    let urlid= new URLSearchParams(location.search).get("id");
   
   
    cardsdata.forEach(function(x){
        if(x.id === urlid){
             price=x.price;
            cardwrap.innerHTML=`<div class="card">
            <img src='${x.img}' alt="Burger Combo for 2: McChicken Burger">
            <h3>${x.h3}</h3>
            <p class="price">&#x20b9;${x.p}</p>
           
            </div>`

          
            
            totalwrap.innerHTML=`<h1>Price ${x.p} * ${qunt} <br>total :${x.p*qunt}</h1>
                                <h1>Quantity ${qunt}
                                <button onclick='inc()'>+</button>
                                 <button onclick='dec()'>-</button>
                                 
                                 <br><button onclick="checkout(${x.p*qunt})">Checkout</button>`
        }
    })
  
    
}



function ld(){
  
let menu=document.getElementsByClassName("menu")[0];
   
    cardsdata.forEach(function(x){
          menu.innerHTML+=`<div class="card">
          <img src='${x.img}' alt="Burger Combo for 2: McChicken Burger">
          <h3>${x.h3}</h3>
          <p class="price">&#x20b9; ${x.p}</p>
          <button onclick="add(${x.id})">Add to Cart</button>
          </div>`
    })
    
}

