function cariModus(arr) {
    // write your code here
    let temp = 0;

    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                temp += 1;
            }
        }
    }
    if (arr.length / temp === 1 || (arr.length * arr.length) / temp === 1) {
        return -1;
    }

    for (let i = 0; i < arr.length; i++) {
        let tmp = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                tmp += 1;
            }
        }
        if (tmp > 1) {
            return arr[i];
        }
    }
}


//do not change the code below
//Case 1
console.log(cariModus([10, 4, 5, 2, 4]));
//Output 4

//Case 2
console.log(cariModus([10, 3, 1, 2, 5]));