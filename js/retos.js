    // capturamos los elementos para la barra de busqueda
    const search = document.getElementById('search');
    const boton = document.getElementById('btn');
    const input = document.getElementById('input');
    
    let gridRetos=document.querySelector('#gridRetos');
    let numero=0;

    // /  aplicamos los  efectos del  search
    boton.addEventListener('click', () => {
        search.classList.toggle('active');
        input.focus();
    });
    
    //Arreglo de retos
    let infoRetos=[
    
        {nombre: 'expanding cards', url: '../retos/01/index.html', img: ''},
        {nombre: 'progress steps', url: '../retos/02/index.html', img: ''},
        {nombre: 'rotating navigat', url: '../retos/03/index.html', img: ''},
        {nombre: 'hidden search', url: '../retos/04/index.html', img: ''},
        {nombre: 'blurry loading', url: '../retos/05/index.html', img: ''},
        {nombre: 'drag and drop', url: '../retos/06/index.html', img: ''},
        {nombre: 'Auto text', url: '../retos/07/index.html', img: ''},
        {nombre: 'hover board', url: '../retos/08/index.html', img: ''},
        {nombre: 'scroll animation', url: '../retos/09/index.html', img: ''},
        {nombre: 'form input wave', url: '../retos/10/index.html', img: ''},
        {nombre: 'dad jokes', url: '../retos/11/index.html', img: ''},
        {nombre: 'sound board', url: '../retos/12/index.html', img: ''},
        {nombre: 'liv user filter', url: '../retos/13/index.html', img: ''},
    
    ]
    // agregamos un pokemon a la imagen de cada reto
    async function getPokemon(){

        /*-----------------------------------------
        CONSUMO DE LA A
        -----------------------------------------*/
        for (const reto of infoRetos) {

            numero = Math.ceil(Math.random()*898)

            const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`);

            const dataPokemon = await url.json();
        
            // DATO DE LA IMAGEN DEL POKEMON
            pokemon = dataPokemon.sprites.front_default;
        
            reto.img=pokemon
            
        }
       /*-----------------------------------------
          FIN DEL CONSUMO DE LA A
       -------------------------------------------*/
       filtrar()
    }
    getPokemon();  
    
    // Funcion para mostrar el filtrado de los retos
    function filtrar (){ 

        const texto= input.value.toLowerCase();

        gridRetos.innerHTML='';

        for(let reto of infoRetos){  
                       
           let nombreReto = reto.nombre.toLowerCase();

           if(nombreReto.indexOf(texto)!== -1){

             gridRetos.innerHTML+=`  
                <div class="grid-item xisart ">
                    <div class="card ">
                        <h2 class="card-tittle"><a href="${reto.url}" target="_blank">${reto.nombre}</a></h2>
                        <div class="card-img-container">
                            <img src="${reto.img}" alt="" class="card-img">
                        </div>
                        <h3 class="card-subtittle">${reto.nombre}</h3>
                    </div>
                </div>
             `
           }
           
        }

        if(gridRetos.innerHTML===''){

            gridRetos.innerHTML=`<h2>No se encontró el Reto con el nombre: " ${texto} "</h2>`;

        }
    
    }
    
    filtrar()
   
    // Evento para el input buscar 
    input.addEventListener('keyup',filtrar)
    // boton.addEventListener('click',filtrar)

;






