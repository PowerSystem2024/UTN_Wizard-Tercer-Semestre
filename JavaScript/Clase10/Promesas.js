let miPromesa = new Promise((resolver, rechazar) => {
  //creamos el objeto de tipo promesa, con dos parámetros callback
  let expresion = true;
  if (expresion) {
    //resolver('Resolvió correctamente'); //cuando termina bien/si es verdadera la expresión
    // Aquí podríamos resolver la promesa si expresion es verdadera
  } else {
    //rechazar('Se produjo un error'); //cuando ocurre un error/ si es falsa
    // Aquí podríamos rechazar la promesa si expresion es falsa
  }
});

// El siguiente bloque muestra dos formas distintas de consumir promesas:
// Con .then() y .catch(), o pasando directamente dos callbacks a .then()

// miPromesa.then(
//   valor => console.log(valor), //función callback para cuando se resuelve
//   error => console.log(error) //función callback para cuando se rechaza
// );

// miPromesa
//     .then( valor => console.log(valor)) //si la promesa se resuelve correctamente
//     .catch(error => console.log(error)); //si la promesa se rechaza

let promesa = new Promise((Resolver) => {
  //console.log('Inicio promesa');
  // Simulamos un proceso asíncrono con setTimeout
  setTimeout(
    () =>
      Resolver("Saludos desde promesa, callback, función flecha y setTimeout"),
    3000
  )
  //console.log('Final promesa');
});

//llamado a la promesa
// promesa.then( valor => console.log(valor));

// `async` indica que una función regresa una promesa
async function miFuncionConPromesa() {
  return "Saludos con promesas y async"; //como si llamáramos a la función resolver
}

// Consumimos la promesa devuelta por la función async
// miFuncionConPromesa().then(valor => console.log(valor));

// Ejemplo de uso de async/await
async function funcionConPromesaYAwait() {
  // Creamos una promesa que se resuelve inmediatamente
  let miPromesa = new Promise((resolver) => {
    resolver("Promesa con await");
  });

  // Esperamos que la promesa se resuelva antes de continuar
  console.log(await miPromesa);
}
// funcionConPromesaYAwait();

// Await sólo se puede usar en una función declarada con async

// Combinamos promesa, async/await y setTimeout
async function funcionConPromesaAwaitTimeout() {
  let miPromesa = new Promise((resolver) => {
    console.log("Inicio función"); // Se ejecuta inmediatamente
    setTimeout(() => resolver("Promesa con await y Timeout"), 3000); // La promesa se resuelve después de 3 segundos
    console.log("Final función"); // También se ejecuta inmediatamente
  });

  // Esperamos a que la promesa se resuelva para mostrar el resultado
  console.log(await miPromesa);
}

// llamamos a la función
funcionConPromesaAwaitTimeout();
