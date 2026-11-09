AOS.init({ once: true, offset: 50, duration: 800 });

// Navbar
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Efek Ngetik
const typedTextSpan = document.getElementById("typed-text");
const textArray = ["Mahasiswa IT", "Web Developer"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(
            0,
            charIndex - 1,
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, 1000);
});

// 3D card Efek
const tiltElements = document.querySelectorAll(
    ".card-custom, .skill-box-modern",
);
tiltElements.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    el.addEventListener("mouseleave", () => {
        el.style.transform = `perspective(1000px) rotateX(0) rotateY(0) translateY(0)`;
    });
});

// Tutup Menu HP Otomatis
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        const navbarCollapse = document.getElementById("navbarNav");
        if (navbarCollapse.classList.contains("show")) {
            let bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (!bsCollapse) {
                bsCollapse = new bootstrap.Collapse(navbarCollapse);
            }
            bsCollapse.hide();
        }
    });
});
