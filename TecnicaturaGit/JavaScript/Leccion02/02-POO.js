class Empleado{
    constructor(nombre,sueldo){
        this._nombre =nombre;
        this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre ${this._nombre},
        Sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre,sueldo, departamento){
        super(nombre,sueldo);
        this._departamento = departamento;
    }

    //AGREGAMOS LA SOBREESCRITURA
    obtenerDetalles(){
        return`Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`;
    }
}

let gerente1 = new Gerente("Carlos", 5000, "Sistemas");
console.log(gerente1); //OBJETO DE LA CLASE HIJA

let empleado1 = new Empleado("Juan", 3000);
console.log(empleado1); //OBJETO DE LA CLASE PADRE
