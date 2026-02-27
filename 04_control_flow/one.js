// if statement

const isUserLoggedIn = true;
const temperature = 30;


// if (temperature > 25) {
//   console.log("Temperature is greater than 25");
// } else {    
// console.log("temperture is less than  25");
// }
//console.log("This will always execute");

// >, <, >=, <=, ==, === (to check ), !=, !==

const score = 100;

// if (score > 90) {
//     const pizza = "🍕"
//     console.log(`You got an A : ${pizza}`);

// } 
//console.log(`You got an A : ${pizza}`); // ReferenceError: because pizza is block scoped and not accessible outside the if block


// const balance = 1000;

// // if (balance > 500) console.log("check"),
// // console.log("test2"); // very imature way .

// if (balance < 500) {
//     console.log("less than 500");
// }
//     else if (balance < 750) {
//         console.log("less than 750");
//     }
//     else if (balance < 900) {
//         console.log("greater than 750");
//     }
//     else {
//         console.log("greater than 900");
//     }


const userLoggedIn = true
const debitCard = true
const loggedInFromMobile = false
const loggedInFromDesktop = true

if (userLoggedIn && debitCard) {
    console.log("You can make a purchase");
}
if (loggedInFromDesktop || loggedInFromMobile) {
    console.log("You can access your account");
} // || is logical OR operator to check multiple conditions and execute the block if at least one of the conditions is true



