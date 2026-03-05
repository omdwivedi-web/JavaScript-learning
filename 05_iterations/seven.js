const myNumbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers= myNumbers.map((num) => num * 2);
// console.log(newNumbers);

// const newNumbers2 = myNumbers.map( function(num){ return num * 2; } ); // scope use karte isliye return liya hai.
// console.log(newNumbers2);


const newNums = myNumbers.map( (num) =>num+10)
.map((num) =>num*5) // chaining of map method.
.filter( (num) => num > 50); // chaining of filter method.  
console.log(newNums);
