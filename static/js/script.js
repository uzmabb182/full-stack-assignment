console.log('Hello');
let num = 10;
console.log(num);

let description = 'This is a string.';
console.log(description);

let isValid = false;
console.log(isValid);

// to find the datatype of variable
console.log(typeof(num));
console.log(typeof(description));
console.log(typeof(isValid));

// Array and JSON are examples of Objects

let pet = ['cat', 'dog', 'squirrel'];
console.log(pet);
console.log(pet.length);
console.log(pet[0]);
console.log(pet[2]); //(length-1)

// To concatenate the elements in an array
console.log(pet.join());
// to use different seperator
console.log(pet.join(':'));

//  To print all the elements of array
for(let i=0; i < pet.length; i++) {
    console.log(pet[i]);
}

//  lets create a JavaScript Object
let employee = {
    name: 'Uzma',
    age: 25,
    permit:'Contractor',
    role: 'Data Analyst'
};
console.log(employee);
console.log(employee.name); // object.property

// If want to convert the object to string, use stringify Json method
console.log(JSON.stringify(employee));

// If want to convert the string to object, use stringify Json method
let stringifiedObj = JSON.stringify(employee);
console.log(JSON.parse(stringifiedObj));

//  Funtions are reuseable line of code that can be called anywhere from the code
// function functionName(arg1) { 
//   let answer = arg1 * arg2;
//   return answer;   
// }
function readModel() {
    return 'model';
}
console.log(readModel());

//  lets pass aparameter with a JSON Object
let customerObject = {
    'firstName' : 'Uzma',
    'lastName' : 'Qari',
    'brand' : 'Acura',
    'model' : '2007'
}
function getModel(obj) {
    return obj.model;
}
console.log(getModel(customerObject));

//  Add a kety-value pair to an existing object

function addLocation(obj) {
    obj.location = 'New Jersey';
    return obj;
}
console.log(addLocation(customerObject));

// Javascript Objects hold key value pair
let jsObject = {};

// Similarly JSON objects also holds key value pair, but JSON is not specific to JScript. 
// It can be parsed in any other prog language too. ut needs to be stringified before storing

let jsonExample = {};

// Example1: Check array with If condition
let countryArr = ['India', 'Spain', 'United Kingdom', 'Netherland']
for(let i=0; i < countryArr.length; i++) {
    if (countryArr[i] === 'Spain')
      console.log(countryArr[i]);
}
console.log('The country is found');

// Stringify a java object
let myTripDetails = {
    name : 'Pablos',
    age : 32,
    price : 299,
    currency : 'Euro'
}
console.log(JSON.stringify(myTripDetails));
