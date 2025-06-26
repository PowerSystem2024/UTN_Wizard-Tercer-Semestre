class Empleado {
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }


    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre},
        Sueldo: ${this._sueldo}`;
    }
}
class Gerente extends Empleado{

    // Agregamos la sobreescritura
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`;
    }
}
function imprimir( tipo ){
    console.log( tipo.obtenerDetalles());
    if (tipo instanceof Gerente){
        console.log('Es un objeto de tipo Empleado');
    }
    else if ( tipo instanceof Empleado){
        console.log('Es de tipo Empleado');
    }
    else if(tipo instanceof Object){
        console.log('Es de tipo Objeto');
    }
}

let gerente1 = new Gerente("Carlos", 5000, "Sistemas");
console.log(gerente1); // objeto de la clase hija

let empleado1 = new Empleado("Juan", 3000);
console.log(empleado1); // Obeto de la clase padre

imprimir( gerente1 );
imprimir( empleado1 );