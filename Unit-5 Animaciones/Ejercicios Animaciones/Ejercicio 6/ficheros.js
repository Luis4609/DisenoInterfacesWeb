// Esta función simula una barra de progreso de 2 segundos. Devuelve una promesa
function loadBar(){			
	let barra = document.querySelector(".barra");
	let tiempo = 2000;
	let proceso = 0;
	var start = null;

	return new Promise((resolve, reject) => {
		function step(timestamp) {
			if (!start) start = timestamp;
			var progress = timestamp - start;
			let pct = ((progress*100)/tiempo) + "%"; // Porcentaje actual de la barra
			barra.style.width = pct;
				
			if (progress < tiempo) {
				proceso = window.requestAnimationFrame(step); // Llamada recursiva a función step
			} else {
				barra.style.width = "100%";	
				resolve("El fichero cargó bien");				
			}
		}
		
		proceso = window.requestAnimationFrame(step); // Llamada a función step
	});	
}

// Esta función devuelve una promesa en función de si es para cargar solo un fichero, los dos o el más rápido
function cargarPromesa(opcion){
	if (opcion === "all"){
		return Promise.all([fetch('https://reqres.in/api/users'),fetch('https://reqres.in/api/login')]);
	} else if (opcion === "race"){
		return Promise.race([fetch('https://reqres.in/api/users'),fetch('https://reqres.in/api/login')]);
	} else {
		return fetch('https://reqres.in/api/users');
	}
}


document.addEventListener("DOMContentLoaded", () => {
	let mensaje = document.getElementById('mensaje');
	
	document.getElementById("cargar").addEventListener("click", ()=>{
		mensaje.textContent = "Cargando";		
		
		// Cargamos la promesa que corresponda
		cargarPromesa(document.getElementById("modo").value)		
		
		.then( (respuesta) => {
			console.log(respuesta);
			
			return loadBar(); // Si carga bien el fichero simulamos la barra de progreso durante 2 segundos
		})
		
		.then( (respuesta) => {
			mensaje.textContent = respuesta;
		})
		
		// Manejo de errores. Hay que ponerlo al final porque si lo ponemos después del primer then se cargaría la barra de progreso (prueba a cambiar el orden)
		.catch( (error) => {
			mensaje.textContent = "Error: " + error;
			document.querySelector(".barra").style.width = "0%"; // En caso de error se deja la barra de progreso a 0
		});	
	});    
})



