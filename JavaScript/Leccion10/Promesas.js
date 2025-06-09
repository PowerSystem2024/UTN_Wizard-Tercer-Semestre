let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion){
        resolver('Resolvio correctamente');
    } else{
        rechazar('Se produjo un error');
    }
});

//miPromesa.then(
//    valor => console.log(valor),
//    error => console.log(error)
//);

//miPromesa
//    .then( valor => console.log(valor))
//    .catch(error => console.log(error));

let promesa = new Promise((resolver) => {
    setTimeout(() => resolver('Saludos desde promesa, callback, funcion flecha y setTimeout'), 3000);
});

//El llamado a la promesa
promesa.then( valor => console.log(valor));