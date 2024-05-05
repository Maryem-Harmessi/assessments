var movies = [
  {
    title: "Inception",
    genre: "Sci-Fi",
    duration: 148,
    rating: 8.8,
  },
  {
    title: "The Wolf Of Wall Street",
    genre: "Drama",
    duration: 180,
    rating: 8.2,
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    duration: 152,
    rating: 9.0,
  },
  {
    title: "Pulp Fiction",
    genre: "Crime",
    duration: 154,
    rating: 8.9,
  },
];

// ⚠️⚠️⚠️ you can only use each of the high order functions once for each exercise function, and even once in that function too!!
// it means that you will be using each, map, filter, and reduce only one time inside the following functions.

var highestRated = function (movies) {
  var movie=movies[0]
  var rating=movies[0].rating
  movies.forEach(element => {
    if(element.rating>rating){
      movie=element
      rating=element.rating
    }
  });
  return  movie
};

var longDuration = function (movies) {
  return movies.filter(function(element){
  return element.duration > 150})
};

var genres = function (movies) {
  return movies.map(function(element){
    return element.genre
  })
};

var totalRating = function (movies) {
  return movies.reduce(function(acc,element){
    acc=acc+element.rating
    return acc
  },0)
};
