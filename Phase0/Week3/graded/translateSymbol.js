/*
convertSymbol
Diberikan sebuah
function convertSymbol,
function ini menerima array of string sebagai parameternya dan berfungsi untuk mengubah array yang elementnya berupa symbol menjadi angka.
Symbol diubah menjadi angka dengan ketentuan:

1. '!' => 1 6. '^' => 6
2. '@' => 2 7. '&' => 7
3. '#' => 3 8. '*' => 8
4. '$' => 4 9. '(' => 9
5. '%' => 5 10. ')' => 0

function convertSymbol(arr) {
    //code here
}

console.log(convertSymbol(['!(', '#&', '!@', '@%', '@@', '!%', '&#', '#%', '@%', '#!']))
[
  19, 37, 12, 25, 22,
  15, 73, 35, 25, 31
]
*/

/*
decrementOdd
Diberikan sebuah
function decrementOdd,
function ini menerima array of numbers, dan berfungsi untuk merubah setiap element yang ganjil, nilainya di kurangi dengan length dari array tersebut.

function decrementOdd(arr) {
    //code here
}

console.log(decrementOdd([19, 37, 12, 25, 22, 15, 73, 35, 25, 31]))
/*
[
  9, 27, 12, 15, 22,
  5, 63, 25, 15, 21
]
// */

// splitNumber
// Diberikan sebuah

// function splitNumber,
// function ini menerima array of numbers sebagai parameternya dan akan mengembalikan array multi dimensi dengan aturan:

//     Angka - angka akan dipisahkan setiap kali bertemu dengan angka lebih dari 26
// contoh:

/**
input: [
  9, 27, 12, 15, 22,
  5, 63, 25, 15, 21
]

output: [
  [9], 
  [12, 15, 22, 5],
  [25, 15, 21]
]

proses:

 - Ketika bertemu dengan angka 27 maka angka angka sebelumnya dianggap satu buah group
 - Dan angka-angka selanjutnya akan dianggap group yang baru.
 - Ketika bertemu dengan angka 63 maka angka angka sebelumnya dianggap satu buah group
 - Dan angka-angka selanjutnya akan dianggap group yang baru.
 **/
// function splitNumber(arr) {
//     //code here
// }

// console.log(splitNumber([9, 27, 12, 15, 22, 5, 63, 25, 15, 21]));

/*
 [
   [9], 
   [12, 15, 22, 5],
   [25, 15, 21]
 ]
*/

// convertNumber
// Diberikan sebuah

// function convertNumber,
// function ini menerima array multi dimensi sebagai parameternya dan berfungsi untuk mengembalikan sebuah string, dengan ketentuan:

//     Urutan angka antara 1 sampai 26, maka:
// 1 => 'a'
// 2 => 'b'
// 3 => 'c'
// 4 => 'd'
//     .
//     .
//     .
// 26 => 'z'

// function convertNumber(arr) {
//     //code here
// }

// console.log(convertNumber([
//     [9],
//     [12, 15, 22, 5],
//     [25, 15, 21]
// ]))

/*
i love you
*/

// result
// Diberikan sebuah
// function result,
// function ini merupakan main
// function yang akan menggabungkan seluruh fungsi yang sudah kita buat sebelumnya.

// function result(arr) {
//     // Your code here
// }

// console.log(
//     result(['!@', '!&', '@)', '#!', '&#', '!(', '@&', '%%', '!(', '##', '#&', '@^']) // lets go guyz
// )
// function convertSymbol(arr) {
//   let result = [];
//   let simbol = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
//   let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//   for (i = 0; i < arr.length; i++) {
//     let temp = '';

//     for (j = 0; j < arr[i].length; j++) {
//       for (k = 0; k < simbol.length; k++) {
//         if (arr[i][j] === simbol[k]) {
//           temp += angka[k];
//         }
//       }
//     }
//     if (!isNaN(temp)) {
//       temp = Number(temp);
//     }
//     result.push(temp);
//   }
//   return result;
// }
// // console.log(convertSymbol(['!(', '#&', '!@', '@%', '@@', '!%', '&#', '#%', '@%', '#!']));

