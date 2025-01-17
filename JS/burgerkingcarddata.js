
let cardsdata=[
    {
        id:"1",
        img:"./IMG/Veg Whopper JR+Coca Cola.jpeg",
        h3:"Veg Whopper JR+Coca Cola",
        p:"139"
    },
    {
        id:"2",
        img:"./IMG/2 MED Fries.jpeg",
        h3:"2 MED Fries",
        p:"139"
    },
    {
        id:"3",
        img:"./IMG/BK Veggie Burger+Veg Taco.jpeg",
        h3:"BK Veggie Burger+Veg Taco",
        p:"139"
    },
    {
        id:"4",
        img:"./IMG/Veg Makhani Burst Burger+Medium Peri Peri Fries.jpeg",
        h3:"Veg Makhani Burst Burger+Medium Peri Peri Fries",
        p:"139"
    },
    {
        id:"5",
        img:"./IMG/Chicken Whopper Jr Double Patty.jpeg",
        h3:"Chicken Whopper Jr Double Patty",
        p:"139"
    },
    {
        id:"6",
        img:"./IMG/Whopper JR Veg+ Crispy Veg.jpeg",
        h3:"Whopper JR Veg+ Crispy Veg",
        p:"239"
    },
    {
        id:"7",
        img:"./IMG/The Allu Arjun Combo.jpg",
        h3:"The Allu Arjun Combo",
        p:"448"
    },
    {
        id:"8",
        img:"./IMG/Crispy Chikan+Crunchy Chikan.jpeg",
        h3:"Crispy Chikan+Crunchy Chikan",
        p:"139"
    },
    {
        id:"9",
        img:"./IMG/1Crispy Veg Double Patty+1MED Fries.jpeg",
        h3:"1Crispy Veg Double Patty+1MED Fries",
        p:"57"
    },
    {
        id:"10",
        img:"./IMG/BK Veggie Burger+Crispy Veg Burger.jpeg",
        h3:"BK Veggie Burger+Crispy Veg Burger",
        p:"199"
    },
    {
        id:"11",
        img:"./IMG/Crispy Chikan +MED Fries.jpeg",
        h3:"Crispy Chicken +MED Fries",
        p:"599"
    },
    {
        id:"12",
        img:"./IMG/Chikan Whopper.jpeg",
        h3:"Chicken Whopper",
        p:"948"
    }
   

]

function add(id){
    location.href=`burgerkingcheckout.html?id=${id}`
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

