document.addEventListener("DOMContentLoaded", () => {	
	var bloque = document.querySelector(".block"); //El bloque que movemos
	var cuadrado = document.querySelector(".cuadrado"); //El cuadrado central
	var container = document.querySelector("#container"); // El contenedor principal
	var mov = document.querySelector("#mov"); // Elemento con la cantidad de píxeles a mover
	const TIME = 1000; // Los desplazamientos duran 1000, pero esto se podría cambiar o parametrizar
	
	//Función que permite comprobar si el cuadrado se encuentra dentro de las coordenadas del cuadrado central
	function comprobar(){		
		var dimBloque = bloque.getBoundingClientRect();
		var dimCuadrado = cuadrado.getBoundingClientRect();
		
		// Comprobamos el límite de todas las coordenadas. La coordenada izquierda y superior deben ser mayor al cuadrado central,
		// pero siempre sin sobrepasar las coordenadas derecha e inferior
		if ((dimBloque.left >= dimCuadrado.left) && (dimBloque.top >= dimCuadrado.top) && 
			(dimBloque.right <= dimCuadrado.right) && (dimBloque.bottom <= dimCuadrado.bottom)){	
			document.querySelector("#texto").style.display = "none";
			bloque.style.backgroundColor = "red";
		} else {
			document.querySelector("#texto").style.display = "inline";
			bloque.style.backgroundColor = "greenYellow";
		}
	};
		
	// Función que se encarga de desplazar la coordenadada x (left) e y (top)
	// Además, se indica la dirección. Si es positivo 1 y si es negativo -1
	function desplazar(coordenada, direccion){
		var start = null;
		var desp = parseInt(mov.value)*direccion;
		var offset = parseInt(getComputedStyle(bloque).getPropertyValue(coordenada));
		function step(timestamp) {
			if (!start) start = timestamp;
			var progress = timestamp - start;
			
			// Se distribuye el desplazamiento en el tiempo de un segundo
			bloque.style.setProperty(coordenada, ((desp * progress) / TIME) + offset + "px");
			
			if (progress < TIME) {
				window.requestAnimationFrame(step);
			} else {
				bloque.style.setProperty(coordenada, (desp + offset) + "px");		

				// Comprobamos si está dentro del cuadrado grande
				comprobar();
			}	
		}
		
		window.requestAnimationFrame(step);		
	}
	
	// Función alternativa por si se crea una función por cada tipo de desplazamiento en lugar de parametrizar
	/*function desplazarDerecha(){
		var start = null;
		var desp = parseInt(mov.value); // Hay que transformar a entero para garantizar que las sumas funcionen y no concatenen texto
		var offset = parseInt(getComputedStyle(bloque).left);
		console.log(offset);
		function step(timestamp) {
			if (!start) start = timestamp;
			var progress = timestamp - start;
			
			// Se distribuye el desplazamiento en el tiempo de un segundo
			bloque.style.left = ((desp * progress) / TIME) + offset + "px";
			
			if (progress < TIME) {
				window.requestAnimationFrame(step);
			} else {
				bloque.style.left = (desp + offset) + "px";
								
				// Cuando se termina la animación se hace la comprobación correspondiente
				//comprobar();
			}	
		}
		
		window.requestAnimationFrame(step);		
	}*/
	
	// Eventos al hacer click en los botones de desplazamiento
	document.querySelector("#right").addEventListener("click", (e) =>{
		desplazar("left", 1);		
		// desplazarDerecha(); Función alternativa. Se crearía una para cada dirección con el valor correspondiente
	});
	
	document.querySelector("#left").addEventListener("click", (e) =>{
		desplazar("left", -1);		
	});
	
	document.querySelector("#top").addEventListener("click", (e) =>{
		desplazar("top", -1);		
	})
	
	document.querySelector("#bottom").addEventListener("click", (e) =>{
		desplazar("top", 1);		
	})
	
	// Elemento que se arrasta
	bloque.addEventListener("dragstart", (event) => {
		var coordenadas = event.target.getBoundingClientRect();
		
		// El evento toma como referencia la posición del ratón, por lo que restamos las coordenadas donde está el elemento a este posición
		// Así obtenemos una ubicación más precisa
		event.dataTransfer.setData("text",
		(parseInt(coordenadas.left - event.clientX) + ',' + parseInt(coordenadas.top - event.clientY)));		
		//console.log(event.clientX, event.clientY, coordenadas.left, coordenadas.top);
	});
	
	// El div container acepta elementos arrastrados
		container.addEventListener("dragover", (event) => { 
		event.preventDefault(); 
	}); 
	
	// Qué se hace cuando se suelta el elemento. Básicamente soltarlo en el sitio que se indica mediante la propiedad dataTransfer
	container.addEventListener("drop", (event) => { 
		var offset = event.dataTransfer.getData("text").split(',');

		// A la posición actual le sumamos la resta anterior y tendríamos el nuevo valor de left y top relativo a la página. Descomentar log
		bloque.style.left = (event.clientX + parseInt(offset[0])) + 'px';
		bloque.style.top = (event.clientY + parseInt(offset[1])) + 'px'
		
		//console.log(event.clientX, event.clientY, parseInt(offset[0]), parseInt(offset[1]));
		
		// Comprobamos si está dentro del cuadrado grande
		comprobar();
	}); 
	
});
