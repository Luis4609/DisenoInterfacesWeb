const TIEMPO = 1000;

document.addEventListener("DOMContentLoaded", () => {
  // seleccionamos el bloque que queremos mover
  var bloque = document.querySelector(".block");

  // Función para mover el bloque
  function desplazar(coordenada, direccion) {
    // variables
    var inicio = null;
    var desp = parseInt(mov.value) * direccion;
    var offset = parseInt(
      getComputedStyle(bloque).getPropertyValue(coordenada)
    );
    function step(timestamp) {
      // comprobación de que el inicio no es null para poner a inicio el tiempo actual
      if (!inicio) {
        inicio = timestamp;
      }
      var progreso = timestamp - inicio;

      bloque.style.setProperty(
        coordenada,
        (desp * progreso) / TIEMPO + offset + "px"
      );

      if (progreso < TIEMPO) {
        window.requestAnimationFrame(step);
      } else {
        bloque.style.setProperty(coordenada, desp + offset + "px");
      }
    }

    window.requestAnimationFrame(step);
  }

  document.getElementById("right").addEventListener("click", (e) => {
    desplazar("left", 1);
    // desplazarDerecha(); Función alternativa. Se crearía una para cada dirección con el valor correspondiente
  });

  document.getElementById("left").addEventListener("click", (e) => {
    desplazar("left", -1);
  });

  document.getElementById("top").addEventListener("click", (e) => {
    desplazar("top", -1);
  });

  document.getElementById("bottom").addEventListener("click", (e) => {
    desplazar("top", 1);
  });
});
