let input = 'katak';

let kata = input;
let balikKata = '';

for (let i = kata.length - 1; i >= 0; i--) {
    balikKata += kata[i];
}
if (kata === balikKata) {
    console.log(true);
} else {
    console.log(false);
}