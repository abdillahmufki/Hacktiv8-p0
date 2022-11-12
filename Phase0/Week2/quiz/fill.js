// function fill(data, value, start, end) {
//     // your code here
//     let result = [];

//     while (true) {
//         console.log('Hello World!');


//         result++;
//     }

//     return result;
// }

// // don't change this code

// console.log(fill(data, val, start, end));

//ungraded 
// let input = ['Hacktiv8']

// function ladder(word) {
//     //your code here
//     let result = [];
//     let arr = [];

//     for (let i = word.length; i > 0; i--) {
//         console.log(word[i]);
//         for (let j = i + 1; j < word[i]; j++) {
//             arr.push(word[j]);
//         }
//         result.push(arr);
//         arr = [];
//     }
//     return result;
// }

let input = ['Hacktiv8'];

function ladder(word) {
    //your code here
    let result = [];
    let arr = [];
    for (let i = word.length; i > 0; i--) {
        // console.log(word[i]);
        for (let j = 0; j < i; j++) {
            arr.push(word[j]);

        }
        result.push(arr);
        arr = [];
    }
    return result;
}

//do not change the code below

console.log(ladder(input[0]));