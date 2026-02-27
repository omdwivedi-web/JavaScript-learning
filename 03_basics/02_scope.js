{}//this is called scope 
 //var c = 300 we not use this again

 let a = 300 // this is global scope  

if (true){
        let a = 10

        const b = 20
        
 
        //var c  = 30 //jab ham var ya normally c=30 use kar te hai to ye if ki condition kr baad bhi print hota hai because of this we avoid the use of .
       
        console.log("inner:" , a);
        

    }
// any code written under the condition those are called block scope 
console.log(a);
console.log(b);
console.log(c);


//nested scope means jo child function parent ke variablesko acces kar pate hai

function one (){
    const username = "hitesh"

    function two() {

        const website = "youtube"
        console.log(username);
            
        
    }
      console.log(website);

      two()
    
}

 one()


 if (true){
    const username = "hitesh"
    if (username === "hitesh"){

        const website ="youtude"
        console.log (username + website);

    }
    //console.log(website); //  can not run because of it is outside the scope of website 
 }
 
 //console.log(username);


 //+++++++++++++++++++++++instersting+++++++++++++++++++++++++++
 

 function addone(num){
         return num +1
 }  // this is function 

 addone(5) // only return not print.  agar ham isko function se phele likh de to bhi ye exitude hoga 


 const addTwo = function (num) {

    return num + 2
    
 }    // this is also function but sometime this is called experssion like a variables.

 addTwo(5) // agar is ham function ke uppr likh de to ye exitude in ho ga because ye ek variable me store hai . tis is all because of hosting 


