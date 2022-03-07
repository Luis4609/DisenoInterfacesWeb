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
    console.log(this.textContent);
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
          margin-bottom: 10px;
        }

      </style>
      <div class="semaphore green">
        
      </div>
    `;
    this.addEventListener("click", () => {
      this.style.backgroundColor = "red";
    });
  }
}

window.customElements.define("my-semaphore", Semaphore);

function changeColor() {
  this.style.backgroundColor = "grey";
}


