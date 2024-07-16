document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', function() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    });

    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
});

