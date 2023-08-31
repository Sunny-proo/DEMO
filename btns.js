let wonsound=new Audio("won");
  let audioturn=new Audio("click")
let allbtns=document.querySelectorAll(".inner");
let turn="X";
function changeturn(){
  if(turn=="X"){
    return turn="0";
  }
  else{
    return turn="X";
  }
}
function start(){
  let btn=this;
  let id=btn.getAttribute("id");
  if(id=="multi"){
    for(btn of allbtns){
  btn.addEventListener("click",btnpress);
  
 
 }}
  else if(id=="cmp"){
     computer();

    
    
  }
    
  
}
let twobtn=document.querySelectorAll(".inn");
for(btn2 of twobtn){
  btn2.addEventListener("click", start);
}


function btnpress(){
  audioturn.play();
  let btn=this;
  let dr=btn.getAttribute("id");
  a=`#${dr}`;
  let sc=document.querySelector(a);
  sc.innerText=turn;
  changeturn();
  checkwin();

}
let rest=document.querySelector("#reset");
rest.addEventListener("click", reset);
function reset(){
  let line=document.querySelector(".line");
try{
  if(clss!==""){
  line.removeAttribute("class", clss);
  
}
}
catch(err){
  console.log(err)
}
  img.removeAttribute("class", "pro");
  for(btn of allbtns){
    btn.innerText="";
  }
  turn="X";
  start2()
  return arr=["btn1","btn2","btn3","btn4","btn5","btn6","btn7","btn8","btn9"];
  
  
}
function start2(){
  for(btn2 of twobtn){
  btn2.addEventListener("click", start);
}
}
let arr=["btn1","btn2","btn3","btn4","btn5","btn6","btn7","btn8","btn9"];
function computer(){
  let len=arr.length-1;
  let idx=Math.floor(Math.random()*len);
  a=`#${arr[idx]}`;
 
 b= arr.splice(idx,1);

  let sc=document.querySelector(a);
  sc.innerText="X"
  changeturn();
  for(buttn of allbtns){
    buttn.addEventListener("click",btn2press);
  }
}

function btn2press(){
  audioturn.play();
  let btn=this;
  let dr=btn.getAttribute("id");
  a=`#${dr}`;
  let sc=document.querySelector(a);
  sc.innerText=turn;
  let idx=arr.indexOf(dr);
  let b=arr.splice(idx,1);
  let len=arr.lentgh-1;
  setTimeout(computer, 1000);
  changeturn();

}
function checkwin(){

  
  let btn1=document.querySelector("#btn1");
  let btn2=document.querySelector("#btn2");
  let btn3=document.querySelector("#btn3");
  let btn4=document.querySelector("#btn4");
  let btn5=document.querySelector("#btn5");
  let btn6=document.querySelector("#btn6");
  let btn7=document.querySelector("#btn7");
  let btn8=document.querySelector("#btn8");
  let btn9=document.querySelector("#btn9");
 

 let line=document.querySelector(".line");

  if(btn1.innerText==btn2.innerText && btn2.innerText==btn3.innerText && (btn1.innerText=="0" || btn1.innerText=="X")){
    let img=document.querySelector("#img");
    img.setAttribute("class", "pro");
    wonsound.play();
    line.classList.add("l1");
    clss="l1"
  }
  if(btn1.innerText==btn4.innerText && btn4.innerText==btn7.innerText && (btn1.innerText=="0" || btn1.innerText=="X")){
    let img=document.querySelector("#img");
    img.setAttribute("class", "pro");
    wonsound.play();
    line.classList.add("l2");
    clss="l2"
  }
    if(btn1.innerText==btn5.innerText && btn5.innerText==btn9.innerText && (btn1.innerText=="0" || btn1.innerText=="X")){
    let img=document.querySelector("#img");
    img.setAttribute("class", "pro");
    wonsound.play();
    line.classList.add("l3");
    clss="l3"
  }
  if(btn2.innerText==btn5.innerText && btn5.innerText==btn8.innerText && (btn2.innerText=="0" || btn2.innerText=="X")){
    let img=document.querySelector("#img");
    img.setAttribute("class", "pro");
    wonsound.play();
    line.classList.add("l4");
    clss="l4"
  }
  
  if(btn3.innerText==btn5.innerText && btn5.innerText==btn7.innerText && (btn3.innerText=="0" || btn3.innerText=="X")){
    let img=document.querySelector("#img");
    img.setAttribute("class", "pro");
    wonsound.play();
    line.classList.add("l5");
    clss="l5"
  }
  if(btn4.innerText==btn5.innerText && btn5.innerText==btn6.innerText && (btn4.innerText=="0" || btn4.innerText=="X")){
    let img=document.querySelector("#img");
    img.setAttribute("class", "pro");
    wonsound.play();
    line.classList.add("l6");
    clss="l6"
  }
  if(btn3.innerText==btn6.innerText && btn9.innerText==btn6.innerText && (btn3.innerText=="0" || btn3.innerText=="X")){
    let img=document.querySelector("#img");
    img.setAttribute("class", "pro");
    wonsound.play();
    line.classList.add("l7");
    clss="l7"
  }
  if(btn7.innerText==btn8.innerText && btn9.innerText==btn7.innerText && (btn7.innerText=="0" || btn7.innerText=="X")){
    let img=document.querySelector("#img");
    img.setAttribute("class", "pro");
    wonsound.play();
    line.classList.add("l8");
    clss="l8"
  }
  return clss;
  
  
}