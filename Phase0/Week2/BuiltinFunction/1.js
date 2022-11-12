/*
Built-in functions Challanges

Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array seperti, .push()
.shift(), .unshift(), .pop()

Kerjakan 4 function dibawah ini dalam satu file. untuk antrian, panggilAntrian dan tumpukan, buatlah function dengan
mengikuti desktipsi yang diberikan. 

* antrian()
Diberikan sebuah function antrian yang menerima dua parameter yaitu line bertipe array dan person bertipe string.
function ini akan mengembalikan array yang dimana data array tersebut sudah bertambah di akhir sesuai dengan parameter person.

* PanggilAntrian()
Diberikan sebuah
function panggilAntrian yang menerima dua parameter line bertipe array.
function ini akan mengembalikan array yang dimana data array tersebut berukurang 1 didepannya.

* tumpukan()
Diberikan sebuah
function tumpukan yang menerima dua parameter line bertipe array dan title bertipe string.
function ini akan mengembalikan array yang dimana data array sudah bertambah di awal array sesuai dengan parameter title

*/

/* antrian()
function antrian(line, person) {
    // your code here
    line.push(person);
    return line;
}
let line = ['Rhaegar']
console.log(antrian(line, 'Snow')) // ['Rhaegar', 'Snow']
*/

/*
function panggilAntrian(line) {
    // your code here
    return line.slice(1);
}

let line = ['Rhaegar', 'Snow']
console.log(panggilAntrian(line)) // ['Snow']
*/


/* tumpukan()
 function tumpukan(line, title) {
     //     // your code here  
     line.unshift(title);
     return line;
 }
 let line = ['Snow'];
 console.log(tumpukan(line, 'Jon')); // ['Jon', 'Snow']
 */

let plat = '1233;123;1231;123';

function ganjilGenap(plat) {
    // your code here
    let angkaGenap = '24680';
    let angkaGanjil = '13579';
    for (let i = 0; i < plat.length; i++) {
        if (plat[i] === angkaGenap) {
            return plat[i];
        }
    }
}

console.log(ganjilGenap(plat));