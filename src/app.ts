import { Invoice } from "./classes/invoice.js";

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "shan",
  age: 30,
  speak(text: string): void {},
  spend(amount: number): number {
    return amount;
  },
};

const greetPerson = (person: IsPerson) =>{
  console.log('hello : ' + person.name);
}

console.log(greetPerson(me));

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", " work on the luigi website", 300);

let invoices: Invoice[] = [];
// invOne.details
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices[0].format());
console.log(invoices[1].format());

const anchor = document.querySelector("a")!;

console.log(anchor?.href);

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// // inputs
// const type = document.querySelector("#type") as HTMLSelectElement;
// const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
// const details = document.querySelector("#details") as HTMLInputElement;
// const amount = document.querySelector("#amount") as HTMLInputElement;

// form.addEventListener("submit", (e: Event) => {
//   e.preventDefault();
//   console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
// });
