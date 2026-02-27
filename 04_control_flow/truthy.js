const userEmail = []

if (userEmail) {
  console.log("You have an email");
} else {
  console.log("You don't have an email");
}

// In JavaScript, the following values are considered falsy:
// false
// 0
// -0
// 0n (BigInt zero)
// "", '', `` (empty string)
// null
// undefined
// NaN

// All other values are considered truthy, including:
// true
// Any non-zero number (e.g., 1, -1, 3.14)
// Any non-empty string (e.g., "hello", " ", "0")
// Any object (e.g., {}, [])
// Any array (e.g., [], [1, 2, 3])
// Any function (e.g., function() {}, () => {})



//  if (userEmail.length === 0) { 
//     console.log("Array is empty");
// }  


const emptyObj = {} 
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// In JavaScript, the following values are considered truthy:
//false == 0
// false == ''
// 0 == '' because of type coercion in JavaScript, where it tries to convert values to a common type before comparing them. 
// In this case, both false and 0 are coerced to the same value (0) when compared with an empty string, resulting in true. 
// However, it's important to note that this can lead to unexpected results and is generally not recommended for use in comparisons. 
// It's better to use strict equality (===) to avoid type coercion and ensure that both the value and type are the same.

// nullish ccalescing operator (??): null undefined ko check karta hai, agar value null ya undefined hai to default value return karta hai, otherwise original value return karta hai.

let vall;
val1 = 5 ?? 10; // 5 because it is not null or undefined
val1 = null ?? 10; // 10 because it is null
val1 = undefined ?? 10; // 10 because it is undefined
val1 = null ?? 20 ?? 10; // 20 because it is the first non-nullish value in the chain, so it returns 20 and ignores the rest of the values.
console.log(val1);

// teniary operator 

// condition ? True : False

const iceTea = 18;
iceTea >= 18 ? console.log("You can buy ice tea") : console.log("You cannot buy ice tea");
