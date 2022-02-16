const templateDetails = document.createElement('template');

templateDetails.innerHTML = `
  <style>
	  details { 
		font-family: "Open Sans Light",Helvetica,Arial; 
		border-bottom: 1px solid darkgrey; 
		margin-bottom: 1em;
	  }
	  .name {font-weight: bold; color: #217ac0; font-size: 90%}
	  .desc {font-style: italic}
	  .attributes h4 span { background: #217ac0; padding: 2px 6px 2px 6px }
	  .attributes h4 span { border: 1px solid #cee9f9; border-radius: 4px }
	  .attributes h4 span { color: white }
	  .attributes {  margin-left: 1.5em; }
	  .attributes ::slotted(*), .attributes p { font-size: 90%; font-style: italic }
  </style>
  <details>
    <summary>
      <span>
        <slot class="name" name="element-name">&lt;NECESITA NOMBRE&gt;</slot>
        <slot class="desc" name="description">NECESITA DESCRIPCIÓN</slot>
      </span>
    </summary>
    <div class="attributes">
      <h4><span>Atributos</span></h4>
      <slot name="attributes"><p>Ninguno</p></slot>
    </div>
  </details> 
`;

// Debido a que el componente apenas tiene código JavaScript, se define directamente en una clase anónima
customElements.define('element-details',
  class extends HTMLElement {
	constructor() {
		super();
		this._shadowRoot = this.attachShadow({ mode: 'open' });
		this._shadowRoot.appendChild(templateDetails.content.cloneNode(true)); 
	}		
  }
)