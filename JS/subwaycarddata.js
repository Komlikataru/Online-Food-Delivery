
let cardsdata=[
    {
        id:"1",
        img:"./IMG/Cheese Omlete Sandwich.jpeg",
        h3:"Cheese Omlete Sandwich",
        p:"179"
    },
    {
        id:"2",
        img:"./IMG/3 cheese Melt Sandwich+side+coke.jpeg",
        h3:"Fiery Sausage & Paprika ",
        p:"329"
    },
    {
        id:"3",
        img:"./IMG/Aloo Patty Signature Wrap.jpeg",
        h3:"Aloo Patty Signature Wrap",
        p:"149"
    },
    {
        id:"4",
        img:"./IMG/Bombay Grill Sandwich.jpeg",
        h3:"Bombay Grill Sandwich",
        p:"539"
    },
    {
        id:"5",
        img:"./IMG/Chicken Keema Grill Sandwich.jpeg",
        h3:">Chicken Keema Grill Sandwich",
        p:"170"
    },
    {
        id:"6",
        img:"./IMG/Corn and Peas Salad.jpeg",
        h3:"Corn and Peas Salad",
        p:"99"
    },
    {
        id:"7",
        img:"./IMG/Delhi Tikki Sandwich.jpeg",
        h3:"Delhi Tikki Sandwich",
        p:"215"
    },
    {
        id:"8",
        img:"./IMG/Oatmeal Raisin Cookie (eggless).jpeg",
        h3:"Oatmeal Raisin Cookie (eggless)",
        p:"99"
    },
    {
        id:"9",
        img:"./IMG/Thums Up 330ml can.jpeg",
        h3:"Thums Up 330ml can",
        p:"57"
    },
    {
        id:"10",
        img:"./IMG/Chicken Keema Grill Sandwich.jpeg",
        h3:">Chicken Keema Grill Sandwich",
        p:"170"
    },
    {
        id:"11",
        img:"./IMG/Delhi Tikki Sandwich.jpeg",
        h3:"Delhi Tikki Sandwich",
        p:"215"
    },
    {
        id:"12",
        img:"./IMG/Cheese Omlete Sandwich.jpeg",
        h3:"Cheese Omlete Sandwich",
        p:"179"
    }
   

]

function add(id){
    location.href=`subwaycheckout.html?id=${id}`
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

