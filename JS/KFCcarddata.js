
let cardsdata=[
    {
        id:"1",
        img:"./IMG/Peri Peri 10 Leg Pc & 4 Dips.jpg",
        h3:"Peri Peri 10 Leg Pc & 4 Dips",
        p:"948"
    },
    {
        id:"2",
        img:"./IMG/Smoky Grilled Biryani Bucket.jpg",
        h3:"Smoky Grilled Biryani Bucket ",
        p:"329"
    },
    {
        id:"3",
        img:"./IMG/Classic Chicken Roll Meal.jpg",
        h3:"Classic Chicken Roll Meal",
        p:"479"
    },
    {
        id:"4",
        img:"./IMG/Chicken & Krispers Combo.jpg",
        h3:"Chicken & Krispers Combo",
        p:"539"
    },
    {
        id:"5",
        img:"./IMG/Chocolate Lava Cake.jpg",
        h3:"Chocolate Lava Cake",
        p:"108"
    },
    {
        id:"6",
        img:"./IMG/Large Fries.jpg",
        h3:"Large Fries",
        p:"119"
    },
    {
        id:"7",
        img:"./IMG/The Allu Arjun Combo.jpg",
        h3:"The Allu Arjun Combo",
        p:"448"
    },
    {
        id:"8",
        img:"./IMG/Popcorn & Fries bucket.jpg",
        h3:"Popcorn & Fries bucket",
        p:"319"
    },
    {
        id:"9",
        img:"./IMG/Pepsi Black Can 300 ml.jpg",
        h3:"Pepsi Black Can 300 ml",
        p:"57"
    },
    {
        id:"10",
        img:"./IMG/Veg Biryani Bucket.jpg",
        h3:"Veg Biryani Bucket",
        p:"199"
    },
    {
        id:"11",
        img:"./IMG/Bucket for Two.jpg",
        h3:"Bucket for Two",
        p:"599"
    },
    {
        id:"12",
        img:"./IMG/Peri Peri 10 Leg Pc & 4 Dips.jpg",
        h3:"Peri Peri 10 Leg Pc & 4 Dips",
        p:"948"
    }
   

]

function add(id){
    location.href=`KFCCheckout.html?id=${id}`
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

