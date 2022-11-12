let str = 'String' // "StRiNg"
// let str = 'Weird string case' // "WeIrD StRiNg CaSe"
// let str = 'This is a test' // ThIs Is A TeSt

let result = ''

for (i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
        result += str[i].toUpperCase();
    } else {
        result += str[i].toLowerCase();
    }
}
console.log(result);