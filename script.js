/////////////////////////////////////
//Slider

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".next");
  const btnRight = document.querySelector(".prev");

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
      goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
};
slider();



// /////////////////////////////////////
// //Slider Soloution 2

// const sliders = document.querySelectorAll('.slide');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');

// function reset() {
//     sliders.forEach(slide => {
//         slide.style.display = 'none'
//     })
//     sliders[index].style.display = 'flex'
// }

// function slideRight() {
//     reset()
//     sliders[index].style.display = 'flex';
//     index++;
// }

// function slideLeft() {
//     reset()
//     sliders[index].style.display = 'flex';
//     index--;
// }

// nextBtn.addEventListener('click', () => {
//     if (index > sliders.length - 1) {
//         index = 0
//     }
//     slideRight()
// })

// prevBtn.addEventListener('click', () => {
//     if (index < 0) {
//         index = sliders.length - 1
//     }
//     slideLeft()
// })

// let index = 0;


// /////////////////////////////////////
// //Slider Soloution 3

// const next = document.querySelectorAll(".next");
// const prev = document.querySelectorAll(".prev");
// const slides = document.querySelectorAll(".slide");

// let index = 0;
// display(index);

// function display(index) {
//     slides.forEach((slide) => {
//         slide.style.display = "none";
//     });
//     slides[index].style.display = "flex";
// }

// function nextSlide() {
//     index++;

//     if (index > slides.length - 1) {
//         index = 0;
//     }
//     display(index);
// }

// function prevSlide() {
//     index--;

//     if (index < 0) {
//         index = slides.length - 1;
//     }
//     display(index);
// }

// next.forEach((slide) => slide.addEventListener("click", nextSlide));

// prev.forEach((slide) => slide.addEventListener("click", prevSlide));
