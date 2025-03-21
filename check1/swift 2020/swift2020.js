// const slides = document.querySelectorAll(".slide")
// let counter = 0;
// // console.log(slides)
// slides.forEach(
//     (slide,index) => {
//         slide.style.left = `${index * 100}%`;
//     }
// );

// const goPrev = () => {
//     counter--;
//     slideImage();
// };

// const goNext = () =>  {
//     counter++;
//     slideImage();
// };


// const slideImage = () => {
//     slide.forEach(
//         (slide) => {
//             slide.style.transfrom = `translateX (-${counter * 100}%)`;
//         }
//     );
// };
// slideImage();


const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    counter--;
    slideImage();
};

const goNext = () => {
    counter++;
    slideImage();
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

// Call the initial slideImage function
// slideImage();




