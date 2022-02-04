//Elementos html
const container = document.getElementById("container");
const mySwitch = document.getElementById("switch");
const backgroundColor = document.getElementById("color-fondo");

mySwitch.addEventListener("click", function () {
  container.style.flexDirection = "row-reverse";
  backgroundColor.style.backgroundColor = "green";
  mySwitch.innerText = "On";
});

function changeSwitch() {
  if ((backgroundColor.style.backgroundColor = "green")) {
    backgroundColor.style.backgroundColor = "red";
    mySwitch.innerText = "Off";
  } else {
    backgroundColor.style.backgroundColor = "green";
    mySwitch.innerText = "On";
  }
}

mySwitch.addEventListener("onclick", changeSwitch());
