const coding = ["javascript", "python", "java", "c++", "c#", "ruby", "swift"];  

// coding.forEach( function(items){    // ye callback function hai to ham name nahi dege.
//     console.log(items);
// })

// coding.forEach( (items) => {    // ye arrow function bhi  callback function hai to ham name nahi dege.      
//     console.log(items);
// })

// function printItems(items) {
//     console.log(items);
// }

// coding.forEach(printItems);

coding.forEach( (items, index, array) => { 
    console.log(`index is ${index} and value is ${items} and array is ${array}`);
});


const mycoding = [
    {name: "javascript",
    type: "programming language"
},
{
    name: "python",
    type: "programming language"
},
{
    name: "java",
    type: "programming language"
},
]

mycoding.forEach( (items) => {
    console.log(`name is ${items.name} and type is ${items.type}`);
})