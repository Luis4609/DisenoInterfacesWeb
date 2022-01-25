document.addEventListener("DOMContentLoaded", () => {
  //Div with animate class
  var containers = document.querySelectorAll("div.animate");
  var arrayID = [];

  function resetAnimation() {
    arrayID = [];

    containers.forEach((currentContainer) => {
      currentContainer.style.display = "none";
    });
    startAnimation();
  }

  function startAnimation() {
    containers.forEach((elem, index) => {
      // Se ejecuta un setTimeout por cada ID cada vez con un milisegundo de retardo m�s: 0, 1000, 2000, 3000, etc
      let newID = setTimeout(() => {
        elem.style.display = "block"; // Por cada setTimeout mostramos el bot�n
      }, 1000 * index);

      arrayID.push(newID);
    });
  }
  startAnimation();

  //Add click function to all the containers
  containers.forEach((elem) => {
    elem.addEventListener("click", () => {
      // Al hacer click en cada DIV podemos finalizar todos los setTimeout pendientes
      arrayID.forEach((curID) => {
        clearTimeout(curID);
      });
      resetAnimation();
    });
  });
});
