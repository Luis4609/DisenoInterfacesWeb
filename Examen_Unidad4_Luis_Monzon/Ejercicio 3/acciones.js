const semaphore = document.getElementById("my-semaphore");
const semaphoreRojo = document.querySelector("#semaphoreRed");
const semaphoreGreen = document.querySelector("#semaphoreGreen");

var contador = 0;

semaphoreRojo.addEventListener("click", () => {
  semaphoreRojo.style.backgroundColor = "black";
});

semaphoreGreen.addEventListener("click", () => {
  semaphoreGreen.style.backgroundColor = "green";
  const parpadeo = setInterval(() => {
    semaphoreGreen.style.backgroundColor = "grey";
  }, semaphoreGreen.seconds);
  contador++;
  if (contador >= semaphoreGreen.seconds) clearInterval(parpadeo);
});

//Look the seconds
const button = document.getElementById("my-button");
button.addEventListener("click", () => {
  button.innerText = `Red: ${
    document.querySelector("#semaphoreRed").seconds
  } -- Green: ${document.querySelector("#semaphoreGreen").seconds}`;
  console.log("Hola");
});

//reload page
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
  location.reload();
});
