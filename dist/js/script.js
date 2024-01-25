const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeMenu = document.querySelector('.menu__close'),
      loginButton = document.querySelector('.header__btn'),
      modal = document.querySelector('.overlay'),
      modalClose = document.querySelector('.modal__close');


hamburger.addEventListener('click', (e) => {
    menu.classList.add('menu_active');
});

closeMenu.addEventListener('click', (e) => {
    menu.classList.remove('menu_active')
})

loginButton.addEventListener('click', (e) => {
    modal.classList.add('overlay_active')
})

modalClose.addEventListener('click', (e) => {
    modal.classList.remove('overlay_active')
})