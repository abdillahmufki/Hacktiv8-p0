// // function mengelompokkanAngka(arr) {
// //     // you can only write your code here!
// //     let angkaGenap = [];
// //     let angkaGanjil = [];
// //     let temp = [];

// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] % 3 === 0) {
// //             // Kelipatan 3
// //             temp.push(arr[i]);
// //         } else {
// //             if (arr[i] % 2 === 0) {
// //                 // Genap
// //                 angkaGenap.push(arr[i]);
// //             } else {
// //                 // Ganjil
// //                 angkaGanjil.push(arr[i]);
// //             }
// //         }
// //     }

// //     return [angkaGenap, angkaGanjil, temp];
// // }

// // //do not change the code below
// // var fs = require("fs");
// // var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
// // let inputArr = input[0] ? JSON.parse(input[0]) : [];
// // console.log(mengelompokkanAngka(inputArr));


function targetTerdekat(arr) {
    // you can only write your code here!
    let result = 0;
    let temp = [];
    let arr1 = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            temp.push(i);
        } else if (arr[i] === 'x') {
            arr1.push(i);
        }
        for (let j = 0; j < temp.length; j++) {
            for (let k = 0; k < arr1.length; k++) {
                if (result === 0) {
                    result = Math.abs(temp[j] - arr1[k]);
                } else {
                    if ((Math.abs(temp[j] - arr1[k])) < result) {
                        result = Math.abs(temp[j] - arr1[k]);
                    }
                }
            }
        }
    }
    return result;
}

//do not change the code below
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
let inputArr = input[0] ? JSON.parse(input[0]) : [];

console.log(targetTerdekat(inputArr));