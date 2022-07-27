export abstract class View<T> {
  protected element: HTMLElement;
  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  protected abstract template(message: T): string;

  update(message: T): void {
    const template = this.template(message);
    this.element.innerHTML = this.template(message);
  }
}
