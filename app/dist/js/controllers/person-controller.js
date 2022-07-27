import People from "../model/people.js";
import Person from "../model/person.js";
import { PeopleView } from "../views/people-view.js";
import { MessageView } from "../views/message-view.js";
export class PersonController {
    constructor() {
        this.people = new People();
        this.peopleView = new PeopleView("#people-view");
        this.messageView = new MessageView("#message-view");
        this.inputName = document.querySelector("#input-name");
        this.inputAge = document.querySelector("#input-age");
        this.peopleView.update(this.people);
    }
    addPerson() {
        const name = this.inputName.value;
        const age = Number(this.inputAge.value);
        const person = new Person(name, age);
        this.people.addPerson(person);
        this.peopleView.update(this.people);
        this.messageView.update(`${name} was added successfully`);
    }
    cleanInputs() {
        this.inputName.value = "";
        this.inputAge.value = "";
        this.inputName.focus();
    }
}
export default PersonController;
