function filterMovie(genres) {
    let movies = [
        ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
        ["Action", "Mad Max", "The Batman", "Josh Wick"],
        ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
        ["Comedy", "Safety Last", "The Trip"]
    ];
    // write your code here
    let result = []; // Menampung untuk output berupa array

    /*
    melakukan split dan memfilter untuk membandingkan dengan menu object yang sudah di split di function usersCanWatch;
    karena Menu movies sudah jelas berada di index[0] maka gunakan movies index [i] sebagai index awal dari array multidimensi
    dan index[0] dari Menu movies
    */

    for (let i = 0; i < genres.length; i++) {
        // console.log(genres[i]);
        for (let j = 0; j < movies.length; j++) {
            // console.log(movies[j]);
            if (genres[i] === movies[j][0]) {
                result.push(movies[j]);
            }
        }
    }
    return result;
}

function usersCanWatch(users) {
    // write your code here
    if (!users) { // lakukan pengecekan jika data kosong maka akan mengembalikan nilai yaitu invalid data!
        return 'Invalid Data!';
    }

    let results = [];
    let str = '';

    for (let i = 0; i < users.menu.length + 1; i++) { // Split object menu karena ada ; dengan cara dibawah
        // console.log(users.menu[i]);
        if (users.menu[i] === ';' || !users.menu[i]) {
            results.push(str);
            str = '';
        } else {
            str += users.menu[i];
        }
    }

    let filter = filterMovie(results);

    if (filter.length === 0) { //lakukan pengecekan jika filtermovie input tidak tersedia di menu, dan mengembalikan nilai yaitu Movie not found;
        return 'Movie not found';
    }
    return filter;
}

// TEST CASE
const user1 = {
    name: "Bari",
    cinema: "XIV",
    menu: "Action;Drama;Comedy"
};
console.log(usersCanWatch(user1));
/*
[
  ["Action", "Mad Max", "The Batman", "Josh Wick"],
  ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

// const user2 = {
//     name: "Tole",
//     cinema: "XIIX",
//     menu: "Fantasy;Adventure;Comedy"
// };
// console.log(usersCanWatch(user2));
// /*
// [
//   ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
//   ["Comedy", "Safety Last", "The Trip"]
// ]
// */

const user3 = {
    name: "Rizky",
    cinema: "Cinepolos",
    menu: "Scifi-Musical"
};
console.log(usersCanWatch(user3));
// "Movie not found"

// console.log(usersCanWatch());
// // "Invalid Data!"