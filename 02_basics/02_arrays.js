const marvel_heros = ["Spiderman", "Ironman", "Thor", "Hulk", "Captain America"];
const dc_heros = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"];

marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros.length);// 6

// To avoid this we can use the spread operator


const all_heros_2 = marvel_heros.concat(dc_heros);

console.log(all_heros_2);
console.log(all_heros_2.length); // 10



const all_heros = [...marvel_heros, ...dc_heros];

console.log(all_heros);
console.log(all_heros.length); // 10

const another_array =[1, 2, 3, 4, 5, [10, 20, 30], [40, 50, 60]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 60]




console.log(Array.isArray("om")); // false
console.log(Array.from("om")); // ["o", "m"]
console.log(Array.from({ name: "om" })); // [undefined] and it is intersting case

let score1 = 100;
let score2 = 2000;

console.log(Array.of(score1, score2)); // [100, 2000]


//more depth on is Array, Array.from and Array.of
