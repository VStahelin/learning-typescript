import Person from "./person.js";

export default class People {
  private people: Person[] = [];

  addPerson(person: Person): void {
    this.people.push(person);
  }

  getPeople(): readonly Person[] {
    return this.people;
  }
}
