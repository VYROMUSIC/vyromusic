/* ==========================================
   VYRØ MUSIC
   Premium JavaScript v1
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.remove();

        },1000);

    },1200);

});


const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        nav.style.background="rgba(0,0,0,.75)";
        nav.style.padding="18px 60px";
        nav.style.backdropFilter="blur(30px)";
        nav.style.boxShadow="0 10px 40px rgba(0,0,0,.35)";

    }else{

        nav.style.background="rgba(0,0,0,.35)";
        nav.style.padding="25px 60px";
        nav.style.boxShadow="none";

    }

});

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});


const buttons=document.querySelectorAll(".btn,.btn2");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-6px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});


const gallery=document.querySelectorAll(".gallery img");

gallery.forEach(photo=>{

photo.addEventListener("mouseenter",()=>{

photo.style.filter="brightness(1.1)";
photo.style.transform="scale(1.04)";

});

photo.addEventListener("mouseleave",()=>{

photo.style.filter="brightness(1)";
photo.style.transform="scale(1)";

});

});


const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=`radial-gradient(circle at ${x}px ${y}px,
rgba(255,255,255,.18),
rgba(255,255,255,.05) 55%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.08)";

});

});


const links=document.querySelectorAll("a[href^='#']");

links.forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

const target=document.querySelector(link.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


const hero=document.querySelector(".hero-content");

let offset=0;

window.addEventListener("scroll",()=>{

offset=window.scrollY*.25;

hero.style.transform=`translateY(${offset}px)`;

});


const logo=document.querySelector(".logo img");

setInterval(()=>{

logo.animate([

{transform:"scale(1)"},

{transform:"scale(1.04)"},

{transform:"scale(1)"}

],{

duration:2200

});

},2400);

console.log("VYRØ Music Loaded");

/* Fade classes injected */

const style=document.createElement("style");

style.innerHTML=`

.hidden{

opacity:0;

transform:translateY(70px);

transition:1s;

}

.show{

opacity:1;

transform:translateY(0);

}

`;

document.head.appendChild(style);
