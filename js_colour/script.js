const btn = document.getElementById("btn");
var container = document.querySelector(".container");
var display_color = document.getElementById("color_display_name")
var simple = document.getElementById("simple");
var hex = document.getElementById("hex");
var simple_color = false;
var color_name;
//functions and operations
//hex or simple color code selector
simple.addEventListener("click",()=>{
  simple_color=true;
})
simple.addEventListener("click",()=>{
  simple_color=true;
})
//function of changing color of container
function change() {
  simple_color? color_name = getSimplecolor():color_name = gethexcolor();

  container.style.backgroundColor = color_name;
  display_color.textContent = color_name;
}
//function to get hex color value
function gethexcolor() {
 
    var color_name = "#";
    for (var i = 0; i < 6; i++) {
      strng = "ABCDEF123456789";
      color_name += strng.charAt(Math.floor(Math.random() * strng.length));
    }
    return color_name;
  } 
//function to get simple  color value

  function getSimplecolor() {
    var color_name = "pink";
    var colors= ["red","green","blue","orange","yellow"];
    color_name=colors[Math.floor(Math.random()*colors.length)];
    
    return color_name;
  } 
