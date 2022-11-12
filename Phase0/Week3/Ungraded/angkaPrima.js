/*
(1) Angka Prima

Learning Competencies

Mampu menyelesaikan masalah yang diberikan.
Directions
RESTRICTION Hanya boleh menggunakan built - in function untuk menambahkan atau mengurangi data dalam array, seperti.shift(), .unShift(), .push() dan.pop() dan built - in function untuk mengakses isi dalam object seperti
for..in,
for… of , Object.keys(), dll.

Diberikan sebuah
function angkaPrima yang menerima satu parameter berupa angka.Function akan me -
    return true jika angka tersebut adalah bilangan prima dan false jika angka tersebut bukan bilangan prima.
*/

function angkaPrima(angka) {
    // you can only write your code here!
    for (let i = 2; i < angka; i++) {
        if (angka % i === 0) {
            return false;
        }
    }
    return true;
}

//do not change the code below

console.log(angkaPrima(7));