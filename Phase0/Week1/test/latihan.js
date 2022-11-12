// let age = 2;
// let height = 120;
// let tarif;
// let uang;

// if (age >= 1) {
//     console.log('Dilarang masuk');
// } else if (age > 2 && age < 3) {
//     if (height > 70) {
//         console.log(uang + 10000);
//     }
// } else if (age >= 4 && age <= 7) {
//     if (height > 120) {
//         console.log(uang + 15000);
//     }
// } else if (age >= 8 && age <= 10) {
//     if (height > 150) {
//         console.log(uang + 20000);
//     }
// } else if (umur > 10) {
//     console.log(uang)
// }

// let input = '';
// var kata = input;

// // code here
// let vokal = 'aiueo';
// let result = '';

// for (let i = 0; i < kata.length; i++) {
//     let str = kata[i]
//     for (let j = 0; j < vokal.length; j++) {
//         if (kata[i] === vokal) {
//             kata[i] += '$';
//         }
//     }
// }
// console.log(kata);
let input = 'katak';
let kata = input.length;
let balikKata;
let i = 0;
while (kata.length) {
    if (kata[i] === kata[i]) {
        balikKata += true;
    } else {
        balikKata += false;
    }
    i++;
    console.log(balikKata);
}