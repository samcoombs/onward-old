"use strict";

const carouselImages = document.querySelector(".carousel__images");
const carouselButtons = document.querySelectorAll(".carousel__btn");
const numberOfImages = document.querySelectorAll(".carousel__item--img").length;
const carouselImg = document.querySelectorAll(".carousel__item--img");
const bali = document.querySelector(".bali");
const vietnam = document.querySelector(".vietnam");
const cambodia = document.querySelector(".cambodia");
const thailand = document.querySelector(".thailand");
const exploreBtn = document.getElementById("hero-btn");

let imageIndex = 1;
let translateX = 0;

// Card carousel

carouselButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "previous") {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 22;
      }
    } else {
      if (imageIndex !== numberOfImages - 1) {
        imageIndex++;
        translateX -= 22;
      } else {
        if (imageIndex === numberOfImages - 1) {
          translateX = 0;
          imageIndex = 1;
        }
      }
    }
    carouselImages.style.transform = `translateX(${translateX}rem)`;
  });
});

// To change hero

carouselImg.forEach((image) => {
  image.addEventListener("click", (e) => {
    // console.log(e.target);
    if (e.target.id === "vietnam-card") {
      bali.style.opacity = 0;
      thailand.style.opacity = 0;
      cambodia.style.opacity = 0;
      vietnam.style.opacity = 1;
      exploreBtn.setAttribute("href", "./destinations/vietnam.html");
    } else if (e.target.id === "cambodia-card") {
      vietnam.style.opacity = 0;
      bali.style.opacity = 0;
      thailand.style.opacity = 0;
      cambodia.style.opacity = 1;
      exploreBtn.setAttribute("href", "./destinations/cambodia.html");
    } else if (e.target.id === "thailand-card") {
      cambodia.style.opacity = 0;
      vietnam.style.opacity = 0;
      bali.style.opacity = 0;
      thailand.style.opacity = 1;
      exploreBtn.setAttribute("href", "./destinations/thailand.html");
    } else if (e.target.id === "bali-card") {
      thailand.style.opacity = 0;
      cambodia.style.opacity = 0;
      vietnam.style.opacity = 0;
      bali.style.opacity = 1;
      exploreBtn.setAttribute("href", "./destinations/bali.html");
    }
  });
});