// function decrementOdd(arr) {
//   // code here
//   let input = convertSymbol(arr);

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] % 2 !== 0) {
//       input[i] -= input.length;
//     }
//   }
//   return input;
// }
// console.log(decrementOdd([19, 37, 12, 25, 22, 15, 73, 35, 25, 31]))

// function splitNumber(arr) {
//   // code here
//   let input = decrementOdd(arr);
//   let result = [];
//   let temp = [];

//   for (let i = 0; i <= input.length; i++) {
//     if (input[i] > 26 || i === input.length) {
//       result.push(temp);
//       temp = [];
//       continue;
//     }
//     temp.push(input[i]);
//   }
//   return result;
// }

// function convertNumber(arr) {
//   // code here
// }

// function result(arr) {
//   // code here
//   // let convertSimbol = convertSymbol(arr);
//   let decrement = decrementOdd(convertSimbol);
//   return decrement;
// }

// // don't change this code

// let input = console.log(result(['!@', '!&', '@)', '#!', '&#', '!(', '@&', '%%', '!(', '##', '#&', '@^'])); // lets go guyz
// console.log(result(input));

// // let input1 = console.log(result(['!(', '#&', '!@', '@%', '@@', '!%', '&#', '#%', '@%', '#!'])); // i love you
// // console.log(result(input1));

// // let input2 = console.log(result(['!%', '@&', '@@', '!&', '$#', '@)', '!#', '!%', '@#', '*', '@!', '$'])); // code hacktiv
// // console.log(result(input2));


function convertSymbol(arr) {
  let result = [];
  let simbol = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
  let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  for (i = 0; i < arr.length; i++) {
    let temp = '';

    for (j = 0; j < arr[i].length; j++) {
      for (k = 0; k < simbol.length; k++) {
        if (arr[i][j] === simbol[k]) {
          temp += angka[k];
        }
      }
    }
    if (!isNaN(temp)) {
      temp = Number(temp);
    }
    result.push(temp);
  }
  return result;
}
// console.log(convertSymbol(['!(', '#&', '!@', '@%', '@@', '!%', '&#', '#%', '@%', '#!']));
/*
[
  19, 37, 12, 25, 22,
  15, 73, 35, 25, 31
]
*/

function decrementOdd(arr) {
  // code here

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr[i] -= arr.length;
    }
  }
  return arr;
}
// console.log(decrementOdd([19, 37, 12, 25, 22, 15, 73, 35, 25, 31]));
/*
[
  9, 27, 12, 15, 22,
  5, 63, 25, 15, 21
]
*/

function splitNumber(arr) {
  // code here
  let output = [];
  let temp = [];

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 26 || i === arr.length) {
      output.push(temp);
      temp = [];
      continue;
    }
    temp.push(arr[i]);
  }
  return output
}
// console.log(splitNumber([9, 27, 12, 15, 22, 5, 63, 25, 15, 21]));

/*
 [
   [9], 
   [12, 15, 22, 5],
   [25, 15, 21]
 ]
*/

function convertNumber(arr) {
  // code here
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let temp = '';

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      temp += alpha[arr[i][j] - 1];
    }
    if (i < arr.length - 1) {
      temp += ' ';
    }
  }
  return temp;
}
// console.log(convertNumber([
//   [9],
//   [12, 15, 22, 5],
//   [25, 15, 21]
// ]));
/*
i love you
*/

function result(arr) {
  // code here
  let convertedSimbol = convertSymbol(arr);
  let decrement = decrementOdd(convertedSimbol);
  let splitedNumber = splitNumber(decrement);
  let convertNomer = convertNumber(splitedNumber);
  return convertNomer;
}

// don't change this code

let input = console.log(result(['!@', '!&', '@)', '#!', '&#', '!(', '@&', '%%', '!(', '##', '#&', '@^'])); // lets go guyz
console.log(result(input));

// let input1 = console.log(result(['!(', '#&', '!@', '@%', '@@', '!%', '&#', '#%', '@%', '#!'])); // i love you
// console.log(result(input1));

// let input2 = console.log(result(['!%', '@&', '@@', '!&', '$#', '@)', '!#', '!%', '@#', '*', '@!', '$'])); // code hacktiv
// console.log(result(input2));