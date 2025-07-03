// Clase base: Empleado
class Empleado {
    constructor(nombre, sueldo) {
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    // Método que devuelve los detalles del empleado
    obtenerDetalles() {
        return `Empleado: nombre: ${this._nombre}, Sueldo: ${this._sueldo}`;
    }
}

// Clase derivada: Gerente
class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo); // Reutiliza constructor de Empleado
        this._departamento = departamento; // Atributo adicional exclusivo de Gerente
    }

    // Sobrescritura del método obtenerDetalles (Polimorfismo)
    obtenerDetalles() {
        return `Gerente: ${super.obtenerDetalles()}, Depto: ${this._departamento}`;
    }
}

// Función polimórfica que imprime detalles y tipo del objeto
function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());

    if (tipo instanceof Gerente) {
        console.log('→ Es un objeto de tipo Gerente');
    } else if (tipo instanceof Empleado) {
        console.log('→ Es un objeto de tipo Empleado');
    } else if (tipo instanceof Object) {
        console.log('→ Es un objeto genérico (Object)');
    }
}

// Creamos instancia de Gerente (subclase)
let gerente1 = new Gerente("Carlos", 5000, "Sistemas");
console.log(gerente1); // Imprime el objeto completo

// Creamos instancia de Empleado (clase base)
let empleado1 = new Empleado("Juan", 3000);
console.log(empleado1); // Imprime el objeto completo

// Llamamos a la función imprimir con ambos objetos (demostrando polimorfismo)
imprimir(gerente1);
imprimir(empleado1);
