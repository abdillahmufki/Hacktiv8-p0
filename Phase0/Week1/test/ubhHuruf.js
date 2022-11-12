// do not change this code
var input = 'asdasd';
var kata = input;

// code here
let alpha = kata;
let vocal = 'aiueo';
let change = '$';
let a = '';

for (let i = 0; i < alpha.length; i++) {
    for (let j = 0; j < vocal.length; j++) {
        if (vocal[j] === alpha[i]) {
            a += change;
        }
    }
    if (a.length < i + 1) {
        a += alpha[i];
    }
}
console.log(a);