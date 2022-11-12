function ladder(word) {
    //your code here
    let result = [];
    let arr = [];

    for (let i = word.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            arr.push(word[j]);
        }
        result.push(arr);
        arr = [];
    }
    return result;
}

//do not change the code below
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
console.log(ladder(input[0]));