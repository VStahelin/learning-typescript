import People from "../model/people.js";
import Person from "../model/person.js";

export class PersonController {
  private inputName: HTMLInputElement;
  private inputAge: HTMLInputElement;
  private people: People = new People();

  constructor() {
    this.inputName = document.querySelector("#input-name");
    this.inputAge = document.querySelector("#input-age");
  }

  addPerson(): void {
    const name = this.inputName.value;
    const age = Number(this.inputAge.value);
    const person = new Person(name, age);
    this.people.addPerson(person);
    console.log(this.people.getPeople());
  }

  cleanInputs(): void {
    this.inputName.value = "";
    this.inputAge.value = "";
    this.inputName.focus();
  }
}

export default PersonController;
