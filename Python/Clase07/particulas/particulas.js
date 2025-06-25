// Bandera para identificar si el usuario ha interactuado
window.human = false;

// Selección del canvas donde se dibujarán los fuegos artificiales
var canvasEl = document.querySelector(".fireworks");
var ctx = canvasEl.getContext("2d"); // Contexto 2D del canvas

// Cantidad de partículas por explosión
var numberOfParticules = 30;

// Coordenadas del puntero (se actualizan al hacer click o touch)
var pointerX = 0;
var pointerY = 0;

// Tipo de evento a escuchar según el dispositivo (touch o mouse)
var tap =
  "ontouchstart" in window || navigator.msMaxTouchPoints
    ? "touchstart"
    : "mousedown";

// Colores posibles para las partículas
var colors = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"];

// Ajusta el tamaño del canvas para que cubra toda la ventana y tenga el doble de resolución (pantallas retina)
function setCanvasSize() {
  canvasEl.width = window.innerWidth * 2;
  canvasEl.height = window.innerHeight * 2;
  canvasEl.style.width = window.innerWidth + "px";
  canvasEl.style.height = window.innerHeight + "px";
  canvasEl.getContext("2d").scale(2, 2);
}

// Actualiza las coordenadas del puntero cuando se hace click o touch
function updateCoords(e) {
  pointerX = e.clientX || e.touches[0].clientX;
  pointerY = e.clientY || e.touches[0].clientY;
}

// Genera una dirección aleatoria para la partícula desde el punto de origen
function setParticuleDirection(p) {
  var angle = (anime.random(0, 360) * Math.PI) / 180;
  var value = anime.random(50, 180); // Distancia de dispersión
  var radius = [-1, 1][anime.random(0, 1)] * value;
  return {
    x: p.x + radius * Math.cos(angle),
    y: p.y + radius * Math.sin(angle),
  };
}

// Crea una partícula individual con propiedades como posición, color y tamaño
function createParticule(x, y) {
  var p = {};
  p.x = x;
  p.y = y;
  p.color = colors[anime.random(0, colors.length - 1)];
  p.radius = anime.random(16, 32);
  p.endPos = setParticuleDirection(p); // Posición final a la que se moverá
  p.draw = function () {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = p.color;
    ctx.fill();
  };
  return p;
}

// Crea un círculo blanco que aparece en el centro de la explosión
function createCircle(x, y) {
  var p = {};
  p.x = x;
  p.y = y;
  p.color = "#FFF";
  p.radius = 0.1;
  p.alpha = 0.5;
  p.lineWidth = 6;
  p.draw = function () {
    ctx.globalAlpha = p.alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
    ctx.lineWidth = p.lineWidth;
    ctx.strokeStyle = p.color;
    ctx.stroke();
    ctx.globalAlpha = 1;
  };
  return p;
}

// Función que se llama durante la animación para renderizar cada partícula o círculo
function renderParticule(anim) {
  for (var i = 0; i < anim.animatables.length; i++) {
    anim.animatables[i].target.draw();
  }
}

// Ejecuta la animación de partículas y círculo desde un punto dado (x, y)
function animateParticules(x, y) {
  var circle = createCircle(x, y);
  var particules = [];

  for (var i = 0; i < numberOfParticules; i++) {
    particules.push(createParticule(x, y));
  }

  anime
    .timeline()
    .add({
      targets: particules,
      x: function (p) {
        return p.endPos.x;
      },
      y: function (p) {
        return p.endPos.y;
      },
      radius: 0.1,
      duration: anime.random(1200, 1800),
      easing: "easeOutExpo",
      update: renderParticule,
    })
    .add(
      {
        targets: circle,
        radius: anime.random(80, 160),
        lineWidth: 0,
        alpha: {
          value: 0,
          easing: "linear",
          duration: anime.random(600, 800),
        },
        duration: anime.random(1200, 1800),
        easing: "easeOutExpo",
        update: renderParticule,
      },
      0
    );
}

// Bucle de renderizado constante que limpia el canvas para las nuevas animaciones
var render = anime({
  duration: Infinity,
  update: function () {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  },
});

// Evento que detecta el click o touch y lanza los fuegos artificiales desde ese punto
document.addEventListener(
  tap,
  function (e) {
    window.human = true;
    render.play();
    updateCoords(e);
    animateParticules(pointerX, pointerY);
  },
  false
);

// Variables para posicionar el centro de la pantalla (no se usan, pero podrían servir para efectos automáticos)
var centerX = window.innerWidth / 2;
var centerY = window.innerHeight / 2;

// Inicializa el tamaño del canvas y se actualiza al cambiar el tamaño de la ventana
setCanvasSize();
window.addEventListener("resize", setCanvasSize, false);
