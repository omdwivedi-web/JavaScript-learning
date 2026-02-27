const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function (){
        console.log(`${this.username} , welcome to website`); // ' this.'   use to represent current contest in code 
        console.log(this);
        
    }
}


user.welcomeMessage()
user.username = "sam"

user.welcomeMessage()

console.log(this);


function chai(){
    let username = "hitesh"
    console.log(this.username) // in this case "this " will not run in function.
        //console.log(this);
    
}

chai()


const chai1 =  () => {       // => it shows that arrow function and in

    let username = "sam"
    //console.log(this);     // in arrow function case this while run but output is {}  which is not same as normal function
     
    console.log(this.username);
    

         
    
}
chai1()



const addTwo = (num1, num2) => {
    return num1 +num2
}

console.log(addTwo(3,4))

// another way 

const addThree = (num1, num2, num3) => num1 + num2 + num3;   // this is also known as implicet return

console.log(addThree(3,4,5));

 const name = (fristname, secondname) => ({"name":"sam pandit"}); // to return an object we always use paranthisis(), other there is  no output

 console.log(name("sam", "pandit"));


 
