// while loop


let index = 0;

while (index <= 5) {
    console.log(`value of index is ${index}`); // `` ka ek aur kaam hai ham terminal me value ka name dene ke liye
    index = index + 2; // index = index + 2; // index = 0 + 2; // index = 2   
}

let myArray = ["flash", "superman", "batman", "spiderman"];

let arr = 0;

while (arr < myArray.length) {
    console.log(`hero is ${myArray[arr]}`);
    arr++;
}

// do while loop

let i = 1; // do while loop me pehle code execute hota hai fir condition check hoti hai


do {    console.log(`value of i is ${i}`);
    i++;
} while (i <= 5);