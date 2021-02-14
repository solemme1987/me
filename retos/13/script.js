const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems=[]

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))


function getData() {

    const url=('https://randomuser.me/api?results=50')
    
    const data=  fetch(url);
       
    data.then(respuesta=>{
        return respuesta.json();results
    }).then(({results})=>{
        result.innerHTML='';
       
        results.forEach(({name,location,picture})=> {
       
        const {first, last}=name
        const {city, country}=location
        const {thumbnail}=picture

        nombre= `${first} ${last}`
        origen=`${city}, ${country}`
          
          let usuario = {
              foto:thumbnail,
              nombre:nombre,
              origen:origen
          }

        result.innerHTML+=`
         
        <li>
         <img src="${thumbnail}"/>
         <div class="user-info">
           <h4>${nombre}</h4>
           <p>${origen}</p>
         </div>
        
        </li>
       
      ` ;
        listItems.push(usuario)
      })
            
    })
    

   
}

function filterData(searchTerm) {

    result.innerHTML='';
    listItems.forEach(({nombre,foto,origen})=> {
        
    if(nombre.toLowerCase().indexOf(searchTerm.toLowerCase())!== -1 || origen.toLowerCase().indexOf(searchTerm.toLowerCase())!== -1){
     
       result.innerHTML+=`
         
        <li>
         <img src="${foto}"/>
         <div class="user-info">
           <h4>${nombre}</h4>
           <p>${origen}</p>
         </div>
        
        </li>
       
      `
    }
       
   });

}