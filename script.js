// /////////////////////////////////////
// //Slider
const slider = function() {
    const slides = document.querySelectorAll(".slide");
    const btnLeft = document.querySelector(".prev");
    const btnRight = document.querySelector(".next");

    let curSlide = 0;
    const maxSlide = slides.length;


    // Functions
    const goToSlide = function(slide) {
        slides.forEach(
            (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        );
    };

    // Next slide
    const nextSlide = function() {
        if (curSlide === maxSlide - 1) {
            curSlide = 0;
        } else {
            curSlide++;
        }
        goToSlide(curSlide);
    };

    const prevSlide = function() {
        if (curSlide === 0) {
            curSlide = maxSlide - 1;
        } else {
            curSlide--;
        }
        goToSlide(curSlide);
    };

    const init = function() {
        goToSlide(0);
    };
    init();

    // Event handlers
    btnRight.addEventListener("click", nextSlide);
    btnLeft.addEventListener("click", prevSlide);

    // document.addEventListener('keydown', function(e) {
    //     if (e.key === 'ArrowLeft') prevSlide();
    //     e.key === 'ArrowRight' && nextSlide();
    // });
};
slider();



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