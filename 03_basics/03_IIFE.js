// IIFE=> Immediately Invoked Function Expression

(function chai() {
    console.log(`DB CONNECTED`);

})() ;   // we use this is because we want to run our code fastly and ()() one is use to cose in packet means to write the definition of function  and other is use to exaution call and global polution se problem na ho isliye iska use kar te hai
         // we use ; to end the code so use it if dont it comes an error  jab ham dubara exeicute kare ge 

//  chai() we don't use this time 



( function aurcode  () {
    // Named IIFE
    console.log(`DB CONNECTED WO`);
    
}  )();

(  (name) => {
    console.log(`DB CONNECTED TWO`);
    
}  )("sam");

