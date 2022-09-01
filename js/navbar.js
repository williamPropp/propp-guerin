const mobileBtn = document.getElementById('mobile-cta');
const mobileBtnExit = document.getElementById('mobile-exit');
const mobileNavBtns = document.getElementById('nav-buttons');
const nav = document.querySelector('nav');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})

mobileNavBtns.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})