function urutkanAbjad(str) {
    // you can only write your code here!
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < alpha.length; i++) {
        // console.log(alpha[i]);
        for (let j = 0; j < str.length; j++) {
            // console.log(str[j]);
            if (alpha[i] === str[j]) {
                result = result + str[j];
            }
        }
    }

    return result;
}

//do not change the code below
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
console.log(urutkanAbjad(input[0]));