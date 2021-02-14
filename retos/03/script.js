const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const nav = document.getElementById('navMenu');



open.addEventListener('click', () => {
    container.classList.add('show-nav');
    nav.classList.add('show-nav');
});

close.addEventListener('click', () => {
    container.classList.remove('show-nav');
    nav.classList.remove('show-nav');

});