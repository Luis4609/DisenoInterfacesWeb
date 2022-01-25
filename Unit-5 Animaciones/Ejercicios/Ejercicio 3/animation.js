// onclick
function myFunction() {
  let start = Date.now(); // recordar la hora de inicio

  let timer = setInterval(function () {
    // ¿Cuánto tiempo pasó desde el principio?
    let timePassed = Date.now() - start;

    if (timePassed >= 2000) {
      clearInterval(timer); // terminar la animación después de 2 segundos
      return;
    }

    // dibujar la animación en el momento timePassed
    draw(timePassed);
  }, 20);

  function draw(timePassed) {
    train.style.left = timePassed / 5 + "px";
  }
}

(function () {
  var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

var start = null;
var element = document.getElementById("train");

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.transform =
    "translateX(" + Math.min(progress / 10, 200) + "px)";
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
