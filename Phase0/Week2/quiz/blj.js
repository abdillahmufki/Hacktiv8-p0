/**
 * Buatlah program untuk mengumpulkan pilihan produk mana saja yang sesuai dengan uang customer dan stock tersedia.
 */

let products = [
    ["baju", 50000, 3],
    ["sepatu", 125000, 2],
    ["tas", 99000, 1],
    ["jam tangan", 525000, 1],
    ["permen", 2500, 0],
];


//   function filterStockAndPrice akan mengembalikan array produk yang sudah difilter berdasarkan harga dan stock

let input = [
    ['baju', 50000, 3],
    ['sepatu', 125000, 2],
    ['tas', 99000, 1],
    ['jam tangan', 525000, 1],
    ['permen', 2500, 0]
];
filterStockAndPrice(input, 60000)
// // return
// [
//   ['baju', 50000, 3]
// ]

function filterStockAndPrice(data, money) {
    let result = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i][1] <= money && data[i][2] > 0) {
            result.push(data[i]);
            console.log(result);
        }
    }
    return result;
}
console.log(filterStockAndPrice(input, 60000));
/**
 * function formatOutput akan mengembalikan array nama" produk berdasarkan array input
 * 
 *  let input = [
      ['baju', 50000, 3]
    ]
    formatOutput(data)
    // return
    ['baju']
 */
function formatOutput(data) {

}

/**
 * function findMatching adalah function utama yang akan mengembalikan array nama" produk yang sesuai dengan uang customer dan stock tersedia.
 *
 * jika input produk tidak diberikan, kembalikan 'invalid input'
 * jika tidak ada produk yang ditemukan, kembalikan 'tidak ada produk yang cocok'
 */
function findMatching(data, money) {
    // call filterStockAndPrice
    // call formatOutput

    filterStockAndPrice();


}

console.log(findMatching(products, 100000)); // ['baju', 'tas']
console.log(findMatching(products, 5000)); // 'tidak ada produk yang cocok'
console.log(findMatching()); // 'invalid input