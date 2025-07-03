// Creamos una promesa manualmente
let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true; // Simulamos una condición

    if (expresion) {
        resolver('✅ Se resolvió correctamente');
    } else {
        rechazar('❌ Se produjo un error');
    }
});

// Formas de consumir la promesa:

// Opción 1: usando dos funciones en .then()
// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );

// Opción 2: con .then() y .catch()
// miPromesa
//     .then(valor => console.log(valor))
//     .catch(error => console.log(error));

// --------------------------------------------------------

// Otra promesa con setTimeout, simula proceso asíncrono
let promesa = new Promise((resolver) => {
    setTimeout(() => 
        resolver('📩 Saludos desde promesa, callback, función flecha y setTimeout'), 
        3000
    );
});

// Llamado a la promesa (descomentar para ver el resultado después de 3s)
// promesa.then(valor => console.log(valor));

// --------------------------------------------------------

// Una función async SIEMPRE devuelve una promesa
async function miFuncionConPromesa() {
    return '👋 Saludos con promesas y async';
}

// Se puede consumir así:
// miFuncionConPromesa().then(valor => console.log(valor));

// --------------------------------------------------------

// Promesa + async/await
async function funcionConPromesaYAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('⏳ Promesa con await');
    });

    // Esperamos que la promesa se resuelva antes de seguir
    console.log(await miPromesa);
}

// funcionConPromesaYAwait();

// --------------------------------------------------------

// Combinamos async + await + setTimeout
async function funcionConPromesaAwaitTimeout() {
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('✅ Promesa con await y Timeout'), 3000);
    });

    // Espera 3 segundos antes de imprimir
    console.log(await miPromesa);
}

// Ejecutamos la función
funcionConPromesaAwaitTimeout();
