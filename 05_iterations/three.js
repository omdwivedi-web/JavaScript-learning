// for of
// [{}, {}, {}]
// ["", "", ""]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);   
}

const greeting = "hello world";

for (const char of greeting) {
    console.log(`each char is ${char}`);
}

//maps

const myMap = new Map();

myMap.set('IN', 'India');
myMap.set('US', 'United States');
myMap.set('UK', 'United Kingdom');
//console.log(myMap);

for (const [key, value] of myMap) { // key and value dono chahiye to aise likhenge in square brackets
    console.log(`key is ${key} and value is ${value}`);
}

const programming = ['javascript', 'python', 'java', 'c++', 'c#', 'ruby', 'swift'];

for (const key in programming) {
   // console.log(`index is ${key} and value is ${programming[key]}`);
  // console.log("index is " + key + " and value is " + programming[key]);
   console.log(programming[key]);
   
}

const myObject = {
    'game1': 'chess',
    'game2': 'football',
    'game3': 'cricket'
};

// for(const [key, value] of myObject) { // object me for of loop nahi chalta hai, isliye error aayega
    
