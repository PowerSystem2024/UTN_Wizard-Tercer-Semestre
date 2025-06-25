# La Leyenda de Aang: El Avatar Parte 01

## ¿Que es el DOM?
<sub>
Document Object Model: Modelo de Objetos
El Dom es la forma en la que el navegador por dentro
esctructura las etiquetas HTML para que se puedan
manipular en código JavaScript.</sub>
<sub>
El navegador es un Objeto que internamente lo llama
JavaScript: window, estas son cada una de la pestañas
del navegador.</sub>
<sub>
Tambien esta la barra de la dirección de los sitios
web y esta es la que detecta que la pagina web cargue,
pero no es la pagina web en si, el HTML y JavaScript
con sus botones y demás viven dentro del window y se 
llama: document</sub>
<sub>
window es pensar en le navegador entero y en los enventos
del navegador.</sub>
<sub>
document: es pensar especificamente en lo que esta dentro
de la etiqueta HTML.</sub>
<sub>donde se pone titulo (h1), un párrafo (p), o un botón
(button)</sub>
<sub>Ahora a un botón se le da click, y a este click se le 
puede pegar una funcion y que esta se ejecute ose
invoque, a esto se lo llama: escuchador de eventos.</sub>

## ¿Como se llama?
<sub>eventListener esto significa que el 
navvegador entero esta escuchando en espera de que le
demos click al botón o cualquier otra cosa como evento,
por ejemplo el evento de que la pagina termine de cargar,
también es un evento y le podemos pegar una función,
también podemos poner una función que al cambiar el tamaño
del navegador, genere cosas como el acomodamiento de las
partes según el dispositivo que estamos utilizando.</sub>
<sub>
Esta función se llama responsive: configura el alto y ancho
de un sitio web, para dar formato al sitio entre el uso de
cualquier dispositivo, en diferentes tamaños</sub>

# La Leyenda de Aang: El Avatar Parte 02

## ¿Por qué al principio no funcionaba el script?
<sub>
Cuando se coloca la etiqueta <script src="./js/avatar.js"></script> en la parte superior 
del HTML, el archivo JavaScript intenta acceder a elementos del documento que todavía no han sido cargados por el navegador. Por eso, el código no funciona correctamente: los elementos aún no existen en el DOM cuando se ejecuta el script.
</sub>

## ¿Cómo se solucionó?
<sub>
Para solucionar este problema, se usa un escuchador de eventos que espera a que toda la página esté completamente cargada. Esto se logra con el evento load de window, el cual ejecuta la función iniciarJuego solamente cuando todo el documento HTML ha sido procesado. De esta forma, nos aseguramos de que los elementos estén disponibles para ser manipulados desde el código JavaScript.
</sub>

## Tarea
<sub>
Hoy programamos en JavaScript la lógica para que la computadora elija un personaje enemigo aleatoriamente cuando el jugador seleccione el suyo.</sub> 
<sub> 
Esto lo hicimos agregando una función llamada `seleccionarPersonajeEnemigo()` que se ejecuta justo después de que el jugador hace clic en el botón de "Seleccionar personaje".</sub>

## ¿Qué hace innerHTML?
<sub>
innerHTML es una propiedad de los elementos HTML que permite leer o modificar el contenido que está dentro de una etiqueta desde JavaScript. Sirve para mostrar textos, etiquetas o resultados dentro de la página web de forma dinámica.</sub>