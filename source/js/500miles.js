;
(function () {
    var btnMenu = document.querySelector('.btn-menu');
    var menu = document.querySelector('.menu-outer');
    btnMenu.addEventListener('click', function (e) {
        // btnMenu.classList.add('btn-menu-fixed');
        if (btnMenu.classList.contains('btn-menu-fixed')) {
            btnMenu.classList.remove('btn-menu-fixed');
            menu.classList.add('menu-fade-out');
        } else {
            btnMenu.classList.add('btn-menu-fixed');
            menu.classList.add('menu-fade-in');
        }
        menu.classList.add('menu-fade-in');
    }, false);
})();