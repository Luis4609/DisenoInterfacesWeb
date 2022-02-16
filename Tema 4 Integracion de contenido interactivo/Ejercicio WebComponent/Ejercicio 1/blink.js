class Blink extends HTMLElement {
    constructor () {
      super ();      
    }
	
	// Los atributos no existen hasta connectedCallback, por tanto no se deben acceder en el constructor
	connectedCallback(){
	  // Se crean variables con los atributos, si existen, o si no valores por defecto		
	  const interval = (this.getAttribute ('changeInterval') || 1) * 1000;
      const base     = this.getAttribute ('baseColor') || 'inherit';
      const alte     = this.getAttribute ('alternativeColor') || 'transparent';
	  let n = 0;	
	  
	  // Sintaxis alternativa más parecida al lenguaje Java //
	  /*let interval = 1000;
	  let base = "inherit";
	  let alte = "transparent";
	  
	  // El código siguiente sería el equivalente a hacer una comprobación con un if
	  if (this.getAttribute ('changeInterval') != null){
		  interval = this.getAttribute('changeInterval')*1000;
      }
	  
	  if (this.getAttribute ('baseColor') != null){
		  base = this.getAttribute('baseColor');
      }
	  
	  if (this.getAttribute ('alternativeColor') != null){
		  alte = this.getAttribute('alternativeColor');
      }*/
		
	  setInterval (() => {
        this.style.color = ++n % 2 ? alte : base;
		
		// Sintaxis alternativa más parecida al lenguaje Java
		
		/*++n;
				
		if (n%2 != 0){
			this.style.color = alte;
		} else {
			this.style.color = base;
		}*/		
      }, interval);
	}	
}

customElements.define ('wc-blink', Blink);