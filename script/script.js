document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav');
    const menuItems = document.querySelectorAll('.menu-item');

    // Toggle mobile menu
    mobileToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        console.log('Menu clicked'); // Debug line
    });

    // Handle dropdown toggles
    menuItems.forEach(item => {
        const toggle = item.querySelector('.dropdown-toggle');
        if (toggle) {
            toggle.addEventListener('click', function() {
                if (window.innerWidth <= 968) {
                    item.classList.toggle('active');
                }
            });
        }
    });
});