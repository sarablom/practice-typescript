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
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
//Select element
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLSelectElement;

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();

    console.log(type.value, tofrom.value, details.value, amount.value);
    
})