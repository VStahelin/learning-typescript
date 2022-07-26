import People from "../model/people.js";
import Person from "../model/person.js";
export class PersonController {
    constructor() {
        this.people = new People();
        this.inputName = document.querySelector("#input-name");
        this.inputAge = document.querySelector("#input-age");
    }
    addPerson() {
        const name = this.inputName.value;
        const age = Number(this.inputAge.value);
        const person = new Person(name, age);
        this.people.addPerson(person);
        console.log(this.people.getPeople());
    }
    cleanInputs() {
        this.inputName.value = "";
        this.inputAge.value = "";
        this.inputName.focus();
    }
}
export default PersonController;
