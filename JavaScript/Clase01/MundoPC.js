// Clase base que representa un dispositivo de entrada (como ratón o teclado)
class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  // Getter y Setter para tipoEntrada
  get tipoEntrada() {
    return this._tipoEntrada;
  }

  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  // Getter y Setter para marca
  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }
}

// Subclase que representa un ratón, hereda de DispositivoEntrada
class Raton extends DispositivoEntrada {
  static contadorRatones = 0; // Contador estático para asignar ID único

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca); // Llama al constructor de la clase padre
    this.idRaton = ++Raton.contadorRatones; // Asigna ID único
  }

  toString() {
    return `Raton [ID: ${this.idRaton}, Tipo Entrada: ${this.tipoEntrada}, Marca: ${this.marca}]`;
  }
}

// Subclase que representa un teclado, hereda de DispositivoEntrada
class Teclado extends DispositivoEntrada {
  static contadorTeclado = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this.idTeclado = ++Teclado.contadorTeclado;
  }

  toString() {
    return `Teclado [ID: ${this.idTeclado}, Tipo Entrada: ${this.tipoEntrada}, Marca: ${this.marca}]`;
  }
}

// Clase que representa un monitor
class Monitor {
  static contadorMonitores = 0;

  constructor(marca, tamaño) {
    this.idMonitor = ++Monitor.contadorMonitores;
    this.marca = marca;
    this.tamaño = tamaño;
  }

  toString() {
    return `Monitor [ID: ${this.idMonitor}, Marca: ${this.marca}, Tamaño: ${this.tamaño}]`;
  }
}

// Clase que representa una computadora, compuesta por monitor, teclado y ratón
class Computadora {
  static contadorComputadoras = 0;

  constructor(nombre, monitor, teclado, raton) {
    this.idComputadora = ++Computadora.contadorComputadoras;
    this.nombre = nombre;
    this.monitor = monitor;
    this.teclado = teclado;
    this.raton = raton;
  }

  toString() {
    return `Computadora [ID: ${this.idComputadora}, Nombre: ${
      this.nombre
    }]\n  ${this.monitor.toString()}\n  ${this.teclado.toString()}\n  ${this.raton.toString()}`;
  }
}

// Clase que representa una orden de compra, puede contener varias computadoras
class Orden {
  static contadorOrdenes = 0;

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = []; // Lista de computadoras agregadas a la orden
  }

  // Método para agregar una computadora a la orden
  agregarComputadora(computadora) {
    this._computadoras.push(computadora);
  }

  // Muestra toda la información de la orden y las computadoras que la componen
  mostrarOrden() {
    let computadorasStr = this._computadoras
      .map((c) => c.toString())
      .join("\n\n");
    console.log(`Orden [ID: ${this._idOrden}]\n${computadorasStr}`);
  }
}

// === Ejecución del programa ===

// Crear dispositivos de entrada y monitor
let raton1 = new Raton("USB", "Logitech");
let teclado1 = new Teclado("Bluetooth", "Redragon");
let monitor1 = new Monitor("Samsung", "27 pulgadas");

// Crear computadora usando los dispositivos creados
let computadora1 = new Computadora("PC Gamer", monitor1, teclado1, raton1);

// Crear otra computadora con distintos dispositivos
let raton2 = new Raton("Bluetooth", "Genius");
let teclado2 = new Teclado("USB", "Logitech");
let monitor2 = new Monitor("LG", "24 pulgadas");
let computadora2 = new Computadora("Oficina", monitor2, teclado2, raton2);

// Crear una orden y agregar las computadoras
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);

// Mostrar detalles de la orden completa
orden1.mostrarOrden();
