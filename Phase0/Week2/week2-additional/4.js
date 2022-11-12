/**
 * =============================
 *  Menyusun Telur Dalam Kotak
 * =============================
 * Setelah pulang berbelanja di pasar, kamu diminta untuk
 * menyusun telur yang telah dibeli ke dalam kotak.
 * 
 * Telur yang dibeli ada dalam bentuk 1 kantong (single array).
 * Contohnya untuk 12 telur:
 * [0,0,0,0,0,0,0,0,0,0,0,0]
 * Ada 12 telur "0" dalam satu array
 * 
 * Sedangkan kotak yang di rumah ada dalam bentuk kotak isi 6 telur yang ditumpuk
 * (nested array).
 * Contoh untuk 3 tumpuk kotak kosong (isi max. 18 telur):
 * [
 *  ['','','','','',''],
 *  ['','','','','',''],
 *  ['','','','','',''],
 * ]
 * 
 * kotak harus diisi dari paling bawah ke paling atas.
 * contoh kotak yang sudah diisi 12 telur:
 * [
 *  ['','','','','',''],
 *  [0,0,0,0,0,0],
 *  [0,0,0,0,0,0],
 * ]
 * 
 * buatlah sebuah function yang akan menyortir secara otomatis telur yang sudah dibeli ibu
 * ke dalam kotak kotak yang ditumpuk.
 * 
 * NOTE: Maksimal kotak akan selalu 6 kolom dan 3 baris.
 * 
 * dilarang menggunakan built-in function kecuali push.
 * 
 * Rules: 
 * - DILARANG menggunakan built-in function kecuali push
 */

 function susun(belanjaan) {
    // your code here
}

console.log(susun([0, 0, 0]))
/*
[
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    [0, 0, 0, '', '', '']
]
*/

console.log(susun([0, 0, 0, 0, 0, 0]))
/*
[
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    [0, 0, 0, 0, 0, 0]
]
*/

console.log(susun([0, 0, 0, 0, 0, 0, 0, 0, 0]))
/*
[
    ['', '', '', '', '', ''],
    [0, 0, 0, '', '', ''],
    [0, 0, 0, 0, 0, 0]
]
*/

console.log(susun([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
/*
[
    ['', '', '', '', '', ''],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
]
*/

console.log(susun([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
/*
[
    [0, '', '', '', '', ''],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
]
*/

console.log(susun([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
// Invalid input