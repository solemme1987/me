Instrucciones de Implementación

Bienvenidos al reto 9, para cumplirlo deberán seguir lo siguiente:

1. Ver el video de explicación de reto.

2. Tienen los siguientes recursos: HTML y parte del css y js*
   
   * Acá les damos una estructura y una guía de cómo deben hacerlo sientanse libres de cambiar el código en donde necesiten para llegar al resultado final.

3. Deberán completar el css y el js para que el reto funcione.

Resultado: El reto debe ser igual al que visualizan en el video.

¡HINTS!

CSS

- Deben dar estilo a los cajones box, sean detallistas revisen, bordes, sombras, usar display flex para que se vea de la misma forma del video.

- Para la ánimación usaremos la propiedad transform con traslateX porque el efecto de las cajas es en sentido horizontal, 
  revisen cual es el % adecuado para sacarlo de la pantalla (revisar que aplique a cualquier pantalla )

- Recuerden que el efecto contiene una transición (aprox de 0.4s)

- para mostrar la caja en una posición inicial podrán usar .box.show y la misma propiedad con un parámatro inicial

- 
JS

 - Validar paso a paso hacer uso de console.log() y la herramienta de desarrollador - 


Queremos disparar un evento cuando nos desplazamos así que en la ventana, vamos a agregar un detector de eventos de scroll
y cuando ocurra eso, tendremos una función llamada checkboxes porque queremos verificar el posicionamiento de cada caja.

Entonces, ¿dónde está el punto de activación?, ¿Dónde queremos cuando nos desplazamos hacia abajo, dónde queremos que empiecen a aparecer?

Usaremos window.innerHeight para determinar nuestro trigger point (validen que sea un poco menor al la altura normal de la ventana)

entonces usaremos el siguiente método getBoundingClientRect (averiguar su funcionalidad) - https://developer.mozilla.org/es/docs/Web/API/Element/getBoundingClientRect

por último usaremos condicionales para crear el efecto de entrada y salida de elementos box.

Dato curioso:

Existen librerías para hacer este tipo de efectos pueden buscarlo como: Animate on scroll (pueden revisar su documentación si desean pero no aplica para el ejercicio)



