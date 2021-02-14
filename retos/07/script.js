const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed')
const frase='Fullstack Developer!';
let idx = 1;
let speed= 300/speedEl.value;

writeText()

function writeText(){
    textEl.innerText= frase.slice(0, idx);
    idx++;
    if(idx > frase.length){
        idx=1;
    }
    setTimeout(writeText,speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value )