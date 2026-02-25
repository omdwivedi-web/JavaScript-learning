// function means jo bhi code humne likha hai 20 ya 300 line ka use ek package me store karke jab bhi ho to copy kar ke use kar sake.
// function ke andar humne code likha hai usko hum function body kehte hai.


// example 1

console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");


function greet() {
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");

}

greet() // function call karne ke liye hum function ka naam likhte hai aur uske baad parenthesis lagate hai.



// example 2

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);  // jab function ke andar humne num1 aur num2 likha hai to usko hum function 'parameters' kehte hai. 
}

addTwoNumbers(2, 3) // ye ha pe 3 aur 4 ko hum function 'arguments' kehte hai.
addTwoNumbers(5, "10")
addTwoNumbers(5, "a")

const result = addTwoNumbers(5, 10) // function ke andar humne console.log(num1 + num2) likha hai to function ke andar humne kuch bhi return nahi kiya hai to function ka result undefined hoga. but the value which is printed in the console is because of console.log(num1 + num2) which is inside the function body.

console.log("Result: ", result)

// another way to write function


function addTwoNumbers1(num1, num2) {
    let sum = num1 + num2
    return sum; // jab hum function ke andar return statement likhte hai to function ke andar jo bhi value return hoti hai usko hum function ka output kehte hai. 
     
    console.log("This will not be printed");
    // Note result ke baad koi bhi code likha hai to wo code execute nahi hoga kyunki return statement ke baad function ka execution stop ho jata hai.
}

const result1 = addTwoNumbers1(5, 10) // function ke andar humne return sum; likha hai to function ke andar humne sum variable ko return kiya hai to function ka result 15 hoga.

console.log("Result: ", result1)


// one more way to write function

const addTwoNumbers2 = function(num1, num2) { // function expression
    return num1 + num2;
}

const result2 = addTwoNumbers2(5, 10)

console.log("Result: ", result2)


function loginUserMessage(username = "om") { // if user not define ho aur if condition not apply.
    // if (username === undefined)... ye bhi ek way hai
   if(!username) {
    console.log("Please provide a username");
    return; // agar username nhi hua to undefined return hoga.
   }
    return `${username} just logged in`  //` ye backticks hote hai jiske andar hum string interpolation kar sakte hai. ${} ke andar hum variable ya expression likh sakte hai jiska result string ke andar print hoga.
}

console.log(loginUserMessage("Hitesh"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())



function calculateBill(...amount){
    re
}
