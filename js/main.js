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

// Fungsi hitung mundur
function startCountdown() {
    // Tanggal target untuk hitung mundur (Pelaksanaan Seminar: 23 Oktober 2025)
    // Format: 'Bulan Tanggal, Tahun Jam:Menit:Detik'
    const targetDate = new Date("October 23, 2025 00:00:00").getTime();

    // Perbarui hitung mundur setiap 1 detik
    const countdownInterval = setInterval(function() {
        // Dapatkan tanggal dan waktu saat ini
        const now = new Date().getTime();

        // Hitung selisih waktu antara sekarang dan tanggal target
        const distance = targetDate - now;

        // Hitungan untuk hari, jam, menit, dan detik
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Tampilkan hasilnya di elemen HTML yang sesuai
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // Jika hitung mundur selesai, hapus interval dan tampilkan teks
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "<h2 class='text-primary fw-bold'>Seminar Telah Berlangsung!</h2>";
        }
    }, 1000); // Interval 1000ms = 1 detik
}

// Panggil fungsi saat DOM sudah siap
document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    // Inisialisasi WOW.js
    new WOW().init();
    // Panggil fungsi hitung mundur
    startCountdown();
});

// Pastikan untuk menambahkan kode ini bersama dengan kode JS Anda yang sudah ada
// seperti di dalam file `main.js` atau di dalam tag `<script>` di HTML.
