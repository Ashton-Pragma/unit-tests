export class TestComponent extends HTMLElement {
    async connectedCallback() {
        await this.init();
        await this.setProperties();
    }

    async disconnectedCallback() {

    }

    async init() {
        const response = await fetch(new Request("webcomponents/test-component/test-component.html"));
        const text = await response.text();
        this.innerHTML = text;
    }

    async setProperties() {
        this.elem = this.querySelector("#myId");
        await this.setValue(10);
    }

    async setValue(cond) {
        if (cond > 5) {
            this.elem.innerText = "20";
        }
    }
}

globalThis.customElements.define("test-component", TestComponent);