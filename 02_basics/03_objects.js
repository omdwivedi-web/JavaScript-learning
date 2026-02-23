//singleton object means jab constructor se koi object create hota use hum singleton object kehte hai
// object.create() method se bhi hum object create kar sakte hai

//object literal syntax

const sym = Symbol("mykey1"); //symbol is a unique identifier

const JsUser = {
    name: "Om",
    "full name": "Om Dwivedi", //property name with space this cannot be accessed using dot notation
    age: 22,
    location: "India",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
    email: "om@example.com",
    [sym]: "mykey1" // we use square brackets to define a property with a symbol key otherwise it will be treated as a string key
}

console.log(JsUser.email); //accessing property using dot notation
console.log(JsUser["name"]); //accessing property using bracket notation
console.log(JsUser[sym]); //accessing symbol property using bracket notation
console.log(typeof sym); //output will be "symbol"
    

JsUser.email = "om@newemail.com";
//Object.freeze(JsUser); //freeze method se hum object ko immutable bana sakte hai yani uske properties ko change nahi kar sakte hai

JsUser.email = "om@newemail.com"; //this will not work because the object is frozen

console.log(JsUser.email); //output will be "


JsUser.greeting = function() { // if we use return statement then it will return the value to the caller but if we don't use return statement then it will return undefined to the caller because the function will not return anything explicitly but it will still execute the code inside the function and print "Hello om!" to the console because the console.log statement is inside the function body and it will be executed when the function is called.
    console.log("Hello om!");
}

JsUser.greetingTwo = function() {
console.log(`Hello om!, ${this.name}`); 
}

console.log(JsUser.greeting()); //output will be "Hello om!" . if we don't use () then it will return the function definition instead of executing the function

console.log(JsUser.greetingTwo()); //output will be "Hello om!, Om" because this.name will refer to the name property of the JsUser object which is "Om"

