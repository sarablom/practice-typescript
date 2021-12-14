import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form");
//inputs
//Select element
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
//Every variabel that is saved has a format that is a string
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 300);
// docTwo = new Payment('mario', 'plumbing work', 200);
//Every object in the array has to have a format of string
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// const anchor = document.querySelector('a')!;
//Will warn you that the object is possibly null
//console.log(anchor.href);
//This will work
// if (anchor) {
//     console.log(anchor.href);
// }
//If we are ceratin that the variabel has a value, we can add on a ! after the query selector
//Then this works
//onsole.log(anchor.href);
//Use typecasting to tell TS what type of element we are refering to in the DOM
//Else it says element or null when you hover over the form variabel
// Variabels that match the Class structure of Invoice
// const invoiceOne = new Invoice('mario', 'work on the mario website', 250);
// const invoiceTwo = new Invoice('luigi', 'work on the luigi website', 300);
//An array of only invoice class objects
// let invoices: Invoice[] = [];
// invoices.push(invoiceOne);
// invoices.push(invoiceTwo);
// console.log(invoices);
