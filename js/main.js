document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    // Inisialisasi WOW.js segera setelah DOM siap.
    // Ini memastikan efek animasi mulai bekerja secepat mungkin
    // tanpa harus menunggu gambar atau aset lain selesai dimuat.
    new WOW().init();
});


window.addEventListener("load", function () {
    "use strict";
    
    // Ambil elemen preloader berdasarkan ID
    const preloader = document.getElementById("preloader");

    // Pastikan elemen preloader ada di halaman
    if (preloader) {
        // Tambahkan kelas CSS 'fade-out' untuk memulai efek transisi.
        // Transisi ini diatur di file CSS Anda.
        preloader.classList.add("fade-out");

        // Tunggu hingga transisi fade-out selesai,
        // lalu hapus elemen preloader sepenuhnya dari DOM.
        // Ini lebih bersih daripada hanya menyembunyikannya.
        preloader.addEventListener("transitionend", function () {
            preloader.remove();
        });
    }

    // Mengatur halaman untuk kembali ke posisi paling atas (scroll 0,0) saat dimuat ulang.
    window.scrollTo(0, 0);

    // Fungsi untuk tombol 'Back to Top'
    // Periksa apakah jQuery tersedia sebelum menggunakannya.
    if (window.jQuery) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });
        $('.back-to-top').click(function (event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        });
    }
});