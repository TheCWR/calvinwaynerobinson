document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded, event listener attached.");

    const aboutLink = document.getElementById('about-link');
    const logo = document.getElementById('logo');
    const aboutHeader = document.getElementById('about-header');
    const aboutSection = document.getElementById('about');
    const aboutText = document.getElementById('about-text');
    const navLinks = document.querySelectorAll('.fade-links');
    const mainNav = document.getElementById('main-nav');

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        console.log("About link clicked! Animations should trigger now.");

        // Ensure About is clickable
        aboutLink.style.pointerEvents = "auto";

        // Move and shrink logo gradually
        logo.classList.add('logo-move');

        // Move "About" header to correct position
        aboutHeader.classList.add('about-header-move');

        // Fade out "Projects" and "Contact" before moving them
        navLinks.forEach(link => {
            link.classList.add('fade-out');
        });

        // Move navigation to the top right
        setTimeout(() => {
            mainNav.classList.add('nav-top-right');
        }, 500);

        // Fade in "Projects" and "Contact" as a vertical stack
        setTimeout(() => {
            navLinks.forEach(link => {
                link.classList.remove('fade-out');
            });
        }, 1000);

        // Show About section smoothly
        setTimeout(() => {
            aboutSection.classList.add('fade-in');
            aboutText.classList.add('fade-in');
        }, 1000);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Set the current year in the footer
    document.getElementById("year").textContent = new Date().getFullYear();
});