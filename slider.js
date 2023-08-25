//visible part of slider
let viewport = document.getElementById('slider__viewport').offsetWidth;
let btnNext = document.getElementById('slider__button_next');
let btnPrev = document.getElementById('slider__button_prev');

//slider itself with pictures
let slider = document.querySelector('div.slider');
let viewSliders = document.querySelectorAll('.viewSlide');
let viewSlide = 0;
viewSliders[viewSlide].style.backgroundColor = 'orange';

btnNext.addEventListener('click', function () {
    viewport = document.getElementById('slider__viewport').offsetWidth;
    if (viewSlide < 4) {
        viewSliders[viewSlide].style.backgroundColor = 'yellow';
        viewSlide++;
        viewSliders[viewSlide].style.backgroundColor = 'orange';
    }
    else {
        viewSlide = 0;
        viewSliders[viewSlide].style.backgroundColor = 'orange';
        viewSliders[viewSliders.length - 1].style.backgroundColor = 'yellow';
    }
    slider.style.right = viewSlide * viewport + 'px';
})

// window resize************* titcher's example
// window.addEventListener('resize',(e) => {
//      const width= document.body.clientWidth; 
//      const getInput = document.getElementById("text"); 
//      getInput.value = width;
// });


// btnPrev.addEventListener('click', function () { or

btnPrev.onclick= function () {
        if (viewSlide > 0) {
            viewSliders[viewSlide].style.backgroundColor = 'yellow';
            viewSlide--;
            viewSliders[viewSlide].style.backgroundColor = 'orange';
        }
        else {
            viewSlide = (viewSliders.length - 1);
            viewSliders[viewSliders.length - 1].style.backgroundColor = 'orange';
            viewSliders[0].style.backgroundColor = 'yellow';
        }
        slider.style.left = -viewSlide * viewport + 'px';
    }

// tmr***********************************************
let i =0;
let timerId = setTimeout(function tick() {
    viewport = document.getElementById('slider__viewport').offsetWidth;
if (viewSlide < 4) {
    viewSliders[viewSlide].style.backgroundColor = 'yellow';
    viewSlide++;
    viewSliders[viewSlide].style.backgroundColor = 'orange';
}
else {
    viewSlide = 0;
    viewSliders[viewSlide].style.backgroundColor = 'orange';
    viewSliders[viewSliders.length - 1].style.backgroundColor = 'yellow';
}
slider.style.right = viewSlide * viewport + 'px';
timerId = setTimeout(tick, 3000);
});

