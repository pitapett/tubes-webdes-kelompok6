document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentSlide = 0;

    slides[0].classList.add('active');

    prev.addEventListener('click', () => {
        slides.forEach(slide => slide.classList.remove('active'));
        if (currentSlide === 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide--;
        }
        slides[currentSlide].classList.add('active');
    });

    next.addEventListener('click', () => {
        slides.forEach(slide => slide.classList.remove('active'));
        if (currentSlide === slides.length - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        slides[currentSlide].classList.add('active');
    });
});