function activarMenu() {

    let menuButtom = document.querySelector(".toggle");
    let menu = document.querySelector(".menu");
    menuButtom.classList.toggle("active");
    menu.classList.toggle("active");
    console.log("Inner width", alturaDelViewport = window.innerWidth);
    console.log("Inner heigt", alturaDelViewport = window.innerHeight);
}