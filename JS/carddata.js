
let cardsdata=[
    {
        id:"1",
        img:"./IMG/m1.jpeg",
        h3:"Burger Combo for Two McChicken Masala Burger",
        p:"449"
    },
    {
        id:"2",
        img:"./IMG/m2.jpeg",
        h3:"McVeggie Burger + McAloo Tikki+ Veg Pizza McPuff",
        p:"350"
    },
    {
        id:"3",
        img:"./IMG/m3.jpeg",
        h3:"McSpicy Chicken Burger",
        p:"349"
    },
    {
        id:"4",
        img:"./IMG/m4.jpeg",
        h3:"Burger Combo for 2: McCheese Burger Veg",
        p:"300"
    },
    {
        id:"5",
        img:"./IMG/m5.jpeg",
        h3:"Burger Combo for 2: McSpicy Deluxe Paneer Burger",
        p:"329"
    },
    {
        id:"6",
        img:"./IMG/m6.png",
        h3:"McAloo Tikki  Burger",
        p:"70"
    },
    {
        id:"7",
        img:"./IMG/m8.jpeg",
        h3:"Fries (M) + Piri Piri Mix",
        p:"59"
    },
    {
        id:"8",
        img:"./IMG/m7.jpeg",
        h3:"Big Spicy Paneer Wrap",
        p:"159"
    },
    {
        id:"9",
        img:"./IMG/m9.jpeg",
        h3:"Cappuccino Coffee (R)",
        p:"200"
    },
    {
        id:"10",
        img:"./IMG/m10.jpeg",
        h3:"Lotus Biscoff Frappe",
        p:"349"
    },
    {
        id:"11",
        img:"./IMG/m11.jpeg",
        h3:"Hot Chocolate (R)",
        p:"216"
    },
    {
        id:"12",
        img:"./IMG/m12.jpeg",
        h3:"McFlurry Oreo ( M )",
        p:"369"
    }
   

]

function add(id){
    location.href=`checkout.html?id=${id}`
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
                                <button onclick='dec()'>-</button>
                                <button onclick='inc()'>+</button>
                                 
                                 
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

