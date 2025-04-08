
class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
    }

    getTipoEntrada() {
        return this.tipoEntrada;
    }

    setTipoEntrada(tipoEntrada) {
        this.tipoEntrada = tipoEntrada;
    }

    getMarca() {
        return this.marca;
    }

    setMarca(marca) {
        this.marca = marca;
    }
}


class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this.idRaton = ++Raton.contadorRatones;
    }

    toString() {
        return `Raton [ID: ${this.idRaton}, Tipo: ${this.tipoEntrada}, Marca: ${this.marca}]`;
    }
}


class Teclado extends DispositivoEntrada {
    static contadorTeclado = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this.idTeclado = ++Teclado.contadorTeclado;
    }

    toString() {
        return `Teclado [ID: ${this.idTeclado}, Tipo: ${this.tipoEntrada}, Marca: ${this.marca}]`;
    }
}


class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamano) {
        this.idMonitor = ++Monitor.contadorMonitores;
        this.marca = marca;
        this.tamano = tamano;
    }

    toString() {
        return `Monitor [ID: ${this.idMonitor}, Marca: ${this.marca}, Tamaño: ${this.tamano}]`;
    }
}


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
        return `\nComputadora [ID: ${this.idComputadora}, Nombre: ${this.nombre}]\n  ${this.monitor.toString()}\n  ${this.teclado.toString()}\n  ${this.raton.toString()}`;
    }
}


class Orden {
    static contadorOrdenes = 0;
    static get MAX_COMPUTADORAS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    agregarComputadora(computadora) {
        if (this._computadoras.length < Orden.MAX_COMPUTADORAS) {
            this._computadoras.push(computadora);
        } else {
            console.log("No se pueden agregar más computadoras a la orden.");
        }
    }

    mostrarOrden() {
        let computadorasStr = '';
        for (let compu of this._computadoras) {
            computadorasStr += compu.toString() + '\n';
        }
        console.log(`\nOrden [ID: ${this._idOrden}]\n${computadorasStr}`);
    }
}


// Pruebas del sistema


const raton1 = new Raton("USB", "Logitech");
const raton2 = new Raton("Bluetooth", "HP");

const teclado1 = new Teclado("USB", "Genius");
const teclado2 = new Teclado("Bluetooth", "Microsoft");

const monitor1 = new Monitor("Samsung", "24 pulgadas");
const monitor2 = new Monitor("LG", "27 pulgadas");

const compu1 = new Computadora("PC Gamer", monitor1, teclado1, raton1);
const compu2 = new Computadora("PC Oficina", monitor2, teclado2, raton2);

const orden1 = new Orden();
orden1.agregarComputadora(compu1);
orden1.agregarComputadora(compu2);

orden1.mostrarOrden();
