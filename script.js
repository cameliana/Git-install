window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrolled = window.scrollY;

    if (scrolled === 0) {
        navbar.classList.add('at-top');
        navbar.classList.remove('scrolled');
    } else {
        navbar.classList.add('scrolled');
        navbar.classList.remove('at-top');
    }
});