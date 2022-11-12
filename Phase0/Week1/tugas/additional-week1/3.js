/**
 * Instruksi
 *
 * ==========
 * Fix Data
 * ==========
 *
 * Diberikan sebuah string `line`. Isi dari string ini adalah sebuah gabungan dari sembarang
 * karakter. Tugas kamu adalah mengubah karakter yang merupakan virus menjadi konsonan atau vokal sesuai dengan
 * requirement berikut:
 *
 * 1. Jika di dalam 'line' jumlah karakter konsonan lebih banyak dari jumlah karakter vokal, maka ubahlah
 *    semua karakter yang merupakan virus menjadi 'a'.
 * 2. Jika di dalam 'line' jumlah karakter vokal lebih banyak dari jumlah karakter konsonan, maka ubah
 *    semua karakter yang merupakan virus menjadi 'b'.
 * 3. Jika di dalam 'line' jumlah karakter vokal dan konsonan sama, maka hilangkan virusnya jika terdapat virus di dalamnya.
 * 4. Jika tidak ada virus sama sekali, maka line tidak perlu diubah.
 * 5. Program akan menampilkan 'line' yang telah diubah sesuai dengan requirement diatas
 *
 * Berikut ini adalah contoh karakter vokal dan konsonan.
 * Vokal = a i u e o
 * Virus = #
 * Konsonan = selain Vokal & Virus
 * 
 * Ketentuan:
 * -Diberikan variable 'line'
 * -TIDAK BOLEH menggunakan built-in function!
 *
 * 
 * contoh 1:
 *
 * let line = 'abc#ab#ueo'
 *
 * maka output yang diharapkan adalah: 
 * 'abcbabbueo'
 * karena jumlah vokal adalah 5, jumlah konsonan adalah 3. Lalu, untuk kedua virus
 * yang ditemukan, maka semua karakter virus diubah menjadi 'b'.
 *
 *
 * contoh 2:
 *
 *
 * let line = 'abcabdueobbb'
 *
 * Karena tidak terdapat virus, maka output yang diharapkan adalah
 * 'abcabdueobbb'
 * 
 * contoh 3:
 * 
 * let line = 'bcd#aiu'
 * karena jumlah konsonan dan vokal seimbang, maka output yang diharapkan adalah:
 * 'bcdaiu'
 * 
 * 
 *
 */

let line = 'ajsdfjjbcabueo'; //kalian bisa mengubah isi dari 'line' untuk menguji contoh-contoh string yang lainnya
const vokal = 'aiueo';
const konsonan = 'bcdfghjklmpqstvwxyz';
const virus = '#';
let indexVirus = [];
let totalVokal = 0;
let totalKonsonan = 0;

for (let i = 0; i < line.length; i++) {
    for (let j = 0; j < vokal.length; j++) {
        if (line[i] === vokal[j]) {
            totalVokal++;
        }
    }
    for (let k = 0; k < konsonan.length; k++) {
        if (line[i] === konsonan[k]) {
            totalKonsonan++;
        }
    }
    if (line[i] === virus) {
        indexVirus = [...indexVirus, i];
    }
}
let change = '';
if (totalKonsonan > totalVokal) {
    change = 'a';
} else {
    change = 'b';
}
let result = '';
for (let i = 0; i < line.length; i++) {
    let tempLine = line[i]
    for (let j = 0; j < indexVirus.length; j++) {
        if (indexVirus[j] == i) {
            tempLine = change
        }
    }
    result += tempLine;
}
console.log(result);