document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menuLinks = document.querySelector('.menu-links');
    const body = document.body;

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        menuLinks.classList.toggle('active');
        body.style.overflow = menuLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    document.querySelectorAll('.menu-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            menuLinks.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menuLinks.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnHamburger && menuLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            menuLinks.classList.remove('active');
            body.style.overflow = '';
        }
    });
});