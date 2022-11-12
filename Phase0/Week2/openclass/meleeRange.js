// /*
//  * Logic Challenge: Melee Ranged Grouping
//  * Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.
//  * Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...
//  * Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]
//  * Jika input adalah string kosong ('') maka return array kosong
//  */

// function meleeRangedGrouping(str) {
//     let tmpArr = [];
//     let tmpStr = '';
//     let tmpFinal = [
//         [],
//         []
//     ];

//     if (str.length === 0) {
//         return [];
//     }

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== ',') {
//             tmpStr += str[i];
//         }

//         if ((str[i] === ',') || (i === str.length - 1)) {
//             tmpArr.push(tmpStr);
//             tmpStr = '';
//         }
//     }

//     for (let i = 0; i < tmpArr.length; i++) {
//         let tmpSub = '';
//         let name = '';
//         let group = '';

//         for (let j = 0; j < tmpArr[i].length; j++) {
//             if (tmpArr[i][j] !== '-') {
//                 tmpSub += tmpArr[i][j];
//             }

//             if (tmpArr[i][j] === '-') {
//                 name = tmpSub;
//                 tmpSub = '';
//             }

//             if (j === tmpArr[i].length - 1) {
//                 group = tmpSub;
//                 tmpSub = '';
//             }
//         }

//         if (group === 'Ranged') {
//             tmpFinal[0].push(name);
//         }

//         if (group === 'Melee') {
//             tmpFinal[1].push(name);
//         }
//     }

//     return tmpFinal;
// }

// // TEST CASE

// console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

// console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

// console.log(meleeRangedGrouping('')); // []


function sorting(arrNumber) {
    // write your code here
    let status = true;
    let temp;

    for (let i = 0; i < arrNumber.length; i++) {
        // console.log(arrNumber[i]);
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
    } else {
        for (let i = 0; i < arrNumber.length; i++) {
            // console.log(arrNumber[i]);
            if (arrNumber[i] === angka) {
                counter++;
            }
        }
    }
    return `angka paling besar adalah ${angka} dan jumlah kemunculan sebanyak ${counter} kali`;
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