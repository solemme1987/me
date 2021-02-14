// window.onload=function(){

//   let  can = document.getElementById('canvas');
//   let  ctx = can.getContext('2d');
//   let width=95;
//   let height=95; 
//     var im = new Image();

//     im.onload = function(){
//         for (let i = 0; i < 6; i++) {
           
//             for (let j = 0; j<6; j++) {
               
//                let x=j*width;
//                let  y=i*height;
//                ctx.drawImage(im,x,y,width,height,x+j*5,y+i*5,width,height);
//                console.log(ctx.drawImage(im,x,y,width,height,x+j*5,y+i*5,width,height));
//             }
            
//         }
//     }

//    im.src='love.jpg';

//    console.log(im);
      
// }


const fill = document.querySelector('#elemento')
const empties = document.querySelectorAll('.empty')


// Cuando empiezo a arrastrar el elemento
fill.addEventListener('dragstart', e =>{
    fill.style.border='2px solid gray';

    setTimeout(() => {
        fill.className='ocultar';
    }, 0);
})

//Mientras esté arrastrando  el elemnto
// fill.addEventListener('drag', e =>{

    
//     // console.log('Drag')
//     // setTimeout()
// })

// cuando suelto el elemento
fill.addEventListener('dragend', e =>{
    // console.log('Drgag end');
    fill.className='fill';
    fill.style.border='0px';
    // setTimeout()
})


empties.forEach((empty,index) => {

    // agrego id independiente a cada  entidad que recibe la foto
    empty.setAttribute('id',`empty${index}`);

    //cuando el elemneto entra donde lo voy a dejar agrega efectos 
    //fondo noegro y borde dashed al elemento que recibe
    empty.addEventListener('dragenter', e =>{
        empty.classList.add('hovered');
    })
    
    //cuando la foto sale de la entidad que se iba a colocar

    empty.addEventListener('dragleave', e =>{

        empty.classList.remove('hovered');

    })

    empty.addEventListener('dragover', e =>{
        e.preventDefault();
        // console.log('Dragover')
        // setTimeout()
    })
    // recibe el elemento
    empty.addEventListener('drop', e =>{

        empty.appendChild(fill);
        empty.classList.remove('hovered');
        
        // setTimeout()
    })
   
    
});









// for(const empty of empties) {

// }

// function dragStart(e) {
//     console.log('Consol normal ', e.target.id  )
     
//     console.log( e.dataTransfer.setData('Data', e.target.id))
    
// }

// function dragEnd() {
//     // this.
// }

// function dragOver(e) {

// }





// function dragDrop() {

// }