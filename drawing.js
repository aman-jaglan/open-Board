
let pencil=document.querySelector("#pencil");
let eraser=document.querySelector("#eraser");
let download=document.querySelector("#download");
let rect=document.querySelector("#CloseButton");
let line=document.querySelector("#MoveIcon");

let options=document.querySelectorAll(".option");
let cTool="pencil";



pencil.addEventListener("click",function(e){
    if(cTool=="pencil"){
        options[0].style.display="flex";
    }
    else{
        for(let i=0;i<options.length;i++){
            options[i].style.display="none";
        }
        cTool="pencil";
        tool.strokeStyle="black";
        tool.lineWidth=pencilSize;
        // pencil.style.border="1px solid grey";
       
    
    }
})
eraser.addEventListener("click",function(e){
    if(cTool=="eraser"){
        options[1].style.display="flex";
    }
    else{
        for(let i=0;i<options.length;i++){
            options[i].style.display="none";

        }
        tool.strokeStyle="white";
        cTool="eraser";
        tool.lineWidth=eraserSize;
        // eraser.style.border="1px solid grey";
        
    }
})
download.addEventListener("click",function(e){
        for(let i=0;i<options.length;i++){
            options[i].style.display="none";
        }
        cTool="download";
        // download.style.border="1px solid grey";
})

rect.addEventListener("click",function(e){
    if(cTool=="rect"){
        options[3].style.display="flex";
    }
    else{
        for(let i=0;i<options.length;i++){
            options[i].style.display="none";
        }
        cTool="rect";
        tool.strokeStyle="black";
        tool.lineWidth=rectSize;

    }
})

line.addEventListener("click",function(e){

    if(cTool=="line"){
        options[4].style.display="flex";
    }
    else{
        for(let i=0;i<options.length;i++){
            options[i].style.display="none";
        }
        cTool="line";
        tool.strokeStyle="black";
        tool.lineWidth=lineSize;

    }
   
})

let pencilSize=5;
let eraserSize=5;
let rectSize=5;
let lineSize=5;
let option = document.querySelectorAll(".option");
option[0].addEventListener("click",function(e){

    let elem=["size1","size2","size3","size4"];
    let allTheClasses=e.target.classList;
    let firstClass=allTheClasses[0];
    let test=elem.includes(firstClass);
    if(test){

    if(firstClass=="size1"){
            pencilSize=5;
    }
    else if(firstClass=="size2"){
            pencilSize=10;
    }
    else if(firstClass=="size3"){
        pencilSize=15;
    }
    else{
        pencilSize=20;
    }
}

      tool.lineWidth=pencilSize;
})
option[1].addEventListener("click",function(e){
    let elem=["size1","size2","size3","size4"];
    let allTheClasses=e.target.classList;
    let firstClass=allTheClasses[0];
    let test=elem.includes(firstClass);
    if(test){
    if(firstClass=="size1"){
        eraserSize=10;
    }
    else if(firstClass=="size2"){
            eraserSize=20;
       
    }
    else if(firstClass=="size3"){
            eraserSize=25;
    }
    else{
            eraserSize=35;
    }
}
  tool.lineWidth=eraserSize;
})
option[3].addEventListener("click",function(e){
    let elem=["size1","size2","size3","size4"];
    let allTheClasses=e.target.classList;
    let firstClass=allTheClasses[0];
    let test=elem.includes(firstClass);
    if(test){

    if(firstClass=="size1"){
        rectSize=5;
    }
    else if(firstClass=="size2"){
            rectSize=10;
       
    }
    else if(firstClass=="size3"){
            rectSize=15;
    }
    else{
            rectSize=20;
    }
}

    tool.lineWidth=rectSize;
})

option[4].addEventListener("click",function(e){
    let elem=["size1","size2","size3","size4"];
    let allTheClasses=e.target.classList;
    let firstClass=allTheClasses[0];
    let test=elem.includes(firstClass);
    if(test){

    if(firstClass=="size1"){
        lineSize=5;
    }
    else if(firstClass=="size2"){
            lineSize=10;
       
    }
    else if(firstClass=="size3"){
            lineSize=15;
    }
    else{
            lineSize=20;
    }
}
tool.lineWidth=lineSize;
})

