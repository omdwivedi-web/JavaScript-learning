// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (i === 5) {
    
        //console.log("5 is best"); // it will print 5 is best when i is 5 and then it will print 5 because of console.log(element) after if statement
        
    }
    //console.log(element);
    
}

//console.log(element);// ReferenceError: element is not defined

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop: ${i}`);
    for (let j = 0; j <= 10; j++) {
    const element = j;
    // console.log(`Inner loop: ${j} && inner loop :${i})`);
    // console.log(i + "*" + j + "=" + i * j);

    }
    
}
 

let myArray = [1, 2, 3, 4, 5];

//console.log(myArray.length); 

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
   // console.log(element);
    
}


//break and continue

// for (let j = 1; j <= 20; j++) {
//     if ( j == 7) {
//         console.log(`7 is detected`);
//         break; 
// }
//     console.log(j);
//     }
for (let j = 1; j <= 20; j++) {
    if ( j == 7) {
        console.log(`7 is detected`);
        continue; // it will skip the current iteration and continue with the next iteration of the loop
}
    console.log(j);
    }
   