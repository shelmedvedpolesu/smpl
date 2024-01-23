const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeMenu = document.querySelector('.menu__close');


hamburger.addEventListener('click', (e) => {
    menu.classList.add('menu_active');
});

closeMenu.addEventListener('click', (e) => {
    menu.classList.remove('menu_active')
})