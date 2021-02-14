const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {

    //  La propiedad innerHeight devuelve la altura interna del 
    // área de contenido de una ventana,
    //la multiplicaion me controla la cnatidad de cards que van a tenr la clase show
     const triggerBottom = window.innerHeight / 5 * 4;

     console.log('TrigerButton',triggerBottom)

    boxes.forEach(box => {

        const boxTop = box.getBoundingClientRect().top
      
            if(boxTop < triggerBottom) {

                box.classList.add('show')

            } else {

                box.classList.remove('show')

            }

       
    })
    
}