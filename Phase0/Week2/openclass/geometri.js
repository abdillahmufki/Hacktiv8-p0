function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    let selisih = arr[1] / arr[0];
    let result = true;

    for (let i = 1; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arr[i] < 3) {
            result = false;
        } else if ((arr[i] / arr[i - 1]) != selisih) {
            result = false;
        }
    }
    return result;
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false