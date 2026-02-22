//array

const Arr = [0, 1, 2, 3, 4, 5];
const myHero = ["Spiderman", "Ironman", "Thor", "Hulk", "Captain America"];

const myArr = new Array(1, 2, 3, 4, 5);
// console.log(Arr[0]); // 1
// console.log(myHero[2]); // Thor
// console.log(myArr[4]); // 5


// //array methods

// myArr.push(6); // adds 6 to the end of the array
// console.log(myArr); // [1, 2, 3, 4, 5, 6]

// myArr.pop(); // removes the last element of the array
// console.log(myArr); // [1, 2, 3, 4, 5]

// myArr.unshift(0); // adds 0 to the beginning of the array and can make load on computer if the array is large because it has to shift all the elements to the right
// console.log(myArr); // [0, 1, 2, 3, 4, 5]

// myArr.shift(); // removes the first element of the array
// console.log(myArr); // [1, 2, 3, 4, 5]


// console.log(myHero.length); // 5
// console.log(myHero.indexOf("Hulk")); // 3
// console.log(myHero.includes("Thor")); // true
// console.log(myHero.includes("Black Widow")); // false

// const newHero = myHero.join(); // joins the elements of the array into a string with a separator
// console.log(typeof newHero); // string


// splice method,slice method

console.log("A", Arr); // A [0, 1, 2, 3, 4, 5]


                             
const myn1 = Arr.slice(1, 3); // returns a shallow copy of a portion of an array into a new array object selected from start to 
                             // end (end not included) where start and end represent the index of items in that array.
console.log(myn1); // [1, 2]
console.log("B", Arr); // B [0, 1, 2, 3, 4, 5] because the original array is not modified by slice method

const myn2 = Arr.splice(1, 3); // removes 3 elements starting from index 1 and returns the removed elements as a new array.
console.log(myn2); // [1, 2, 3]
console.log("C", Arr); // C [0, 4, 5] because the original array is modified by splice method
                            
                            
                            
                        
