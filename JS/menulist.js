let ifr = document.querySelector("iframe");

function menuchanger(val){
    if (val == 1){
        ifr.setAttribute("src","pizza.html");
    }
    else if (val == 2){
        ifr.setAttribute("src","biryanimenu.html");
    }
    else if(val == 3)
    {
        ifr.setAttribute("src","burger_menu.html");
    }
    else if(val == 4){
        ifr.setAttribute("src","rollsMenu.html");
    }
    else if(val == 5){
        ifr.setAttribute("src","Chicken_menu.html");
    }
    else if(val == 6){
        ifr.setAttribute("src","SouthIndian.html");
    }
}
