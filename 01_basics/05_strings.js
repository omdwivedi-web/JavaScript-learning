 const name = "om"
 const greeting = "welcome to the world of js"
// // Concatenation

 console.log(name + greeting +"") 

console.log(`hello my name is ${name} and ${greeting}. my aim to be a coder and i am learning js and i am loving it `)

// $ is used to insert the value of a variable into a string. It is used in template literals, which are enclosed in backticks (`)
//  instead of single or double quotes. The syntax for using $ is ${variableName}. This allows you to create dynamic strings that
//  can include variables and expressions.

const gameName = new String("cric-ket")
 console.log(gameName)
 console.log(typeof gameName)

 console.log(gameName[0]);
 console.log(gameName[1]);
 console.log(gameName.__proto__);


 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(1));
 console.log(gameName.indexOf("r"));

 const newString = gameName.substring(0, 4) // we can not use negative index in substring method and
//  it will return the string from the 0th index to the 4th index so it will return "cric" and 
// in this case it will return "cric" because the length of the string is 8 and it will start from the 0th index and 
// will go to the 4th index and it will return the string from the 0th index to the 4th index so it will return "cric"
 console.log(newString);


 const anotherString = gameName.slice(-8, 4) // it will start from the end of the string and will go to the 4th index and 
 // it will return the string from the end to the 4th index so it will return "cric" and in 
 // this case it will return "cric" because the length of the string is 8 and it will start from the end of the string and
 //  will go to the 4th index and it will return the string from the end to the 4th index so it will return "cric"

    console.log(anotherString);

    const newStringOne = "  hello world    "
    console.log(newStringOne.trim()) // it will remove the white spaces from the beginning and the end of the string 
    console.log(newStringOne.trimStart()) // it will remove the white spaces from the beginning of the string 
    console.log(newStringOne.trimEnd()) // it will remove the white spaces from the end of the string and it will return
    console.log(newStringOne);


    const url = "https://www.om.com/om%20dwivedi"
    
    console.log(url.replace('%20', '-')) // it will replace the %20 with a space and it will return the new string
    console.log(url.includes('om')) // it will return true if the string contains the specified value and it will return false if the string does not contain the specified value

    console.log(gameName.split("-")) // it will split the string into an array of substrings based on the specified separator and it will return the new array
    console.log(gameName.split("")) // it will split the string into an array of characters and it will return the new array