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
