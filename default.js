let canvasBoard=document.querySelector("canvas");
canvasBoard.height=window.innerHeight;
canvasBoard.width=window.innerWidth;
let tool=canvasBoard.getContext("2d");
let body=document.querySelector("body")
let boardTop=canvasBoard.getBoundingClientRect().top;
let boardLeft=canvasBoard.getBoundingClientRect().left;
let xi,yi,xf,yf;
let drawingMode=false;

body.addEventListener("mousedown",function(e){

    xi=e.clientX-boardLeft;
    yi=e.clientY-boardTop;
    if(cTool=="pencil"|| cTool=="eraser"){
        drawingMode=true;
        tool.beginPath();
        tool.moveTo(xi,yi);
    }
   


})

body.addEventListener("mouseup",function(e){
if(cTool=="pencil"|| cTool=="eraser"){
    drawingMode=false;
} 
else{
     xf=e.clientX-boardLeft;
     yf=e.clientY-boardTop;
     let width=xf-xi;
     let height=yf-yi;
    if(cTool=="rect"){
        tool.strokeRect(xi,yi,width,height);
    }
    else if(cTool=="line"){
        tool.beginPath();
        tool.moveTo(xi,yi);
        tool.lineTo(xf,yf);
        tool.stroke();

    }
 }

})

body.addEventListener("mousemove",function(e){
if(drawingMode==false){
    return;
}

    
    xf=e.clientX-boardLeft;
    yf=e.clientY-boardTop;
    tool.lineTo(xf,yf);
    tool.stroke();
    xi=xf;
    yi=yf;
    



})