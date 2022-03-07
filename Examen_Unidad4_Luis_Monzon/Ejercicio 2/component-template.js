class Semaphore extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let shadowRoot = this.attachShadow({ mode: "open" });
    const semaphore = document.querySelector("#semaphore");
    const instance = semaphore.content.cloneNode(true);
    shadowRoot.appendChild(instance);
  }
}

window.customElements.define("my-semaphore", Semaphore);
