// let score = "100abc"


// //console.log( typeof(score) )
// //console.log( typeof score )

// let valueInNumber = Number(score) // this will convert the string "100" to number 100
// //console.log( typeof(valueInNumber) )
// //console.log( (valueInNumber) ) 


// if 110 is under "110" quotes, it will be treated as string
// if 110 is not under "110" quotes, it will be treated as number
// if  "110abc" it will be treated as NAN (not a number)
// if true  then output will be 1
// if false then output will be 0

// let isLoggedIn = undefined

// let booleanIsLoggedIn = Boolean(isLoggedIn) // this will convert the number 1 to boolean true
// console.log( typeof(booleanIsLoggedIn) )
// console.log( booleanIsLoggedIn )

//  1 => true
//  0 => false
// "" => false
// "abc" => true
// undefined => false

// let someNumber = 33

// let stringSomeNumber = String(someNumber) // this will convert the number 33 to string "33"
// console.log( typeof(stringSomeNumber) )
// console.log( stringSomeNumber )


// ############################### Operations ###############################

// let value = 3
// let negValue = -value // this will convert the number 3 to -3
// console.log(negValue)


// console.log( 4 + 2 )
// console.log( 4 - 2 )
// console.log( 4 * 2 )
// console.log( 4 / 2 )
// console.log( 4 % 2 )
// console.log( 4 ** 2 )  

// let str1 = "Hello"
// let str2 = "OM DWIVEDI"

// let str3 = str1 + " " + str2 // this will concatenate the two strings with a space in between
// console.log(str3)


// console.log( "4" + 2 ) // this will convert the number 2 to string "2" and concatenate it with string "4" to give output "42"
// console.log(4 +"2") // this will convert the number 4 to string "4" and concatenate it with string "2" to give output "42"

//  // In JavaScript, the + operator is used for both addition and string concatenation. When one of the operands is a string, 
// //  JavaScript converts the other operand to a string and concatenates them. 
// //  If both operands are numbers, it performs addition. But this not use in real world//


// console.log("1" + 2 + 3) // this will convert the number 2 and 3 to string "2" and "3" and concatenate it with string "1" to give output "123"
// console.log(1 + 2 + "3") // this will first add the numbers 1 and 2 to give 3 and then convert it to string "3" and concatenate it with string "3" to give output "33"



console.log(+true) // this will convert the boolean true to number 1
console.log(+false) // this will convert the boolean false to number 0
console.log(+"") // this will convert the empty string to number 0
console.log(+"abc") // this will convert the string "abc" to NaN (Not a Number) because it cannot be converted to a valid number


let num1, num2, num3

num1 = num2 = num3 = 5 + 5 // (this usually not use in real world because it can lead to confusion and bugs, but it is valid JavaScript syntax) this will assign the value 10 to num1, num2, and num3

let gameCounter = 100

gameCounter++ // this will increment the value of gameCounter by 1, so gameCounter will become 101
console.log(gameCounter);