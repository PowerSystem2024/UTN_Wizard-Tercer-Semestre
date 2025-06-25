// Clase base: Empleado
class Empleado {
  constructor(nombre, sueldo) {
    // Atributos protegidos (por convención con guion bajo)
    this._nombre = nombre;
    this._sueldo = sueldo;
  }

  // Método que devuelve los detalles del empleado
  obtenerDetalles() {
    return `Empleado: Nombre: ${this._nombre}, Sueldo: ${this._sueldo}`;
  }
}

// Clase derivada: Gerente (hereda de Empleado)
class Gerente extends Empleado {
  constructor(nombre, sueldo, departamento) {
    super(nombre, sueldo); // Invocación del constructor de la clase padre
    this._departamento = departamento; // Nuevo atributo propio de Gerente
  }

  // Sobreescritura del método obtenerDetalles para incluir el departamento
  obtenerDetalles() {
    return `Gerente: ${super.obtenerDetalles()}, Departamento: ${
      this._departamento
    }`;
  }
}

// Función que imprime detalles del objeto y verifica su tipo con instanceof
function imprimir(tipo) {
  console.log(tipo.obtenerDetalles()); // Polimorfismo: ejecuta el método correspondiente según el objeto real

  if (tipo instanceof Gerente) {
    console.log("Es un objeto de tipo Gerente");
    console.log(`Departamento: ${tipo._departamento}`); // Atributo específico de Gerente
  } else if (tipo instanceof Empleado) {
    console.log("Es un objeto de tipo Empleado");
  } else if (tipo instanceof Object) {
    // Esta condición es más general (todos los objetos derivan de Object)
    console.log("Es un objeto de tipo Object");
  } else {
    console.log("Tipo no reconocido");
  }
}

// Instancias de prueba

// Instancia de la clase Empleado
let empleado1 = new Empleado("Juan", 3000);

// Instancia de la clase Gerente
let gerente1 = new Gerente("Carlos", 8000, "Sistemas");

// Prueba de métodos directamente desde los objetos
console.log(gerente1.obtenerDetalles());
console.log(empleado1.obtenerDetalles());

// Uso de la función imprimir (muestra polimorfismo y validación de tipo)
imprimir(empleado1);
imprimir(gerente1);
