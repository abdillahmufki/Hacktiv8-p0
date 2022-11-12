/**
 * TOKO X - Versi 2
 * =================
 * 
 * kali ini TOKO X menerima PO (purchase order) dan perlu memesan barang sesuai orderan customer.
 * Bantulah TOKO X untuk memesan jumlah barang yang cukup
 * Orderan customer tidak FIX jumlah barangnya, ada MIN minimum dan MAX maximum jumlah barang yang mau mereka beli. 
 * Berikan detail min max untuk TOKO X yang sesuai di output.
 * 
 * countStatistic merupakan sebuah fungsi yang menerima 1 parameter berupa data yaitu array of object
 * Fungsi ini akan mengolah data sehingga TOKO X bisa mendapatkan data berupa:
 * {
 *    <nama_product>: {
 *      shoppers
 *      totalAmount
 *      minAmount
 *      maxAmount
 *    }
 * }
 * Keterangan:
 * shoppers: list siapa saja yang ingin membeli barang tersebut
 * totalAmount: berapa jumlah barang yang harus disediakan oleh Toko X
 * minAmount: berapa min order
 * maxAmount: berapa max order
 * 
 * RULES:
 *   - Tidak boleh menggunakan built-in function apapun selain .push().
 */

function countStatistic(data) {
    // console.log(data);

    let object = {}

    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
    return object
}

console.log(countStatistic([{
        name: 'Windi',
        product: 'Sepatu Stacattu',
        amount: 2
    },
    {
        name: 'Vanessa',
        product: 'Sepatu Stacattu',
        amount: 3
    },
    {
        name: 'Rani',
        product: 'Sweater Uniklooh',
        amount: 2
    }
]));
// {
//   'Sepatu Stacattu': {
//     shoppers: [ 'Windi', 'Vanessa' ],
//     totalAmount: 5,
//     maxAmount: 3,
//     minAmount: 2
//   },
//   'Sweater Uniklooh': { 
//     shoppers: [ 'Rani' ], 
//     totalAmount: 2, 
//     maxAmount: 2, 
//     minAmount: 2
//   }
// }

// console.log(countStatistic([{
//         name: 'Windi',
//         product: 'Sepatu Stacattu',
//         amount: 8
//     },
//     {
//         name: 'Vanessa',
//         product: 'Sepatu Stacattu',
//         amount: 10
//     },
//     {
//         name: 'Rani',
//         product: 'Sweater Uniklooh',
//         amount: 1
//     },
//     {
//         name: 'Devi',
//         product: 'Baju Zoro',
//         amount: 1
//     },
//     {
//         name: 'Lisa',
//         product: 'Baju Zoro',
//         amount: 1
//     }
// ]));
// {
//   'Sepatu Stacattu': {
//     shoppers: ['Windi', 'Vanessa'],
//     totalAmount: 18,
//     maxAmount: 10,
//     minAmount: 8
//   },
//   'Sweater Uniklooh': {
//     shoppers: ['Rani'],
//     totalAmount: 1,
//     maxAmount: 1,
//     minAmount: 1
//   },
//   'Baju Zoro': {
//     shoppers: ['Devi', 'Lisa'],
//     totalAmount: 2,
//     maxAmount: 1,
//     minAmount: 1
//   }
// }
// console.log(countStatistic([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// {
//   'Sepatu Naiki': {
//     shoppers: ['Windi'],
//     totalAmount: 5,
//     maxAmount: 5,
//     minAmount: 5 }
// }
// console.log(countStatistic([])); // tidak ada pemesanan