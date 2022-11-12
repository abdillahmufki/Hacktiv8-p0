let str = 'hello';
let kamus = 'aiueo';
// code here
// ngecek apakah ada vokal di str atau tidak

// str = 'hello', output: true 
// str = 'bcdfg', output: false


let isVocal = false;

for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < kamus.length; j++) {
        if (str[i] === kamus[j]) {
            isVocal = true;
            break;
        }
    }
}
console.log(isVocal);