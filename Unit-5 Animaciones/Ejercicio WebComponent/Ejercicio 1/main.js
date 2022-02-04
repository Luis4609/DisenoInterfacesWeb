class WcBlink extends HTMLElement {
  constructor() {
    super();

    var baseColor = this.getAttribute(baseColor);
    var alternativeColor = this.getAttribute(alternativeColor);
    var changeInterval = this.getAttribute(changeInterval);
  }

  connectedCallback() {
    var interval;

    function changeColor() {
      interval = setInterval(changeColorText, 1000);
    }

    function stopChangeColor() {
      clearInterval(interval);
    }

    this.innerHTML = `
      <div>
        <button>Comprar Ahora</button>
      </div>
    `;
  }
}

window.customElement.define("wc-blink", WcBlink);
