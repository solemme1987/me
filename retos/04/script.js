const search = document.getElementById('search');
const boton = document.getElementById('btn');
const input = document.getElementById('input');



boton.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
});