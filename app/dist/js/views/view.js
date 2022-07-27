export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    update(message) {
        const template = this.template(message);
        this.element.innerHTML = this.template(message);
    }
}
