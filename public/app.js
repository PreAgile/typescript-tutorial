import { Invoice } from "./classes/invoice.js";
const me = {
    name: "shan",
    age: 30,
    speak(text) { },
    spend(amount) {
        return amount;
    },
};
const greetPerson = (person) => {
    console.log('hello : ' + person.name);
};
console.log(greetPerson(me));
const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", " work on the luigi website", 300);
let invoices = [];
// invOne.details
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices[0].format());
console.log(invoices[1].format());
const anchor = document.querySelector("a");
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
const form = document.querySelector(".new-item-form");
// // inputs
// const type = document.querySelector("#type") as HTMLSelectElement;
// const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
// const details = document.querySelector("#details") as HTMLInputElement;
// const amount = document.querySelector("#amount") as HTMLInputElement;
// form.addEventListener("submit", (e: Event) => {
//   e.preventDefault();
//   console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
// });
