'use strict';
// Veamos como evitar este error
try{
    x = 10; // Lo traemos con alt + flecha hacia arriba o hacia abajoo
    //miFuncion(); // Capturamos el error de la función
    throw "Mi error"; //Manejo tipo string
}
catch(error){ //Cathamos el error
    console.log(typeof( error));
}
finally{
    console.log("Termina la revision de errores");
}

//La ejecucion ahora continua...
console.log("Continuamos...") // esto no se llega a ver por que esta bloqueado

let resultado = -5;

try {
    //y = 5;
    if( isNaN(resultado)) throw "No es un número";
    else if(resultado === "")throw"Es cadena vacia";
    else if(resultado >= 0)throw"Valor positivo";
    else if(resultado <= 0)throw"Valor negativo"
}
catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log("Termina la revisión de errores 2");
}