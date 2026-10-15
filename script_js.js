
"use strict";

// ==============================
// 1. MENAMPILKAN TAHUN OTOMATIS
// ==============================
const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// ==============================
// 2. MENU NAVIGASI RESPONSIF
// ==============================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    // Membuka dan menutup menu
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Tutup menu" : "Buka menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Menutup menu setelah bagian materi dipilih
    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach(function (item) {
        item.addEventListener("click", function () {
            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Buka menu"
            );

            menuToggle.textContent = "☰";
        });
    });
}
