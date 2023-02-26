"use strict";

//declartion of variables .
let slides = document.querySelector(".slider-items").children;
let nextSlide = document.querySelector(".right-slide");
let prevSlide = document.querySelector(".left-slide");

const totalSlides = slides.length - 1;

let index = 0;
let interval;
let images = [
  "banner-img-1.jpg",
  "banner-img-2.jpg",
  "banner-img-3.jpg",
  "banner-img-4.jpg",
  "banner-img-5.jpg",
];
let image = document.querySelector(".slider-item img");

nextSlide.onclick = function () {
  next("next");
};

prevSlide.onclick = function () {
  next("prev");
};

let idx = 0;
function changeSlide() {
  if (idx == 5) {
    idx = 0;
  } else {
    image.src = `./assets/img/${images[idx]}`;
    idx++;
  }
}

setInterval(changeSlide, 5000);

const next = (direction) => {
  if (direction == "next") {
    index++;
    if (index == totalSlides) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
};
