// Add any JavaScript effects or interactivity here

document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth scrolling for navigation
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
