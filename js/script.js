const navbar = document.querySelector('.navbar');
const btnSlideOne = document.querySelector('.one');
const btnSlideTwo = document.querySelector('.two');
const btnSlideThree = document.querySelector('.three');
const btnSlideFour = document.querySelector('.four');
const btnSlideFive = document.querySelector('.five');
const btnSlideSix = document.querySelector('.six');
const slider = document.querySelector('.slider-testimonial');

window.addEventListener('scroll', function() {
    navbar.classList.toggle('scroll', window.scrollY > 0);
})

$('.btn-slide').click(function() {
    $('.active').removeClass('active');
    $(this).addClass('active');
})

btnSlideOne.addEventListener('click', function() {
    slider.style.left = '0%';
});

btnSlideTwo.addEventListener('click', function() {
    slider.style.left = '-98.3%';
});

btnSlideThree.addEventListener('click', function() {
    slider.style.left = '-196.6%';
});

btnSlideFour.addEventListener('click', function() {
    slider.style.left = '-294.9%';
});

btnSlideFive.addEventListener('click', function() {
    slider.style.left = '-393.2%';
});

btnSlideSix.addEventListener('click', function() {
    slider.style.left = '-491.5%';
});