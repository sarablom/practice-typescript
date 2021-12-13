"use strict";
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
const form = document.querySelector('.new-item-form');
//inputs
//Select element
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
