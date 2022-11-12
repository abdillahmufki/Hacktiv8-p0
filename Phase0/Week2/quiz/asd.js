// function fill(data, value, start, end) {
//     // your code here
//     let result = [];

//     if ((!data && !value && !start && !end) || !start && !end) {
//         return 'Invalid Input';

//     }
//     let i = 0;
//     while (i < data.length) {
//         //   console.log(data[i]);

//         if (start === undefined) {
//             result.push(value);
//         } else {
//             if (i < start) {
//                 result.push(data[i]);
//             }
//         }

//         if (!end) {
//             result.push(value);
//         } else if (!end) {
//             result.push(value);
//         } else if (i >= start && i < end) {
//             result.push(value);
//         } else {
//             result.push(data[i]);
//         }
//         i++;
//     }
//     return result;
// }

// // don't change this code
// var fs = require("fs");
// let {
//     data,
//     val,
//     start,
//     end
// } = JSON.parse(fs.readFileSync(process.stdin.fd, "utf-8").trim());

// console.log(fill(data, val, start, end));


// function fill(data, value, start, end) {
//     // your code here
//     let result = [];

//     if (data === undefined || value === undefined) {
//         return 'Invalid Input'
//     }
//     let i = 0;
//     while (i < data.length) {

//         if (start === undefined) {
//             result.push(value)
//         } else {
//             if (i < start) {
//                 result.push(data[i])
//             } else if (end === undefined) {
//                 result.push(value)
//             } else if (i >= start && i < end) {
//                 result.push(value)
//             } else {
//                 result.push(data[i])
//             }
//         }


//         i++;
//     }
//     return result
// }

// // don't change this code
// var fs = require("fs");
// let {
//     data,
//     val,
//     start,
//     end
// } = JSON.parse(fs.readFileSync(process.stdin.fd, "utf-8").trim());

// console.log(fill(data, val, start, end));

// function fill(data, value, start, end) {
//     if (data === undefined || value === undefined) {
//         return 'Invalid Input'
//     }
//     let result = []
//     let i = 0;

//     while (i < data.length) {

//         if (start === undefined) {
//             result.push(value)
//         } else {
//             if (i < start) {
//                 result.push(data[i])
//             } else if (end === undefined) {
//                 result.push(value)
//             } else if (i >= start && i < end) {
//                 result.push(value)
//             } else {
//                 result.push(data[i])
//             }

//         }


//         i++;
//     }
//     return result
// }



// don't change this code
// var fs = require("fs");
// let {
//     data,
//     val,
//     start,
//     end
// } = JSON.parse(fs.readFileSync(process.stdin.fd, "utf-8").trim());

// console.log(fill(data, val, start, end));

function fill(data, value, start, end) {
    // your code here
    let result = [];

    if (data === undefined || value === undefined) {
        return 'Invalid Input';
    } else {

        let i = 0;

        while (i < data.length) {
            // console.log(data[i]);
            if (start === undefined) {
                result.push(value);
            } else if (i >= start && i < end) {
                result.push(value);
            } else if (i < start) {
                result.push(data[i])
            } else if (end === undefined) {
                result.push(value);
            } else {
                result.push(data[i]);
            }
            i++;
        }
    }
    return result;
}

// don't change this code
var fs = require("fs");
let {
    data,
    val,
    start,
    end
} = JSON.parse(fs.readFileSync(process.stdin.fd, "utf-8").trim());

console.log(fill(data, val, start, end));