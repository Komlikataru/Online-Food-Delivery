let ifr = document.querySelector("iframe");

function sectionchanger(val){
    if (val == 1){
        ifr.setAttribute("src","icenfire_overview.html");
    }
    else if (val == 2){
        ifr.setAttribute("src","icenfireimages.html");
    }
    else if(val == 3)
    {
        ifr.setAttribute("src","menu_row.html");
    }
    else if(val == 4){
        ifr.setAttribute("src","bookatable.html");
    }
}
