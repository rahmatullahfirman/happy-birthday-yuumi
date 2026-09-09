```javascript
const slides = document.querySelectorAll(".photo-slide");
const dotsContainer = document.getElementById("dots");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const counter = document.getElementById("counter");

let currentSlide = 0;


/* =========================
   CREATE DOTS
========================= */

slides.forEach((_, index) => {

    const dot = document.createElement("span");

    dot.classList.add("dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
        showSlide(index);
    });

    dotsContainer.appendChild(dot);
});


const dots = document.querySelectorAll(".dot");


/* =========================
   SHOW SLIDE
========================= */

function showSlide(index) {

    if (index >= slides.length) {
        currentSlide = 0;
    }

    else if (index < 0) {
        currentSlide = slides.length - 1;
    }

    else {
        currentSlide = index;
    }


    slides.forEach((slide, i) => {

        slide.classList.toggle(
            "active",
            i === currentSlide
        );

    });


    dots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === currentSlide
        );

    });


    counter.textContent =
        `${currentSlide + 1} / ${slides.length}`;
}


/* =========================
   NEXT
========================= */

nextBtn.addEventListener("click", () => {

    showSlide(currentSlide + 1);

});


/* =========================
   PREVIOUS
========================= */

prevBtn.addEventListener("click", () => {

    showSlide(currentSlide - 1);

});


/* =========================
   KEYBOARD
========================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {
        showSlide(currentSlide + 1);
    }

    if (event.key === "ArrowLeft") {
        showSlide(currentSlide - 1);
    }

});


/* =========================
   SWIPE MOBILE
========================= */

let touchStartX = 0;

let touchEndX = 0;


document.querySelector(".photo-frame")
    .addEventListener("touchstart", (event) => {

        touchStartX =
            event.changedTouches[0].screenX;

    });


document.querySelector(".photo-frame")
    .addEventListener("touchend", (event) => {

        touchEndX =
            event.changedTouches[0].screenX;

        handleSwipe();

    });


function handleSwipe() {

    const difference =
        touchStartX - touchEndX;


    if (Math.abs(difference) < 50) {
        return;
    }


    if (difference > 0) {

        showSlide(currentSlide + 1);

    }

    else {

        showSlide(currentSlide - 1);

    }

}


/* =========================
   AUTO START
========================= */

showSlide(0);
```
