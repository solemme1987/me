const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {

    currentActive++;
    prev.removeAttribute('disabled');
    update();
});

prev.addEventListener('click', () => {
    currentActive--;
    next.removeAttribute('disabled');
    update();
})

function update() {
    //  con esto agrego la clase active a cada circulo 
    // le agrega borde azul a cada uno con esa clase
    circles.forEach((circle, idx) => {
        console.log('Index', idx);
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    // agregamos a la linea azul la clase lo agrega por porcentaje segun la cantidad activa
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if (currentActive === 1) {
        prev.setAttribute('disabled', '');
    } else if (currentActive === circles.length) {
        next.setAttribute('disabled', '');
    } else {

    }
}