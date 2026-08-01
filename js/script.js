/*=========================================
    JUICY_ART TATTOO PORTFOLIO
=========================================*/

// HERO BACKGROUND SLIDER

const hero = document.querySelector(".hero");

const images = [
    "images/14.jpeg",
    "images/15.jpeg",
    "images/16.jpeg",
    "images/17.jpeg",
    "images/18.jpeg"
];

let current = 0;

function changeBackground(){

    current++;

    if(current >= images.length){
        current = 0;
    }

    hero.style.backgroundImage =
    `linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),url('${images[current]}')`;

}

// First Image
hero.style.backgroundImage =
`linear-gradient(rgba(0,0,0,.55),rgba(0,0,.55)),url('${images[0]}')`;

// Change every 3 seconds
setInterval(changeBackground,3000);


//============================
// ACTIVE NAV LINK
//============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let currentSection="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(pageYOffset>=sectionTop){

            currentSection=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+currentSection){

            link.classList.add("active");

        }

    });

});


//============================
// SCROLL REVEAL
//============================

const reveals = document.querySelectorAll("section");

window.addEventListener("scroll", revealSection);

function revealSection(){

    reveals.forEach(sec=>{

        const top = sec.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(top < windowHeight - 100){

            sec.classList.add("show");

        }

    });

}

revealSection();


//============================
// SMOOTH NAVIGATION
//============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


//============================
// NAVBAR SHADOW
//============================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.style.background="#000";

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.6)";

    }

    else{

        header.style.background="rgba(0,0,0,.55)";

        header.style.boxShadow="none";

    }

});


//============================
// GALLERY IMAGE ANIMATION
//============================

const galleryImages=document.querySelectorAll(".gallery img");

galleryImages.forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.filter="brightness(110%)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.filter="brightness(100%)";

    });

});

