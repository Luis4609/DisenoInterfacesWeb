class BlinkSpan extends HTMLSpanElement {
    constructor () {
      super ();      
    }
	
	// Los atributos no existen hasta connectedCallback, por tanto no se deben acceder en el constructor
	connectedCallback(){
	  // En el archivo blink.js con el ejercicio 1 se puede observar una sintaxis alternativa	
	  // En el archivo mencionado no hay getter y setter de atributos y se accede directamente con getAttribute y setAttribute
	  const interval = (this.changeInterval || 1) * 1000;
      const base     = this.baseColor || 'inherit';
      const alte     = this.alternativeColor || 'transparent';
	  let n          = 0;	
		
	  setInterval (() => {
        this.style.color = ++n % 2 ? alte : base;
      }, interval);
	}
	
	// Getter y setter de los atributos del HTML
	get changeInterval() {
	  return this.getAttribute('changeInterval');
	}

	set changeInterval(value) {
	  this.setAttribute('changeInterval', value);
	}

	get baseColor() {
	  return this.getAttribute('baseColor');
	}

	set baseColor(value) {
	  this.setAttribute('baseColor', value);
	}
	
	get alternativeColor() {
	  return this.getAttribute('alternativeColor');
	}

	set alternativeColor(value) {
	  this.setAttribute('alternativeColor', value);
	}
}
  
//Se define el elemento que extiende a span
customElements.define ('wc-blink-span', BlinkSpan, {extends: 'span'});