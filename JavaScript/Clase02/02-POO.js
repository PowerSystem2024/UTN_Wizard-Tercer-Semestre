// Definición de clase padre: Empleado
class Empleado {
  constructor(nombre, sueldo) {
    this._nombre = nombre; // Propiedad protegida (por convención)
    this._sueldo = sueldo;
  }

  // Método que devuelve los detalles del empleado
  obtenerDetalles() {
    return `Empleado: nombre ${this._nombre}, sueldo: ${this._sueldo}`;
  }
}

// Clase hija: Gerente, hereda de Empleado
class Gerente extends Empleado {
  constructor(nombre, sueldo, departamento) {
    super(nombre, sueldo); // Llama al constructor de la clase padre
    this._departamento = departamento; // Nueva propiedad específica de Gerente
  }

  // Sobrescribimos el método obtenerDetalles
  obtenerDetalles() {
    // Llamamos al método original de Empleado y agregamos info adicional
    return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`;
  }
}

// Instanciación de objetos

let gerente1 = new Gerente("Carlos", 5000, "Sistemas");
console.log(gerente1); // Imprime el objeto gerente1 (toda la info, incluyendo clase base)

let empleado1 = new Empleado("Juan", 3000);
console.log(empleado1); // Imprime el objeto empleado1 (solo nombre y sueldo)
