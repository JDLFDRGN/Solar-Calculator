let state=document.querySelector("#ac");
let screen=document.querySelector(".first>input");
let num=document.querySelectorAll(".number");
let oper=document.querySelectorAll(".operator");
let clr=document.querySelector("#clear");
let del=document.querySelector("#delete");
let tot=document.querySelector("#total");
let lit=document.querySelector("#light");
let but=document.querySelectorAll(".second>button");
let display='';
let calcState=0;
let lightState=0;

state.addEventListener("click",AC);
  clr.addEventListener("click",Clear);
  del.addEventListener("click",Delete);
  tot.addEventListener("click",Total);
  lit.addEventListener("click",Light);

for(let k=0;k<but.length;k++){
but[k].addEventListener("touchstart",highlight);
but[k].addEventListener("touchend",exit)
but[k].addEventListener("mousedown",highlight);
but[k].addEventListener("mouseup",exit)
  
function exit(){
    but[k].style.background="gray";
}
function highlight(){
    but[k].style.background="cyan";
}
}

for(let i=0;i<num.length;i++){
    num[i].addEventListener("click",no);
    function no(){
    if(calcState==1){
        display+=num[i].value;
        screen.value=display;
    }
    }
}
for(let j=0;j<oper.length;j++){
    oper[j].addEventListener("click",operand);
    function operand(){
    if(calcState==1){
        display+=oper[j].value;
        screen.value=display;
    }
    }
}
function Delete(){
    if(calcState==1){
        display=display.substring(0,display.length-1);
        if(display.length<=0){
            display='';
            screen.value=0;
        }else{
            screen.value=display;
        }
    }
}
function AC(){
    calcState=1-calcState;
    if(calcState==1){
        screen.value=0;
    }else{
        screen.style.background="green";
        screen.value='';
        display='';
        lightState=0;
    }
}
function Clear(){
    if(calcState==1){
        display='';
        screen.value=0;
    }
}
function Total(){
    if(calcState==1){   
        display=eval(display);         
        if(display==0){
            display='';
            screen.value=0;
        }else{
            screen.value=display;
        }
    }
}
function Light(){
    if(calcState==1){
        lightState=1-lightState;
        if(lightState==1){
            screen.style.background="greenyellow";
        }else{
            screen.style.background="green";
        }
    }
}
