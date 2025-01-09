// Yemima yang kerjakan

$(document).ready(function () {
    // jadi semua yang ada .slide, .prev dan .next dimasukkan dalam variabel
    const $slides = $(".slide");
    const $prev = $(".prev");
    const $next = $(".next");
    let currentSlide = 0;

    // mau ngambil elemen 0 dari ketiga slide dan ditambahkan aktif jadi nantinya kaya di css baris ke 52-55
    $slides.eq(0).addClass("active");

    // ketika prev diklik, maka 
    $prev.on("click", function () {
        // slide terakhir yang ada actifnya dihapus
        $slides.removeClass("active");
        // kondisi kalau si previous ditekan tapi sudah ada di slide yang ke 0. maka kembali ke slide terakhir
        if (currentSlide === 0) {
            currentSlide = $slides.length - 1;
        } else {
            currentSlide--; // kalau engga, maka slide dikurang 1
        }
        $slides.eq(currentSlide).addClass("active"); // slide sekarang yang sudah berkurng itu ditambahkan aktif pada kelasnya
    });

    //sama kayak previous
    $next.on("click", function () {
        $slides.removeClass("active");
        if (currentSlide === $slides.length - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        $slides.eq(currentSlide).addClass("active");
    });
});

