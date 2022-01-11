let movies = [
    {
        title: 'The Shawshank Redemption',
        rating: 9.2,
        year: 1994
    },
    {
        title: 'The Godfather',
        rating: 9.1,
        year: 1972
    },
    {
        title: 'The Godfather: Part II',
        rating: 9.0,
        year: 1974
    },
    {
        title: 'The Dark Knight',
        rating: 9.0,
        year: 2008
    },
    {
        title: '12 Angry Men',
        rating: 8.9,
        year: 1957
    },
    {
        title: "Schindler's List",
        rating: 8.9,
        year: 1993
    },
    {
        title: 'The Lord of the Rings: Return of the King',
        rating: 8.9,
        year: 2003
    },
    {
        title: 'Pulp Fiction',
        rating: 8.8,
        year: 1994
    },
    {
        title: 'The Good, the Bad and the Ugly',
        rating: 8.8,
        year: 1966
    },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        rating: 8.8,
        year: 2001
    }
]


// Starting a rating count
let sum = 0;

// Arrays to hold movies by decade
movies1960s = [];
movies1970s = [];
movies1980s = [];
movies1990s = [];
movies2000s = [];

// For loop to go through all movies
for (let i = 0; i < movies.length; i++) {
  // Variable to hold current movie in loop
  let movie = movies[i]
  // Increment sum variable by amount of rating
  sum += movie.rating

  // Conditional statement to determine array assignment
  if (movie.year < 1970) {
    movies1960s.push(movie);
  } else if (movie.year < 1980) {
    movies1970s.push(movie);
  } else if (movie.year < 1990) {
    movies1980s.push(movie);
  } else if (movie.year < 2000) {
    movies1990s.push(movie);
  } else {
    movies2000s.push(movie);
  }
}

// Find the average rating
let avg = sum / movies.length;

// Print results
console.log("---------");
console.log(`${movies1960s.length} of the top ten movies are from the 1960s.`);
console.log(`${movies1970s.length} of the top ten movies are from the 1970s.`);
console.log(`${movies1980s.length} of the top ten movies are from the 1980s.`);
console.log(`${movies1990s.length} of the top ten movies are from the 1990s.`);
console.log(`${movies2000s.length} of the top ten movies are from the 2000s.`);
console.log(`The average movie rating is ${avg}.`);
console.log("---------");
