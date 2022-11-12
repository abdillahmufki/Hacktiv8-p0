function vocalSeeker(board) {
    // Write your code here
    let vocal = 'AaIiUuEeOo';
    let hitung = 0;
    let str = '';

    for (let i = 0; i < board.length; i++) {
        //   console.log(board[i]);
        for (let j = 0; j < board[i].length; j++) {
            //   console.log(board[i][j]);
            for (let k = 0; k < vocal.length; k++) {
                //   console.log(vocal[k]);
                if (board[i][j] === vocal[k]) {
                    hitung++;
                    str += vocal[k];
                }
            }
        }
    }
    return `vokal ditemukan ${hitung} dan kumpulan vokal adalah ${str}`;
}


//do not change the code below
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
let board = input[0] ? JSON.parse(input[0]) : [];
console.log(vocalSeeker(board));