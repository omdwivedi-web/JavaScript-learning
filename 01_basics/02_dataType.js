 "use strict"; //treat all js code as newer version 

 // alert(3+3) //we are using nodejs not browser so alert will not work

    console.log(3+3) // code reads and execute line by line 

    console.log("Om Dwivedi")


    let name ="om dwivedi" //string datatype
    let age =21 //number datatype
    let isLoggedIn = false //boolean datatype

    // number datatype => 2 to power 53
    // bigint datatype => larger than 2 to power 53
    //null datatype => standalone value (object in js as output)
    //undefined datatype => standalone value
    //symbol datatype => used for unique identifiers


    //object datatype => key value pairs

    console.log(typeof "om dwivedi") // to know datatype of variable use typeof operator
      console.log(typeof age)//number
      console.log(typeof isLoggedIn) //boolean
      console.log(typeof BigInt(1234567890123456789012345678901234567890n)) //bigint
      console.log(typeof null) // this is a bug in js it should return null but it returns object
      console.log(typeof undefined) //undefined
      console.log(typeof Symbol("my identifier")) //symbol
      console.log(typeof {name:"om", age:21})   //object 