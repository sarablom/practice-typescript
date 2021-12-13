// ***********************************************************
// * Variables
// ***********************************************************

//Will alwys be a sring
let character = 'mario';
//Will always be a number
let number = 3;

//Any type  -- kinda reverts ts to js - so use with caution
let currentAge: any = 25;
currentAge = 'old';

//Explicit types

let title: string;
let age: number;
let isLoggedIn: boolean;
let mixedString: string|number;

// ***********************************************************
// * Functions
// ***********************************************************

const circle = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circle(32));

//Greet should be a function - notice capitalized first letter
let greet: Function;

//Optional parameters - notice the question mark after the c
// You can also add a default value to c by adding "= 10". then the question mark should be removed

const add  = (a: number, b: number, c?: number | string) => {
    console.log(a + b);
    console.log(c);   
}

add(5, 10, 20)

//The colon after the parameters explicitly tells what the return type should be. Not necessery in this case. can be used to give info to other developers.
const minus = (a: number, b: number): number => {
    return a + b;
}

//Result will inherit the type from the return value in the function, ergo number
let result = minus(10, 7);

//Function signatures

//Exampel 1
//This variabel holds a function which has two parameters and returns void
//Void - the function is not returning anything

let helloGreeting: (a: string, b: string) => void; 

helloGreeting = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
    
}

//Exampel 2
//THis variabel holds a function which takes three parameters and returns a number

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

//Exampel 3
let logggingDetails: (obj: {name: string, age: number}) => void;

logggingDetails = (ninja: {name: string, age: number}) => {
    console.log(ninja.name, ninja.age);
    
}

//************************************************************ 
// * Arrays
// ***********************************************************

//Can only add strings to this array
let names = ['luigi', 'mario', 'yoshi'];

//An empty array of strings that is initialized
let ninjas: string[] = [];

//Mixed array
let mixed = ['ken', 4, true];
let mixedAgain: (string|number|boolean)[] = [];
let mixedArray: any[] = [];

// ***********************************************************
// * Objects
// ***********************************************************

//Cant change the properties, name always has to be a string and age always have to be a number
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
}

let ninjaOne: object;

//More specific
let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}


// *************************************************************
// * Type Aliases
// *************************************************************

//Defining types that can be used many times

type StringOrNum = string | number;
type objWithName = {name: string, uid: StringOrNum}

const logDetails = (uid: StringOrNum) => {
    console.log(uid);
};

const greeting = (user: objWithName) => {
    console.log(`${user.name} says hello`);
};