let word = "Hackt1iv8";
let perDigit = '';

if (word === "") {
    perDigit = "Tidak ada kata yang bisa di proses";
} else {
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < isNaN(Number(word[i])); j++);
        if (isNaN(Number(word[i]))) {
            perDigit += word[i];
        } else if (word[i] === " ") {
            perDigit += word[i];
        } else {
            for (let u = 0; u < word[i]; u++) {
                perDigit += word[i - 1];
            }
        }
    }
}
console.log(perDigit);