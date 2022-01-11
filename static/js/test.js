// working on array
let arr = []

arr.push("alpha");
arr.push("beta");
arr.push("gamma");
arr.push("delta");

console.log(arr);
console.log(arr.slice(1,3))

let name = "Uzma"
let awsomeness = true

console.log(`My name is ${name} and this is ${awsomeness}!`);

// working on objects

let city = {name: "Chicago",
            state: "IL",
            area: 3242.1,
            nickname:"Second City"}

console.log(city);

console.log(city.name);

let chosenKey = "name";

console.log(city[chosenKey]);

// to overwrite a value
city.state = "NJ"

console.log(city);

// to add a new key
city.population =  12131233;

console.log(city);
