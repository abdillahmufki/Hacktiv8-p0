/* 
Mampu memecahkan masalah yang diberikan Mampu menggabungkan konsep looping / iteration dan
conditional didalam sebuah masalah Mampu mengubah / 
convert tipe data string ke number ataupun sebaliknya Mampu membedakan penggunaan
while dan for Mampu memberhentikan sebuah loop menggunakan
break
Directions
Diberikan sebuah variabel angka bertipe number.

Buatlah program yang menampilkan angka palindrome selanjutnya dari angka yang diberikan.
Contoh jika angka bernilai 27 maka outputnya adalah 33 karena angka 33 merupakan angka palindrome.

penjelasan:

    setelah angka 27, adalah:

    28 bukan angka palindrome.karena belum mendapatkan angka palindrome maka ditambahkan lagi 
    29 bukan angka palindrome.karena belum mendapatkan angka palindrome maka ditambahkan lagi 
    30 bukan angka palindrome.karena belum mendapatkan angka palindrome maka ditambahkan lagi 
    31 bukan angka palindrome.karena belum mendapatkan angka palindrome maka ditambahkan lagi 
    32 bukan angka palindrome.karena belum mendapatkan angka palindrome maka ditambahkan lagi 
    33 angka palindrome.Karena angka palindrome telah ditemukan maka loop harus berhenti dan menampilkan angka 33

    //Algoritma



*/
let angka = 175;
while (angka >= 0) {
    if (angka < 10) {
        console.log(angka + 1);
        break;
    } else {
        angka++;
        let stringAngka = String(angka);
        if (stringAngka[0] === stringAngka[(stringAngka.length) - 1]) {
            console.log(angka);
            break;
        }
    }
}