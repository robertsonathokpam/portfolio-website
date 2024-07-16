document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation
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

let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll down jab chahiye, as it goes down the style is changed, so as to accomodate for the whoosh feature.
        header.style.top = '-60px'; 
    } else {
        // Scroll up
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});
