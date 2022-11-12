let str = 't#$est%$4aa';
let kamus = '1234567890abcdefghijklmnopqrstuvwxyz'
let result = ''
for (let i = 0; i < str.length; i++) {
    let kata = str[i];
    for (let j = 0; j < kamus.length; j++) {
        let dict = kamus[j];
        if (kata === dict) {
            result += kata;
        }
    }

}
console.log(result);

// let str = 'javascript';
// let kamus = 'aiueo'
// let result = ''
// for (let i = 0; i < str.length; i++) {
//     let kata = str[i];
//     for (let j = 0; j < kamus.length; j++) {
//         if (kata === kamus) {
//             result += str[i];
//         }
//     }

// }
// console.log(result);