// const tinderUser1 = new Object();  // singaltar object hota hai


const tinderUser = {};  //non-singaltar object hota hai

 tinderUser.id = '123abc';
 tinderUser.name = 'John Doe';
 tinderUser.isLoggedIn = false;
 //console.log(tinderUser);

const regularUser = {
    email: 'omexample@gmail.com',
    fullName: {
        userfullName:{
            firstName: 'Om',
            lastName: 'Dwivedi'
         }

        }
    
    }
console.log(regularUser.fullName.userfullName.firstName);  // we can use ?. to avoid error if the property is not present in the object


const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};


 const obj4 = Object.assign(obj1, obj2);  // this method modifies the original object obj1 and returns the modified object go in mermory of first object and add the properties of second object in it and return the modified first object
 
 const obj5 = Object.assign({}, obj1, obj2);  // this method does not modify the original object but returns a new object with the merged properties
 const obj6 = {obj1, obj2};  // this method does not modify the original object but returns a new object with the merged properties but the properties are nested in the new object same as we read in array merge in react js
 

 console.log(obj4);
console.log(obj5);
console.log(obj6)

// modern way to merge two objects using spread operator and used mostly
 const obj3 = {...obj1, ...obj2};  // this method also modifies the original object obj1 and returns the modified object



 console.log(obj3);

 const user =[
    {id: 1,
        email: 'om@example.com'
     },
     {id: 2,
        email: 'john@example.com'
     }  
    
 ]

user[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));  // this method returns an array of keys of the object
console.log(Object.values(tinderUser));  // this method returns an array of values of the object
console.log(Object.entries(tinderUser));  // this method returns an array of key-value pairs of the object

// to know the properties of an object
console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // this method returns a boolean value indicating whether the object has the specified property



// lec 18


const course = {
    courseName: 'JavaScript',
    price: '999',
    courseInstructor: 'Hitesh'


}

//course.courseInstructor

const {courseInstructor: instructor} = course;  // this is called destructuring assignment and it is used to extract the properties of an object and assign them to variables

//console.log(courseInstructor);

console.log(instructor);



// // this not js this is relatred to react js
// const navbar = ({company, logo}) => {
// }  // this is called destructuring assignment. 

// navbar(company = "Amazon", logo = "amazon.png") // this is how we can pass the props to a component in react js and destructure them in the component to use them.




//json  is notation of javascript.


//  {
//    "name":"Hitesh",
//    "course":"JavaScript",
//    "price":"000",
//    "courseInstructor":"Hitesh"
// };

[

    {},
    {},
    {},
]

