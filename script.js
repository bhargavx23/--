let openbtn=document.getElementById("hamburger");
let closebtn=document.getElementById("closebtn");
let navs=document.getElementById("navs");

openbtn.onclick=function(){
    navs.classList.add("show");
    openbtn.style.display="none";
    

}

closebtn.onclick=function (){
    navs.classList.remove("show");
        openbtn.style.display="flex";

}




