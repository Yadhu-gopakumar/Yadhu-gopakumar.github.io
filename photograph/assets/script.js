//navbar
const harm_icon=document.getElementById("harm_icon");
var navigation_items=document.getElementById("navigation_items");
var is_showing=false;
harm_icon.onclick=function(){
    show_navbar();
}

function show_navbar(){
if (is_showing) {
    navigation_items.style.display="block";
    is_showing=false;
} else {
    navigation_items.style.display="none";
    is_showing=true;
}
}
//feedback slider
var leftbtn = document.getElementById("left");
var rightbtn = document.getElementById("right");
var feedback_container = document.getElementById("feedback_container");
const total_slid = feedback_container.children.length;
var display_slide = feedback_container.children;
var i = 0;
const submit=document.querySelector('submit');
leftbtn.onclick = function () {
    direction("left");
}
rightbtn.onclick = function () {

    direction("right");
}

function direction(direction) {
    if (direction == "left") {
        i--;
        if (i < 0) {
            i = 2;
        }
        for (let index = 0; index < total_slid; index++) {

            display_slide[index].style.display = "none";
        }
        display_slide[i].style.display = "block";

    } else {
        i++;
        if (i > total_slid - 1) {
            i = 0;
        }
        for (let index = 0; index < total_slid; index++) {
            display_slide[index].style.display = "none";

        }
        display_slide[i].style.display = "block";
    }
}
