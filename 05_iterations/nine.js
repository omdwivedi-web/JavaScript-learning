const myNums=[1,2,3];

const mytotal2 = myNums.reduce( function(acc, num){
    
console.log(`accumulator: ${acc}, currval: ${num}`); // to know that is what is coming in accumulator and in current value. and this always in first line of reduce method.
 return acc + num; }, 0); // scope use karte isliye return liya hai, we give 0 to know accumulator start from 0.

console.log(mytotal2);

// to know that is what is coming in accumulator and in current value.


const mytotal = myNums.reduce( (acc, num) => acc + num, 0); // reduce method return single value so mytotal me single value aayega.


console.log(mytotal);


const shoppingCart = [
    {itemName: "python course",
         price: 1000,
          quantity: 1},


    {itemName: "javascript course",
         price: 2000, 
         quantity: 2},

    {itemName: "java course",
         price: 3000,
          quantity: 3},


    {itemName: "mobile development course",
         price: 4000,
          quantity: 4},

]

const total = shoppingCart.reduce( (acc, item) => acc + item.price * item.quantity, 0); // reduce method return single value so shoppingCart me single value aayega.
console.log(total);
