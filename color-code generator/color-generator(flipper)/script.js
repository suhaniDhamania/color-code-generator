const btn=document.querySelector("#btn");
const para=document.querySelector("#color-code");


const getcolor=()=>{
const randomNumber=Math.floor(Math.random()*16777215);

const randomCode="#"+ randomNumber.toString(16);
document.body.style.backgroundColor=randomCode;
para.innerText = randomCode;
}
  btn.addEventListener("click",getcolor);

getcolor();
 


