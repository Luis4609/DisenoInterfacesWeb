//Elementos html
const container = document.getElementById("container");
const mySwitch = document.getElementById("switch");
const backgroundColor = document.getElementById("color-fondo");

mySwitch.settings = "Off";

console.log(mySwitch.settings);
mySwitch.addEventListener("click", function () {
    if(this.settings == "Off"){
        container.style.flexDirection = "row-reverse";
        backgroundColor.style.backgroundColor = "green";
        mySwitch.innerText = "On";
        mySwitch.settings = "On";
        console.log("If");
        console.log(mySwitch.settings);
    }else{
        container.style.flexDirection = "row";
        backgroundColor.style.backgroundColor = "red";
        mySwitch.innerText = "Off";
        mySwitch.settings = "Off";
        console.log("Else");
    }
 
});

// function changeSwitch() {
//   if ((backgroundColor.style.backgroundColor = "green")) {
//     backgroundColor.style.backgroundColor = "red";
//     mySwitch.innerText = "Off";
//   } else {
//     backgroundColor.style.backgroundColor = "green";
//     mySwitch.innerText = "On";
//   }
// }

// mySwitch.addEventListener("onclick", changeSwitch());

