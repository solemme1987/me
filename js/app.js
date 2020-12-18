let menuButtom = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

function activarMenu() {
    menuButtom.classList.toggle("active");
    if (menuButtom.classList.contains('active')) {
        menuButtom.classList.toggle('fa-bars');
        menuButtom.classList.toggle('fa-times');
    } else {
        menuButtom.classList.toggle('fa-bars');
        menuButtom.classList.toggle('fa-times');
    }
    menu.classList.toggle("active");
    callback();
}

function callback() {
    menu.addEventListener('click', () => {
        menu.classList.toggle("active");
        menuButtom.classList.toggle('fa-bars');
        menuButtom.classList.toggle('fa-times');
    });
}