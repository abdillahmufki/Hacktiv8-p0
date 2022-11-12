function sittingArrangement(person, column) {
    // Your code here
    let result = [];
    let totalPerson = Math.ceil(person.length / column)
    let counter = 0;

    if (column === 0) {
        return 'Invalid number';
    } else {
        for (let i = 0; i < totalPerson; i++) {
            let temp = [];
            for (let j = 0; j < column; j++) {
                if (person[counter]) {
                    temp.push(person[counter])
                    counter++;
                } else if (person.length === counter) {
                    temp.push('Kursi Kosong');
                }
            }
            result.push(temp);
        }
    }
    return result;
}

//do not change the code below
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
let listPerson = input[0] ? JSON.parse(input[0]) : [];
let column = +input[1];

console.log(sittingArrangement(listPerson, column));