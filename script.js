/* =====================================
   MYP HAVEN MAIN JAVASCRIPT
===================================== */


/*
    Wait until the page loads
*/

document.addEventListener(
"DOMContentLoaded",
()=>{


/* =====================================
   DARK / LIGHT MODE
===================================== */


const themeButton =
document.querySelector(".theme-btn");


themeButton.addEventListener(
"click",
()=>{


document.body.classList.toggle("dark");



if(document.body.classList.contains("dark")){


themeButton.textContent="☀️";


localStorage.setItem(
"theme",
"dark"
);


}

else{


themeButton.textContent="🌙";


localStorage.setItem(
"theme",
"light"
);


}



});





/*
   Load saved theme
*/


const savedTheme =
localStorage.getItem("theme");



if(savedTheme==="dark"){

document.body.classList.add("dark");

themeButton.textContent="☀️";

}






/* =====================================
   MOBILE MENU
===================================== */


const menuButton =
document.querySelector(".menu-btn");


const navLinks =
document.querySelector(".nav-links");



menuButton.addEventListener(
"click",
()=>{


navLinks.classList.toggle(
"mobile-open"
);


});







/* =====================================
   SMOOTH SCROLL
===================================== */


document
.querySelectorAll("a[href^='#']")
.forEach(link=>{


link.addEventListener(
"click",
function(e){


e.preventDefault();



const target =
document.querySelector(
this.getAttribute("href")
);



target.scrollIntoView({

behavior:"smooth"

});



});


});








/* =====================================
   STATISTICS COUNTER
===================================== */


const counters =
document.querySelectorAll(".counter");



const counterObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(
(entry)=>{


if(entry.isIntersecting){



const counter =
entry.target;



let targetValue;



if(counter===counters[0]){

targetValue=500;

}


else if(counter===counters[1]){

targetValue=250;

}


else if(counter===counters[2]){

targetValue=20;

}


else{

targetValue=8;

}



let current=0;


const speed =
targetValue/100;



const update=()=>{


current+=speed;



if(current < targetValue){


counter.textContent =
Math.floor(current);


requestAnimationFrame(update);


}


else{


counter.textContent =
targetValue+"+";


}



};



update();



counterObserver.unobserve(counter);



}



});


});


counters.forEach(counter=>{

counterObserver.observe(counter);


});









/* =====================================
   SCROLL ANIMATIONS
===================================== */


const animatedElements =
document.querySelectorAll(
".feature-card, .info-card, .testimonial-card, .learning-grid div"
);



const animationObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


});



animatedElements.forEach(element=>{


element.style.opacity="0";

element.style.transform=
"translateY(40px)";


element.style.transition=
"0.6s ease";


animationObserver.observe(element);


});








/* =====================================
   LOGIN / SIGNUP BUTTONS
===================================== */


const loginButton =
document.querySelector(".login-btn");


const signupButton =
document.querySelector(".signup-btn");



loginButton.addEventListener(
"click",
()=>{


alert(
"Login system will be connected with Firebase in Phase 2."
);


});



signupButton.addEventListener(
"click",
()=>{


alert(
"Account creation will be available after Firebase integration."
);


});








/* =====================================
   HERO BUTTONS
===================================== */


const startButton =
document.querySelector(".primary-btn");



startButton.addEventListener(
"click",
()=>{


document
.querySelector("#features")
.scrollIntoView({

behavior:"smooth"

});


});





const exploreButton =
document.querySelector(".secondary-btn");



exploreButton.addEventListener(
"click",
()=>{


document
.querySelector("#learning")
.scrollIntoView({

behavior:"smooth"

});


});









/* =====================================
   FAQ INTERACTION
===================================== */


const faqItems =
document.querySelectorAll(".faq-item");



faqItems.forEach(item=>{


item.addEventListener(
"click",
()=>{


item.classList.toggle(
"active"
);


});


});





});
