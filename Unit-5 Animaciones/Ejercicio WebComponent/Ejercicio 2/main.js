//Elementos html
const container = document.getElementById("container");
const mySwitch = document.getElementById("switch");
const backgroundColor = document.getElementById("color-fondo");

mySwitch.addEventListener('click', function() {
    container.style.flexDirection = "row-reverse";
    backgroundColor.style.backgroundColor = "green";
    mySwitch.innerText = "On";
});