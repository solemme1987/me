const botones= document.querySelectorAll('.btn');

botones.forEach(boton => {
    boton.addEventListener('click',playSound)
});

let validar='';

function playSound(e){
 
  let sonido = e.target.innerText
  
  const reproductor = document.createElement('audio');
  
  reproductor.src=`sounds/${sonido}.mp3`;
  
  document.body.appendChild(reproductor);
  
  if(validar!=='' && validar!== sonido){
      reproductor.pause()
      reproductor.currentTime=0;
  }
  
  reproductor.play();
  validar=sonido;

  return reproductor;

}