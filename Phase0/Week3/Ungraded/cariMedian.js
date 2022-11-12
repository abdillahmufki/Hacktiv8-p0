/*
 * Logic Challenge - Mencari Median
 * Diberikan sebuah function cariMedian(arr) yang menerima sebuah array angka.
 * Function akan me-return median dari deret angka tersebut.
 * Median adalah nilai tengah dari sebuah deret bilangan.
 * Contoh, median atau dari [1, 2, 3, 4, 5] adalah 3 yang merupakan nilai yang ada di posisi tengah dari deret tersebut.
 * Median dari deret yang berjumlah genap adalah rata-rata dari dua nilai tengah.
 * Contoh, median dari [1, 2, 3, 4] adalah 2.5, karena (2 + 3 / 2).
 */

function cariMedian(arr) {
    let panjang = arr.length;
    let median = 0;

    if (panjang % 2 === 0) {
        // Jika ganap
        median = (arr[(panjang / 2) - 1] + arr[panjang / 2]) / 2;
    } else {
        // Jika ganjil
        median = arr[Math.floor(panjang / 2)];
    }

    return median;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5