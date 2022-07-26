import { PersonController } from "./controllers/person-controller.js";

const personController = new PersonController();
const form = document.getElementById("form-person");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  personController.addPerson();
  personController.cleanInputs();
});
