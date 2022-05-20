let redcolor=document.querySelector(".red");
let greencolor=document.querySelector(".green");
let bluecolor=document.querySelector(".blue");
redcolor.addEventListener("click",function(){
    tool.strokeStyle="lightcoral";
})
greencolor.addEventListener("click",function(){
    tool.strokeStyle="lightgreen";
})
bluecolor.addEventListener("click",function(){
    tool.strokeStyle="lightskyblue";
})