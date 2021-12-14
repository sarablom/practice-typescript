"use strict";
// ***********************************************************
// * Variables
// ***********************************************************
//Will alwys be a sring
let character = 'mario';
//Will always be a number
let number = 3;
//Any type  -- kinda reverts ts to js - so use with caution
let currentAge = 25;
currentAge = 'old';
//Explicit types
let title;
let age;
let isLoggedIn;
let mixedString;
// ***********************************************************
// * Functions
// ***********************************************************
const circle = (diameter) => {
    return diameter * Math.PI;
};
console.log(circle(32));
//Greet should be a function - notice capitalized first letter
let greet;
//Optional parameters - notice the question mark after the c
// You can also add a default value to c by adding "= 10". then the question mark should be removed
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, 20);
//The colon after the parameters explicitly tells what the return type should be. Not necessery in this case. can be used to give info to other developers.
const minus = (a, b) => {
    return a + b;
};
//Result will inherit the type from the return value in the function, ergo number
let result = minus(10, 7);
//Function signatures
//Exampel 1
//This variabel holds a function which has two parameters and returns void
//Void - the function is not returning anything
let helloGreeting;
helloGreeting = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//Exampel 2
//THis variabel holds a function which takes three parameters and returns a number
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//Exampel 3
let logggingDetails;
logggingDetails = (ninja) => {
    console.log(ninja.name, ninja.age);
};
//************************************************************ 
// * Arrays
// ***********************************************************
//Can only add strings to this array
let names = ['luigi', 'mario', 'yoshi'];
//An empty array of strings that is initialized
let ninjas = [];
//Mixed array
let mixed = ['ken', 4, true];
let mixedAgain = [];
let mixedArray = [];
// ***********************************************************
// * Objects
// ***********************************************************
//Cant change the properties, name always has to be a string and age always have to be a number
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
let ninjaOne;
//More specific
let ninjaTwo;
const logDetails = (uid) => {
    console.log(uid);
};
const greeting = (user) => {
    console.log(`${user.name} says hello`);
};
// *************************************************************
// * Generics
// *************************************************************
// Create a reusable chunk of code that can be reused with different types
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
//   const docThree: Resource<object> = {
//     uid: 1, 
//     resourceName: 'person', 
//     data: { name: 'shaun' }
//   };
//   const docFour: Resource<string[]> = {
//     uid: 1, 
//     resourceName: 'shoppingList', 
//     data: ['bread', 'milk']
//   };
//   console.log(docThree, docFour);
// *************************************************************
// * Enums
// *************************************************************
//Allows us to store a set of constants or key words and associate them with a numeric value
// Example ResourceType.BOOK
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
;
// const docOne: Resource<object> = {
//   uid: 1,
//   resourceType: ResourceType.BOOK,
//   data: { title: 'name of the wind' }
// }
// const docTwo: Resource<object> = {
//   uid: 10,
//   resourceType: ResourceType.DIRECTOR,
//   data: { title: 'name of the wind' }
// }
// console.log(docOne);
// console.log(docTwo);
// *************************************************************
// * Tuples
// *************************************************************
// Cannot change type in array on specific position
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
let tuple = ['ryu', 25, true];
// tup[0] = false;
tuple[0] = 'ken';
let student;
//student = [23564, 'chun-li'];
student = ['chun-li', 23564];
