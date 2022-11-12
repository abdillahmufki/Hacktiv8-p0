function countMe(arr) {
    // write your code here
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        //   console.log(arr[i]);
        let key = arr[i];
        if (!obj[key]) {
            obj[key] = 0;
        }
        obj[key]++;
    }
    return obj;
}

//do not change the code below
inputArr = ['sofyan', 'ricky', 'sofyan', 'semmi', 'semmi', 'wika'];
console.log(countMe(inputArr));