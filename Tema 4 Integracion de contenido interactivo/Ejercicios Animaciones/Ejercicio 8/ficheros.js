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
				proceso = window.requestAnimationFrame(step.bind(this)); // Llamada recursiva a función step
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

// Función asíncrona que se encarga de cargar los ficheros que correspondan con async/await
async function cargarFichero(){
	let mensaje = document.getElementById('mensaje');
	let respuesta = "";
	
	mensaje.textContent = "Cargando";	
	
	// Cargamos la promesa que corresponda
	try {
		respuesta = await cargarPromesa(document.getElementById("modo").value);	
		console.log(respuesta); // Ver log con la respuesta de los métodos fetch
		respuesta = await loadBar();		
	} catch (error) {
		respuesta = error; // En este caso el mensaje a mostrar es la excepción (que en realidad sería el reject de la promesa generada con los fetch)
	} finally {
		// Cuando se haya finalizado se muestra el mensaje que corresponda
		mensaje.textContent = respuesta;
	}	
}


document.addEventListener("DOMContentLoaded", () => {	
	document.getElementById("cargar").addEventListener("click", cargarFichero);    
})



