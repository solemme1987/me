const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        //revisar 
        // console.log(x,y);

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        // console.log(buttonTop,buttonLeft);

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        let circulo= document.createElement('span')
        circulo.classList.add('circle');

        console.log(circulo);

        circulo.style.top=`${yInside}px`
        circulo.style.left=`${xInside}px`
        //console.log(xInside,yInside);

        this.appendChild(circulo)

        setTimeout(() => {
            circulo.remove()
        }, 500);

    })
})