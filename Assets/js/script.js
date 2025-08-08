// Attiva menu responsive su mobile
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // Animazione fade-in al caricamento
    document.body.classList.add("fade-in");
});
