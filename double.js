document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll(".myName span");
    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 2}s`;
    });
});
