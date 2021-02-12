const container = document.getElementById('container');
const colors = ['#664296', '#4FAFAE', '#FFEE34', '#EB453D', '#D88533']
const SQUARES = 500;



for(let i = 0; i < SQUARES; i++) {

    const square = document.createElement('div')

    square.classList.add('square')

    square.addEventListener('mouseenter', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)

}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color;
   element.style.boxShadow = `box-shadow: 0 0 3px ${color}`
}

function removeColor(element) {
console.log('estoy saliendo')
element.style.background = '#1d1d1d';
element.style.boxShadow = 'box-shadow: 0 0 2px #000;'
}

function getRandomColor() {
     
    console.log('soy el ramdon',colors[Math.floor(Math.random() * Math.floor(colors.length))])
    return colors[Math.floor(Math.random() * Math.floor(colors.length))]

}