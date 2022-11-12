const string = 'Blackpink in your area'
// console.log(string
//   .split('')
//   .reverse()
//   .join('')
//   )
console.log(
    string
    .split('')
    .reverse()
    .join('')
    .split(' ')
    .reverse()
    .join(' ')
)

function split(str, separator) {}

function reverse(arr) {}

function join(arr, separator) {}

function main(str) {}

console.log(main(string))
// knipkcalB ni ruoy aera
// console.log(main('Javascript is so cool'))
// tpircsavaJ si os looc

console.log(split('Blackpink in your area', ''))
/*
  [
    'B', 'l', 'a', 'c', 'k',
    'p', 'i', 'n', 'k', ' ',
    'i', 'n', ' ', 'y', 'o',
    'u', 'r', ' ', 'a', 'r',
    'e', 'a'
  ]
*/

// console.log(split('Blackpink in your area', ' '))
// // ['Blackpink', 'in', 'your', 'area']

// console.log(reverse([1, 2, 3]))
// // [3, 2, 1]

// console.log(join([
//     'B', 'l', 'a', 'c', 'k',
//     'p', 'i', 'n', 'k', ' ',
//     'i', 'n', ' ', 'y', 'o',
//     'u', 'r', ' ', 'a', 'r',
//     'e', 'a'
// ], '-'))
// //Blackpink-in-your-area

// console.log(join(['Blackpink', 'in', 'your', 'area'], ' '))
// //Blackpink in your area