// Typing Effect
const text = "Electrical & Computer Engineering Student";
let index = 0;
const typing = document.getElementById("typing");

function typeEffect() {
    if (typing && index < text.length) {
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

window.addEventListener("load", () => {
    typeEffect();
});

// Dark Mode Toggle
const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeBtn.innerHTML = "☀️";
        } else {
            themeBtn.innerHTML = "🌙";
        }
    });
}

// Back To Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

    revealSections();
});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Welcome Message
setTimeout(() => {
    alert("👋 Welcome to Garima kushwah's Portfolio!");
}, 800);

// Scroll Reveal Animation
const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "0.8s ease";
});

function revealSections() {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

}

revealSections();

// Project Card Hover Animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});