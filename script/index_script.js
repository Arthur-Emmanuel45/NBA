

//toggle search
const search = document.querySelector(".fa-search");
const input = document.querySelector('.input_text');

search.addEventListener('click', function() {
    input.classList.toggle('toggle_search');
    input.classList.toggle('input_text');
});

// moblie navigation
const menu = document.querySelector(".fa-bars");
const nav_menu = document.querySelector(".header-nav");

menu.addEventListener('click', function() {
    nav_menu.classList.toggle('header-nav-display');
});