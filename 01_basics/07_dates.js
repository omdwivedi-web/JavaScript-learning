//dates

let myDate = new Date()

 console.log(myDate.toString());
 console.log(myDate.toDateString());
console.log(myDate.toTimeString()); console.log(myDate.toLocaleString());   console.log(myDate.toLocaleDateString()); console.log(myDate.toLocaleTimeString());

 console.log(typeof myDate);


let myCreatedDate = new Date(2020, 0, 1) // month is 0-indexed in JavaScript, so 0 is January
let myCreatedate = new Date(2030, 11, 31, 5, 3, 9) 

 let myCreatedDate1 = new Date('2020-01-01') // ISO format is also accepted here jan is 01 

 console.log(myCreatedDate.toDateString());
console.log(myCreatedate.toString());

console.log(myCreatedDate1.toLocaleDateString());

let date1 = new Date('12/10/2020')// this format is MM/DD/YYYY in JavaScript, so it will be interpreted as December 10, 2020 but it not recommeded.

 console.log(date1.toLocaleDateString());    



let timeStamp = Date.now() // gives the number of milliseconds since January 1, 1970, 00:00:00 UTC
 console.log(timeStamp);
 console.log(myCreatedDate1.getTime()); // gives the number of milliseconds since January 1, 1970, 00:00:00 UTC for the specific date
 console.log(Date.now()/1000); // gives the number of seconds since January 1, 1970, 00:00:00 UTC to avoid decimal we use floor method
console.log(Math.floor(Date.now()/1000)); // gives the number of seconds since January 1, 1970, 00:00:00 UTC without decimal part


let newDate = new Date()
 console.log(newDate);
 console.log(newDate.getFullYear()); // gives the year of the date
 console.log(newDate.getMonth() + 1); // gives the month of the date (0-11, where 0 is January and 11 is December)
                                 // to get the month in human-readable format we can add 1 to the result 
console.log(newDate.getDate()); // gives the day of the month (1-31)
console.log(newDate.getHours()); // gives the hour of the date (0-23)

'${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}' // gives the time in HH:MM:SS format



newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    
}) // gives the date in a more human-readable format, for example: "Monday, January 1, 2020"

console.log(newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    
}));



//meree ko timezone ko reapeat karna hai.