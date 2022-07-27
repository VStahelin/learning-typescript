import { View } from "./view.js";
export class PeopleView extends View {
    template(people) {
        return `
          <table class= "table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
                ${people
            .getPeople()
            .map((person) => {
            return `
                        <tr>
                            <td>${person.name}</td>
                            <td>${person.age}</td>
                        </tr>
                    `;
        })
            .join("")}
            </tbody>
            </table>
        `;
    }
    update(people) {
        const template = this.template(people);
        this.element.innerHTML = this.template(people);
    }
}
