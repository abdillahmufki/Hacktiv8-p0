// /*
//  * Logic Challenge - Most Frequent Largest Numbers
//  * Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.
//  * Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
//  */

// function sorting(arrNumber) {
//     let length = arrNumber.length;
//     let status = true;
//     let tmp;

//     for (let i = 0; i < length; i++) {
//         if (arrNumber[i] > arrNumber[i + 1]) {
//             tmp = arrNumber[i];
//             arrNumber[i] = arrNumber[i + 1];
//             arrNumber[i + 1] = tmp;

//             status = false;
//         }
//     }

//     if (status) {
//         return arrNumber;
//     } else {
//         return sorting(arrNumber);
//     }
// }

// function getTotal(arrNumber) {
//     let highNumber = arrNumber[arrNumber.length - 1];
//     let counter = 0;

//     if (arrNumber.length <= 0) {
//         return '';
//     }

//     for (let i = 0; i < arrNumber.length; i++) {
//         if (arrNumber[i] === highNumber) {
//             counter++;
//         }
//     }

//     return 'angka paling besar adalah ' + highNumber + ' dan jumlah kemunculan sebanyak ' + counter + ' kali';
// }

// function mostFrequentLargestNumbers(arrNumber) {
//     var listSort = sorting(arrNumber);
//     var countHighest = getTotal(listSort);
//     return countHighest;
// }

// console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
// //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

// console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

// console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

// console.log(mostFrequentLargestNumbers([]));
// //''

function sorting(arrNumber) {
    // write your code here
    let status = true;
    let temp;

    for (let i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > arrNumber[i + 1]) {
            temp = arrNumber[i];
            arrNumber[i] = arrNumber[i + 1];
            arrNumber[i + 1] = temp;
            status = false;
        }
    }

    if (status) {
        return arrNumber;
    } else {
        return sorting(arrNumber);
    }
}

function getTotal(arrNumber) {
    let angka = arrNumber[arrNumber.length - 1];
    let counter = 0;

    if (arrNumber.length <= 0) {
        return '';
    }

    for (let i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] === angka) {
            counter++;
        }
    }

    return 'angka paling besar adalah ' + angka + ' dan jumlah kemunculan sebanyak ' + counter + ' kali';
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

//don not change the code below
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
let inputArr = input[0] ? JSON.parse(input[0]) : [];
console.log(mostFrequentLargestNumbers(inputArr));