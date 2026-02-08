// primitive data types-

// there are 7 primitive data types in JavaScript-
// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol (ES6)
// 7. bigint (ES2020)


// use to define type of data in JavaScript, it is a dynamic type language, which means that you can change the type of data at runtime.

const score = 100; // number
const scoreValue = 100.4; // number
const isLoggedIn = false; // boolean
const outsideTemp = null; // null
let age; // undefined
let userEmail = "xyz@gmail.com"; // string  

const id = Symbol("123"); // symbol
const anotherId = Symbol("123"); // symbol

console.log(id === anotherId) // false because each symbol is unique, even if they have the same description.

const bigNumber = 9007199254740991n; // bigint 

// non-primitive (reference) data types-
// 1. object (very important data type in JavaScript, it can store multiple values in a single variable and can have properties and methods)
// 2. array
// 3. function


const heros = ["shaskiman", "minal murli", "ironman"]; // array

let myObj = {
    name: "om dwivedi",
    age: 22,
    isStudent: true,
    hobbies: ["coding", "gaming", "traveling"],
}

const myFunction = function() {
    console.log("Hello, welcome to JavaScript!");   

} // function

// how we can check the type of data in JavaScript using the type of operator-

console.log(typeof bigNumber); // bigint
console.log(typeof heros); // object (arrays are also objects in JavaScript)
console.log(typeof  outsideTemp); // object (this is a known bug in JavaScript, null is not an object, but typeof null returns "object")
console.log(typeof scoreValue); // number
console.log(typeof userEmail); // string
console.log(typeof isLoggedIn); // boolean
console.log(typeof id); // symbol
console.log(typeof myFunction); // function (functions are also objects in JavaScript, but typeof returns "function" for functions)
console.log(typeof null); // object (this is a known bug in JavaScript, null is not an object, but typeof null returns "object")

