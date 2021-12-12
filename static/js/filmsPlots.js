console.log(films);

// Initialized arrays
let gRating = []
let pgRating = []
let pg13Rating = []
let rRating = []

for (let i = 0; i < films.length; i++) {
    row = films[i];
    console.log(row)
    gRating.push(row.rating);
}

console.log(gRating);
console.log(gRating[0]);

let rating = ['G', 'PG', 'PG-13', 'R'];

let newArray = [];

// 1st way:
for (let i = 0; i < rating.length; i++) {
    newArray.push(`more ${rating[i]}`)
};

console.log(rating);
console.log(newArray);

// 2nd way:
rating.forEach(function(item) {
    newArray.push(`even more ${item}`);
});

console.log(newArray);

// 2nd way

let rate = rating.forEach(item => console.log(item))

// 3rd way:
let mapArray = rating.map(function(item) {
    return `even even more ${item}`
});

console.log(mapArray);

// 4th way:
let indexmapArray = rating.map(function(item, index) {
    return `even even more ${item}-${index}`;
});

console.log(indexmapArray);

// ------------------------------------------------
// Now examples with array of objects

let students = [
    {name:"Malcom", score: 80},
    {name:"Zoe", score: 85},
    {name:"Kaylee", score: 99},
    {name:"Simon", score: 95},
    {name:"Wash", score: 79}
]

let names = students.map(function(item, index){
    return `${item.name}-${index}`;
});

console.log(names);

// 5th way
let scoreList = students.map((item, index) => `${item.score}-${index}`)
console.log(scoreList);

// ---------------------------------------------------
// filtering array
let scoreFilter = students.filter(item => item.score >= 80)
console.log(scoreFilter);
// Now to get the individual item in the filtered list
let nameList = scoreFilter.map((item, index) => `${item.score}-${index}`)
console.log(nameList);
console.log(nameList.length);

//-----------------------------------------------------
// Slicing of array
let firstName = ["Jane", "John", "Jimbo", "Jedah"];
// Slice the first two row
let left = firstName.slice(0, 2);
console.log(left);

let right = firstName.slice(2, 4);
console.log(right);

// ----------------------------------------------------
// To sort it alphabatically
firstName.sort();
console.log(firstName);

// Sorting the array descending is (b-a)
numArray = [1, 2, 3]
numArray.sort(function(a, b) {
    return b-a;
});
console.log(numArray)

// Sorting the array ascending is (b-a)
numArray.sort(function(a, b) {
    return a-b;
});
console.log(numArray)

//  We can replace with fat arrow
numArray.sort((a, b) => a - b);
console.log(numArray)


