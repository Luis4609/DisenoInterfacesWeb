document.addEventListener("DOMContentLoaded", () => {		
	var divs = document.querySelectorAll("div.animate");
	var currentID = 0;
	var contDIV = 0;

	// Los divs vuelven a permanecer ocultos y se reinicia la animaci�n
	function resetAnimation(){		
		// Se reinicia el contador del DIV actual
		contDIV = 0;
	
		divs.forEach((curDIV) => {
			curDIV.style.display = "none";
		});	
				
		show();
	}
	
	// Crea una promesa que muestra el bot�n actual
	function showDiv(){
		let p1 = new Promise((resolve, reject) => {
			currentID = setTimeout(() => {
				divs[contDIV].style.display = "block"; // Por cada setTimeout mostramos el bot�n
				resolve(currentID);						
			}, 1000);			
		});
		
		return p1;
	}

	function show(){
		
		// La clave para no evitar que la animaci�n descuadre es utilizar await para garantizar que siempre esperemos a que acabe cada setTimeout
		if (contDIV == divs.length){
			currentID = setTimeout(resetAnimation, 1000);
		} else {
			showDiv().then(() => {
				contDIV++;
				show();	
			});			
		}	
	}
	
	show();
		
	// Se crea un evento onclick por cada p�rrafo que se encarga de parar detener todos los setTimeout que hab�an comenzado 
	divs.forEach((elem) => {
		elem.addEventListener("click", () => {
			clearTimeout(currentID);				
			
			resetAnimation();			
		})
	});
			  
});
