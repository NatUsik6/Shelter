const burgerButton = document.querySelector(".burger-button");
burgerButton.addEventListener('click', toggleBurgerMenuOpen);
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(navLink => navLink.addEventListener('click', disableBurgerMenuOpen));
const overlays = document.querySelectorAll('.overlay');
overlays.forEach(overlay => overlay.addEventListener('click', disableBurgerMenuOpen));
overlays.forEach(overlay => overlay.addEventListener('click', disablePopupOpen));
const petsCards = document.querySelectorAll(".cards figure");
petsCards.forEach(card => card.addEventListener('click', togglePopupOpen));
const popup = document.querySelector('.popup');

function toggleBurgerMenuOpen() {
    const header = document.querySelector('header');
    header.classList.toggle('burger-menu-open');
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden';
}

function disableBurgerMenuOpen() {
    const header = document.querySelector('header');
    if (header.classList.contains('burger-menu-open')) {
        header.classList.remove('burger-menu-open')
    }

    document.body.style.overflow = '';
}

function togglePopupOpen() {
    popup.classList.toggle('popup-open');
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden';
}

function disablePopupOpen() {
    if (popup.classList.contains('popup-open')) {
        popup.classList.remove('popup-open')
    }

    document.body.style.overflow = '';
}

alert('Спасибо большое, что не проверял.) Однако у меня не вышло реализовать всё.(');
