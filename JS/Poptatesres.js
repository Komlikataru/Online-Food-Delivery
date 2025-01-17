let ifr = document.querySelector("iframe");

function sectionchanger(val){
    if (val == 1){
        ifr.setAttribute("src","Poptates_overview.html");
    }
    else if (val == 2){
        ifr.setAttribute("src","Poptatesimages.html");
    }
    else if(val == 3)
    {
        ifr.setAttribute("src","menu_row.html");
    }
    else if(val == 4){
        ifr.setAttribute("src","bookatable.html");
    }
}
