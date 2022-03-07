class Semaphore extends HTMLElement {
  constructor() {
    super();

    this._seconds = 0;
  }

  static get observedAttributes() {
    return ["seconds"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.textContent = newValue;
    //SE MUESTRA EL VALOR DEL ATRIBUTO SECONDS
    console.log(this.textContent)
    if (this.shadowRoot) {
      this.shadowRoot.querySelector(`[name="${name}"]`).innerHTML = this[name];
    }
  }

  get seconds() {
    return this.getAttribute("seconds");
  }
  set seconds(val) {
    this._seconds = val;
  }

  connectedCallback() {
    let shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
    <style>
        .semaphore {
            border: 1px solid black;
            width: 50px;
            height: 50px;
        }
        .green {
          background-color: grey;
        }
        .red {
            background-color: red;
            margin-bottom: 10px;
        }
      </style>
      <div class="semaphore red">
        
      </div>
      <div class="semaphore green">
       
      </div>
    `;
  }
}

window.customElements.define("my-semaphore", Semaphore);
