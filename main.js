var MouzEvend= "empty";
var last_x, last_y;
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color = "blue";
width = 2;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
MouzEvend="mousedown";
color= document.getElementById("colorinput").value;
width= document.getElementById("widthinput").value;
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
 current_x=e.clientX-canvas.offsetLeft;
 current_y=e.clientY-canvas.offsetTop;
 if(MouzEvend=="mousedown"){
     ctx.beginPath();
     ctx.strokeStyle = color;
     ctx.lineWidth = width;
     console.log("x =" + last_x + " y =" + last_y);
    ctx.moveTo(last_x, last_y);
    console.log("x =" + current_x + " y =" + current_y);
    ctx.lineTo(current_x, current_y);
    ctx.stroke();
    }
    last_x=current_x;
last_y=current_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
MouzEvend="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
MouzEvend="mouseleave";
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}



var width = screen.width;


if(width < 992){
new_width = screen.width-70;
new_height = screen.height-300;
document.getElementById("myCanvas").width = new_width
document.getElementById("myCanvas").height = new_height
document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
console.log("touchstart");
last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    console.log("touchmove");
 current_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
 current_position_of_y=e.touches[0].clientY-canvas.offsetTop;
 
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=width;
     console.log("x =" + last_x + " y =" + last_y);
    ctx.moveTo(last_x, last_y);
    console.log("x =" + current_x + " y =" + current_y);
    ctx.lineTo(current_x, current_y);
    ctx.stroke();
}
    last_x=current_x;
last_y=current_y;


