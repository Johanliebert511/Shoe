'use strict'
const overlay = document.querySelector("[data-overlay]")
const navOpenButton = document.querySelector("[data-nav-open-button]");
const navBar = document.querySelector("[data-navbar]");
const navCloseButton = document.querySelector("[data-nav-close-button]");

const navElements = [overlay, navOpenButton, navCloseButton];

for(let i = 0; i < navElements.length; i ++){
    navElements[i].addEventListener("click", () => {
        navBar.classList.toggle("active");
        overlay.classList.toggle("active"); 
    }); 
}

const header = documet.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-goto-top");
window.addEventListener("scroll", () => {
    if(window.scrollY >= 80){
        header.classList.add("active");
        goTopBtn.classList.add("active");
        }
    else {
        header.classList.remove("active");
        goTopBtn.classList.remove("remove");
    }
});