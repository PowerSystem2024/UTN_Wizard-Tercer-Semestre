// Indicador para saber si el usuario ya hizo alguna acción (click o toque)
window.human = false;

// Se selecciona el elemento canvas donde se mostrarán los fuegos artificiales
var canvasEl = document.querySelector(".fireworks");
var ctx = canvasEl.getContext("2d"); // Contexto de dibujo en 2D

// Número total de partículas que se generan por explosión
var numberOfParticules = 30;

// Coordenadas donde el usuario interactuó (se actualizan en cada evento)
var pointerX = 0;
var pointerY = 0;

// Se define si el evento a escuchar será por mouse o por pantalla táctil
var tap =
  "ontouchstart" in window || navigator.msMaxTouchPoints
    ? "touchstart"
    : "mousedown";

// Paleta de colores que se utilizarán para las explosiones
var colors = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"];

// Esta función ajusta el tamaño del canvas para que ocupe toda la pantalla con alta resolución
function setCanvasSize() {
  canvasEl.width = window.innerWidth * 2;
  canvasEl.height = window.innerHeight * 2;
  canvasEl.style.width = window.innerWidth + "px";
  canvasEl.style.height = window.innerHeight + "px";
  canvasEl.getContext("2d").scale(2, 2);
}

// Al detectar un click o toque, se actualizan las coordenadas del punto
function updateCoords(e) {
  pointerX = e.clientX || e.touches[0].clientX;
  pointerY = e.clientY || e.touches[0].clientY;
}

// Define una dirección aleatoria para cada partícula desde su punto inicial
function setParticuleDirection(p) {
  var angle = (anime.random(0, 360) * Math.PI) / 180;
  var value = anime.random(50, 180);
  var radius = [-1, 1][anime.random(0, 1)] * value;
  return {
    x: p.x + radius * Math.cos(angle),
    y: p.y + radius * Math.sin(angle),
  };
}

// Crea una partícula con sus propiedades y método para dibujarla
function createParticule(x, y) {
  var p = {};
  p.x = x;
  p.y = y;
  p.color = colors[anime.random(0, colors.length - 1)];
  p.radius = anime.random(16, 32);
  p.endPos = setParticuleDirection(p);
  p.draw = function () {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = p.color;
    ctx.fill();
  };
  return p;
}

// Crea un círculo blanco que simula el centro brillante de la explosión
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

// Esta función se ejecuta durante cada frame de la animación para dibujar las partículas y el círculo
function renderParticule(anim) {
  for (var i = 0; i < anim.animatables.length; i++) {
    anim.animatables[i].target.draw();
  }
}

// Se encargará de crear y animar las partículas desde el punto indicado
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

// Animación continua que limpia el canvas en cada frame para dejar espacio a nuevas explosiones
var render = anime({
  duration: Infinity,
  update: function () {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  },
});

// Evento principal: cuando el usuario hace clic o toca la pantalla, se dispara una animación en ese punto
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

// Variables con el centro de la pantalla (se pueden usar para disparar efectos sin interacción)
var centerX = window.innerWidth / 2;
var centerY = window.innerHeight / 2;

// Inicializa el tamaño del canvas y se asegura de que se ajuste al redimensionar la ventana
setCanvasSize();
window.addEventListener("resize", setCanvasSize, false);
