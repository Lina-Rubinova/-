//1.preloader
window.addEventListener('load', () => {
    let preloader = document.querySelector('#preloader');
    preloader.classList.add('hide-preloader');
    preloader.classList.add('preloader-hidden');
});


//2.slider
const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider-img');


const sliderLine = document.querySelector('.slider-line');

const sliderBtnNext = document.querySelector('.slider-btn-next');
const sliderBtnPrev = document.querySelector('.slider-btn-prev');

let sliderCount = 0;
let sliderWidth = slider.offsetWidth;

sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlider);
function nextSlide(){
    sliderCount++;
    if (sliderCount>=sliderImages.length){
        sliderCount=0;
    }                                                             
    scrollSliderLine();
}

function prevSlider(){
    sliderCount--;
    if (sliderCount<0){
        sliderCount=sliderImages.length-1;
    }
    scrollSliderLine();
}

function scrollSliderLine(){
    sliderLine.style.transform = `translate(${-sliderCount*sliderWidth}px)`
}
