 const score =400

 const balance =new Number(1000)

 console.log(score)
 console.log(balance)
 console.log(balance.toString()) // it will convert the number to a string and it will return the new string
 console.log(balance.toString().length) // it will convert the number to a string and it will return the length of the new strin
 console.log(balance.toFixed(2)) // it will convert the number to a string and it will return the new string with 2 decimal places


 const otherNumber = 123.456789

 console.log(otherNumber.toPrecision(3)) // it will convert the number to a string and it will return the new string with 3 significant digit
 const hundreds = 1000000
 console.log(hundreds.toLocaleString('en-IN')) // it will convert the number to a string and it will return the new string with commas for thousands separators




//+++++++++++++++++MATH+++++++++++++++++++++++

 console.log(Math);// it will return the Math object with all its properties and methods
 console.log(Math.abs(-5)) // it will return the absolute value of the number
 console.log(Math.round(4.7)) // it will round the number to the nearest integer
 console.log(Math.ceil(4.2)) // it will round the number up to the nearest integer
 console.log(Math.floor(4.8)) // it will round the number down to the nearest integer
 console.log(Math.max(1, 2, 3, 4, 5)) // it will return the largest number from the list of numbers
 console.log(Math.min(1, 2, 3, 4, 5)) // it will return the smallest number from the list of numbers




console.log(Math.random()) // it will return a random number between 0 and 1;
console.log(Math.random() * 10) // it will return a random number between 0 and 10 

console.log(Math.floor(Math.random() * 10 + 1)) // we do+1 because if in any case the random number is 0 then it will return 0 
                                               // and we want to return a number between 1 and 10 so we add 1 to the result of Math.random() * 10

console.log(Math.floor((Math.random() * 10) + 1)) // we can also write it like this and it will give the same result as the previous line of code but 
                                                 // this way is more readable and easier to understand and it is also more efficient because we are doing the addition before 
                                                // the multiplication which is faster than doing the multiplication first and then the addition.it also obeys the rule bodmas 


const min = 10
const max = 20
console.log(Math.random() * (max - min)) // it will return may be 0 some time to aviod we do
console.log(Math.random() * (max - min +1)) // to avoid 0
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // it will never return o or value less than 10 and floor will round it down to the nearest integer.                                             