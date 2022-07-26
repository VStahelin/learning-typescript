export default class People {
    constructor() {
        this.people = [];
    }
    addPerson(person) {
        this.people.push(person);
    }
    getPeople() {
        return this.people;
    }
}
