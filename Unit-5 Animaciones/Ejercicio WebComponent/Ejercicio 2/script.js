class MySwitch extends HTMLElement {
  constructor() {
    super();

    //Div con dos elementos( cuadrado rojo al inicio, cuadrado con texto OFF);
    const container = document.createElement("div");
    container.style.width = "30px";
    container.style.height = "15px";
    container.append(body);
  }
  connectedCallback() {

  }

}
window.customElements.define("my-switch", MySwitch);
