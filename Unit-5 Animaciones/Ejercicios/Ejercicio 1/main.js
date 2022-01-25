document.addEventListener("DOMContentLoaded", () => {
  var divs = document.querySelectorAll("div.animate");
  var arrayID = [];

  // Los divs vuelven a permanecer ocultos y se reinicia la animaci�n
  function reiniciar() {
    // Se vac�a el array con setTimeout
    arrayID = [];

    divs.forEach((curDIV) => {
      curDIV.style.display = "none";
    });
    aparecer();
  }
  function aparecer() {
    divs.forEach((elem, index) => {
      // Se ejecuta un setTimeout por cada ID cada vez con un milisegundo de retardo m�s: 0, 1000, 2000, 3000, etc
      let newID = setTimeout(() => {
        elem.style.display = "block"; // Por cada setTimeout mostramos el bot�n
      }, 1000 * index);

      arrayID.push(newID);
    });
  }

  aparecer();

  divs.forEach((elem) => {
    elem.addEventListener("click", () => {
      // Al hacer click en cada DIV podemos finalizar todos los setTimeout pendientes
      arrayID.forEach((curID) => {
        clearTimeout(curID);
      });

      reiniciar();
    });
  });
});
