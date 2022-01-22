"use strict";

/*
  since querySelectorAll gives us the total number
  of items of the class "controls"
  console.log(controls.length) result(3)
*/
const controls = document.querySelectorAll('.controls');


let slides = document.querySelectorAll('#all_slides .slide');
let currentSlide = 0;

const nextSlide = () => {
    goToSlide(currentSlide + 1);
}

const previousSlide = () => {
    goToSlide(currentSlide - 1);
}


// let slideInterval = setInterval(nextSlide, 3000);

// which slide to move to as denoted by "s"
const goToSlide = (s) => {

    slides[currentSlide].className = 'slide';
    currentSlide = (s + slides.length) % slides.length;
    // in active we set opacity to 1.
    slides[currentSlide].className = 'slide active';
}


let playing = true;
let pauseButton = document.querySelector("#pause");



let next_btn = document.querySelector('#next');
let previous_btn = document.querySelector('#previous');

next_btn.onclick = () => {
   /* 
    when the next button is clicked do two things:
      1. run the pauseSLideshow function
      2. run the nextSlide function (adding 1 to the currentSlide)
    */
    // pauseSlideshow();
    nextSlide();
};
previous_btn.onclick = () => {
  /* 
   when the next button is clicked do two things:
     1. run the pauseSLideshow function
     2. run the previousSlide function (removing 1 from the currentSlide)
   */
    // pauseSlideshow();
    previousSlide();
};



