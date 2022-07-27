import People from "../model/people.js";
import Person from "../model/person.js";
import { PeopleView } from "../views/people-view.js";
import { MessageView } from "../views/message-view.js";

export class PersonController {
  private inputName: HTMLInputElement;
  private inputAge: HTMLInputElement;
  private people = new People();
  private peopleView = new PeopleView("#people-view");
  private messageView = new MessageView("#message-view");

  constructor() {
    this.inputName = document.querySelector("#input-name");
    this.inputAge = document.querySelector("#input-age");
    this.peopleView.update(this.people);
  }

  public addPerson(): void {
    const name = this.inputName.value;
    const age = Number(this.inputAge.value);
    const person = new Person(name, age);
    this.people.addPerson(person);
    this.peopleView.update(this.people);
    this.messageView.update(`${name} was added successfully`);
  }

  public cleanInputs(): void {
    this.inputName.value = "";
    this.inputAge.value = "";
    this.inputName.focus();
  }
}

export default PersonController;
