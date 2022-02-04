document.addEventListener("DOMContentLoaded", () => {		
	var divs = document.querySelectorAll("div.animate");
	var currentID = 0;
	
	// Los divs vuelven a permanecer ocultos y se reinicia la animaci�n
	function reiniciar(){	
		divs.forEach((curDIV) => {
			curDIV.style.display = "none";
		});	
			
		aparecer();
	}
	
	// Crea una promesa que muestra el bot�n actual que ahora recibe como par�metro
	function mostrarUnDIV(contDIV){
		let p1 = new Promise((resolve, reject) => {
			currentID = setTimeout(() => {
				divs[contDIV].style.display = "block"; // Por cada setTimeout mostramos el bot�n
				resolve(currentID);						
			}, 1000);			
		});
		
		return p1;
	}

	async function aparecer(){
		// Con async y await se simplifica mucho el enfoque porque cada iteraci�n espera a que acabe el setTimeout anterior
		for (let contDIV=0; contDIV<divs.length; contDIV++){		
			currentID = await mostrarUnDIV(contDIV);			
		}
		
		// En este punto s� que se han lanzado el resto de animaciones porque he esperado con "await"
		currentID = setTimeout(reiniciar, 1000);		
	}
	
	aparecer();
		
	// Se crea un evento onclick por cada p�rrafo que se encarga de parar detener todos los setTimeout que hab�an comenzado 
	divs.forEach((elem) => {
		elem.addEventListener("click", () => {
			clearTimeout(currentID);				
			
			reiniciar();			
		})
	});
			  
});
