function filterMovie(genres) {
    let movies = [
        ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
        ["Action", "Mad Max", "The Batman", "Josh Wick"],
        ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
        ["Comedy", "Safety Last", "The Trip"]
    ];
    // write your code here
    let arr = [];
    let temp = '';

    for (let i = 0; i < genres.length; i++) {
        console.log(genres[i])
    }
    return movies;
}

function usersCanWatch(users) {
    // write your code here
    if (!users) {
        return 'Invalid data';
    }

    let filter = filterMovie(genres);
    return filter;
}

// don't change this code below
console.log(usersCanWatch({
    name: "Bari",
    cinema: "XIV",
    menu: "Action;Drama;Comedy"
}));
/*
[
  ["Action", "Mad Max", "The Batman", "Josh Wick"],
  ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

console.log(usersCanWatch({
    name: "Rizka",
    cinema: "Cinepolos",
    menu: "Scifi;Musical"
}));
// "Movie not found"

console.log(usersCanWatch());
// "Invalid Data!"