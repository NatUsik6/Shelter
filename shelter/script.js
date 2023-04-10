const burgerButton = document.querySelector(".burger-button");
burgerButton.addEventListener('click', toggleBurgerMenuOpen);
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(navLink => navLink.addEventListener('click', disableBurgerMenuOpen));
const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', disableBurgerMenuOpen);

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


alert('Работа не доделана. Не проверяйте, пожалуйста, до утра четверга. :)')