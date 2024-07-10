// script.js
document.addEventListener('scroll', function() {
    const headerSearchBar = document.querySelector('.header-search-bar');
    const navLinks = document.querySelector('.nav-links');
    const categories = document.querySelector('.categories');
    const header = document.querySelector('header');

    if (window.scrollY >= categories.offsetTop - header.offsetHeight) {
        headerSearchBar.style.display = 'flex';
        navLinks.style.display = 'none';
    } else {
        headerSearchBar.style.display = 'none';
        navLinks.style.display = 'flex';
    }
});
