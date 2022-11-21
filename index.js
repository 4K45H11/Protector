const headEl=document.querySelector("header");
const homeEl=document.querySelector(".home");
const divEl=document.getElementById("container");
const aboutEl=document.getElementById("about");

// console.log(homeEl);
window.addEventListener("scroll",()=>{
    // console.log(window.scrollY);
   headEl.classList.toggle("sticky",window.scrollY>=15);
   console.log(window.pageYOffset/1000);
   upDateBackground();
});
function upDateBackground(){
    homeEl.style.opacity=1.3-window.pageYOffset/1000;
    
}