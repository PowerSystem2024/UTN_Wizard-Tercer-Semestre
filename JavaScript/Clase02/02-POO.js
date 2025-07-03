// Clase base (padre): Empleado
class Empleado {
  constructor(nombre, sueldo) {
    this._nombre = nombre;     // Propiedad protegida por convención (_ indica uso interno)
    this._sueldo = sueldo;
  }

  // Método que devuelve una descripción del empleado
  obtenerDetalles() {
    return `Empleado: nombre ${this._nombre}, sueldo: ${this._sueldo}`;
  }
}

// Clase derivada (hija): Gerente, hereda de Empleado
class Gerente extends Empleado {
  constructor(nombre, sueldo, departamento) {
    super(nombre, sueldo); // Llama al constructor de la clase Empleado
    this._departamento = departamento; // Atributo propio de Gerente
  }

  // Sobrescritura del método obtenerDetalles
  obtenerDetalles() {
    // Se usa super para reutilizar el método de la clase padre y agregar más información
    return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`;
  }
}

// 🔹 Ejemplo de uso de las clases

let gerente1 = new Gerente("Carlos", 5000, "Sistemas");
console.log(gerente1); // Muestra el objeto completo (incluye atributos heredados)

let empleado1 = new Empleado("Juan", 3000);
console.log(empleado1); // Muestra el objeto empleado (nombre y sueldo)
