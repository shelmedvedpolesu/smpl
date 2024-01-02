let menu = document.querySelector('.menu')
let burgerMenu = document.querySelector('.burger_menu')

let loginButton = document.querySelector('.header_btn')
let loginBox = document.querySelector('.login_box')
let loginLink = document.querySelector('.login_link')
let cross = document.querySelector('.cross')

function showBurger(e) {
    console.log(e)

    if (menu.classList.contains('clicked')) {
        burgerMenu.classList.remove('burger_menu_active')
        menu.classList.remove('clicked')
    }
    else {
        burgerMenu.classList.add('burger_menu_active')
        menu.classList.add('clicked')
    }
}

function showLoginBox(e) {
    if (!loginBox.classList.contains('active_login_box')) {
        loginBox.classList.add('active_login_box')
    }
}

function closeLoginBox(e) {
    loginBox.classList.remove('active_login_box')
}


loginLink.addEventListener('click', showLoginBox)
menu.addEventListener('click', showBurger);
loginButton.addEventListener('click', showLoginBox)
cross.addEventListener('click', closeLoginBox)