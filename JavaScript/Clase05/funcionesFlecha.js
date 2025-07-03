// Declaración de una función tradicional
function miFuncion() {
  console.log("Saludos desde mi función");
}

miFuncion();

// Declaración de una función anónima (asignada a una variable)
let myFuncion = function () {
  console.log("Saludos desde la función anónima");
};

// Declaración de una función flecha
let miFuncionFlecha = () => {
  console.log("Saludos desde mi función flecha");
};

// Llamamos a la función flecha
miFuncionFlecha();

// Función flecha en una sola línea (implícito el return si fuera necesario)
const saludar = () => console.log("Saludos a todos desde esta función flecha");

saludar();

// Otro ejemplo con return explícito
const saludar2 = () => {
  return "Saludar desde la función flecha dos";
};

console.log(saludar2());

// Función flecha simplificada con return implícito
const saludar3 = () => "Saludar desde la función flecha tres";

console.log(saludar3());

// Función flecha que retorna un objeto (paréntesis obligatorios)
const regresaObjeto = () => ({ nombre: "Juan", apellido: "Lara" });

console.log(regresaObjeto());

// Función flecha con un parámetro
const funcionesParametros = (mensaje) => console.log(mensaje);

funcionesParametros("Saludos desde esta función con parámetros");

// Función clásica con un parámetro
const funcionesParametrosClasica = function (mensaje) {
  console.log(mensaje);
};

funcionesParametrosClasica("Saludos desde la función clásica");

// En funciones flecha con un solo parámetro, se pueden omitir los paréntesis
const funcionConParametros = (mensaje) => console.log(mensaje);

funcionConParametros("Otra forma de trabajar con función flecha");

// Función flecha con varios parámetros y más instrucciones
const funcionConParametros2 = (op1, op2) => {
  let resultado = op1 + op2;
  return resultado;
};

console.log(funcionConParametros2(3, 5));
