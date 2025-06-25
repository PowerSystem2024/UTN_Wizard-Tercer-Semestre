// Clase base: DispositivoEntrada
// Representa un dispositivo de entrada como teclado o ratón
class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }

  set tipoEntrada(valor) {
    this._tipoEntrada = valor;
  }

  get marca() {
    return this._marca;
  }

  set marca(valor) {
    this._marca = valor;
  }
}

// Clase Raton (hereda de DispositivoEntrada)
class Raton extends DispositivoEntrada {
  static contadorRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones; // ID único por cada ratón creado
  }

  toString() {
    return `Raton [ID: ${this._idRaton}, Tipo: ${this._tipoEntrada}, Marca: ${this._marca}]`;
  }
}

// Clase Teclado (hereda de DispositivoEntrada)
class Teclado extends DispositivoEntrada {
  static contadorTeclados = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados; // ID único por cada teclado creado
  }

  toString() {
    return `Teclado [ID: ${this._idTeclado}, Tipo: ${this._tipoEntrada}, Marca: ${this._marca}]`;
  }
}

// Clase Monitor (no hereda, tiene atributos propios)
class Monitor {
  static contadorMonitores = 0;

  constructor(marca, tamaño) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamaño = tamaño;
  }

  get idMonitor() {
    return this._idMonitor;
  }

  toString() {
    return `Monitor [ID: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}]`;
  }
}

// Clase Computadora (compuesta por monitor, teclado y ratón)
class Computadora {
  static contadorComputadoras = 0;

  constructor(nombre, monitor, teclado, raton) {
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
  }

  toString() {
    return `Computadora [ID: ${this._idComputadora}, Nombre: ${
      this._nombre
    }]\n${this._monitor.toString()}\n${this._teclado.toString()}\n${this._raton.toString()}`;
  }
}

// Clase Orden (agrega hasta 10 computadoras)
class Orden {
  static contadorOrdenes = 0;
  MAX_COMPUTADORAS = 10;

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = [];
  }

  agregarComputadora(computadora) {
    if (this._computadoras.length < this.MAX_COMPUTADORAS) {
      this._computadoras.push(computadora);
    } else {
      console.log("No se pueden agregar más computadoras.");
    }
  }

  mostrarOrden() {
    let detalle = `Orden [ID: ${this._idOrden}]\n`;
    for (let computadora of this._computadoras) {
      detalle += computadora.toString() + "\n";
    }
    console.log(detalle);
  }
}

// Función que recibe cualquier dispositivo de entrada (ratón o teclado)
function describirDispositivo(dispositivo) {
  console.log(dispositivo.toString()); // Polimorfismo
}

// ----------- PRUEBAS DEL SISTEMA -------------

// Crear dispositivos de entrada
let raton1 = new Raton("USB", "Logitech");
let teclado1 = new Teclado("Bluetooth", "Microsoft");

// Usar la función que trabaja con dispositivos genéricos
describirDispositivo(raton1);
describirDispositivo(teclado1);

// Crear monitor
let monitor1 = new Monitor("HP", "27 pulgadas");

// Crear computadora ensamblada con los objetos anteriores
let computadora1 = new Computadora("HP Gamer", monitor1, teclado1, raton1);

// Crear orden y agregar computadora
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);

// Mostrar contenido de la orden
orden1.mostrarOrden();
