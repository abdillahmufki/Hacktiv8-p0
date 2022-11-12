/*
age: dengan tipe data number 
canSwim: dengan tipe data boolean 
haveLicense: dengan tipe data boolean


Syarat dan ketentuan seseorang agar dapat melakukan diving / snorkling adalah:

    Harus berumur 10 tahun keatas agar bisa snorkling 
    Harus bisa berenang 
    Harus berumur di atas 15 tahun dan mempunyai license agar bisa diving 
    Jika berumur diatas 15 tahun namun tidak mempunyai license, maka diving harus di temani oleh buddy.
*/

let age = 19;
let canSwim = true;
let haveLicense = true;

if (age < 10) {
    console.log('Mohon maaf, kamu belum cukup umur!');
} else if (age >= 10 && age <= 15) {
    if (!canSwim) {
        console.log('Mohon maaf, kamu tidak bisa berenang!');
    } else {
        console.log(`Selamat dengan umur ${age} tahun, Kamu sudah bisa menikmati keindahan laut dengan snorkling`);
    }
} else if (age > 15) {
    if (!canSwim) {
        console.log('Mohon maaf, kamu tidak bisa berenang!');
    } else {
        if (haveLicense) {
            console.log(`Selamat dengan umur ${age} tahun, Kamu sudah bisa menikmati keindahan laut dengan diving`);
        } else {
            console.log(`Selamat dengan umur ${age} tahun, Kamu sudah bisa menikmati keindahan laut dengan diving, dan ditemani oleh buddy`);
        }
    }
}