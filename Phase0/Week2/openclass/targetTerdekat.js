function targetTerdekat(arr) {
    // you can only write your code here!
    let result = 0;
    let temp = [];
    let arr1 = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            temp.push(i);
        } else if (arr[i] === 'x') {
            arr1.push(i);
        }
        for (let j = 0; j < temp.length; j++) {
            for (let k = 0; k < arr1.length; k++) {
                if (result === 0) {
                    result = Math.abs(temp[j] - arr1[k]);
                } else {
                    if ((Math.abs(temp[j] - arr1[k])) < result) {
                        result = Math.abs(temp[j] - arr1[k]);
                    }
                }
            }
        }
    }
    return result;
}