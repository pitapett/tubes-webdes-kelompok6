document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0; // Slide saat ini
    const slider = document.getElementById("slider");
    const totalSlides = document.querySelectorAll(".slide").length;

    function updateSlider() {
        const offset = currentIndex * -100; // Menghitung posisi geser
        slider.style.transform = `translateX(${offset}vw)`;

        // Update tombol prev/next
        document.getElementById("prevButton").disabled = currentIndex === 0;
        document.getElementById("nextButton").disabled = currentIndex === totalSlides - 1;
    }

    document.getElementById("nextButton").addEventListener("click", function () {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    document.getElementById("prevButton").addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
});