// const coding = ["JavaScript, Python, Java, C++, C#, Ruby, Swift"];

// const values =  coding.forEach( function(items){   
//      console.log(items); // forEach method return undefined so values me undefined aayega. 
//      return items; // forEach method return undefined so values me undefined aayega.
// }) 

// console.log(values);

const numbers = [1, 2, 3, 4, 5];

const numbers2 = numbers.filter( (items) => items > 4); // filter method return new array so numbers2 me new array aayega.

console.log(numbers2);

// another way to use filter method.

const numbers4 = numbers.filter( function(items){ 
    return items > 4; // scope use karte isliye return liya hai.
})



const newnumbers3 = []

numbers.forEach( (items) => {
    if(items > 4){
        newnumbers3.push(items); // forEach method return undefined so newnumbers3 me undefined aayega.
    }
})

console.log(newnumbers3);


const Books = [
    {name: "Book1", price: 100, genre: "Fiction", publish: "2000", edition: 2019},
    {name: "Book2", price: 200, genre: "Non-Fiction", publish: "2019", edition: 2024},
    {name: "Book3", price: 300, genre: "Fiction", publish: "2018", edition: 2026},
    {name: "Book4", price: 400, genre: "Non-Fiction", publish: "2010", edition: 2025},
    {name: "Book5", price: 500, genre: "Fiction", publish: "2013", edition: 2023},
]

const newBooks = Books.filter (  (book) => book.edition > 2020 );

const newBooks2 = Books.filter (  function(book){return book.edition > 2020  && book.price < 400; // scope use karte isliye return liya hai.
});

console.log(newBooks); 
console.log(newBooks2);