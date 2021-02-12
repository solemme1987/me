const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');


let load = 0;

let opacity=1;

let filtro=30;

let int = setInterval(blurring, 30);


function blurring() {


    if(load<100){
  
      load++;
      opacity= opacity-0.01;//Agrega la nueva opacidad al texto del loading

      loadText.innerText =` ${load}%`;// aplica la nueva opacidad al loading
      loadText.style.opacity=opacity.toFixed(2);//aplica  opacidad al texto del loading
         
      filtro = filtro - 0.30;// me disminuye el blur de la image
      bg.style.filter=(`blur(${filtro}px)`);// aplica el nuevo blur a la imagen cada vez que  le resta
         
    }


}