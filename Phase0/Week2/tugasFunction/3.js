/*
    Tugas 3

    Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi satu
    kalimat berikut: 'Nama saya [name], umur saya [age] tahun, alamat saya di [adress], dan saya punya hobby yaitu[hobby]!'

*/

let name = 'Abdillah Mufki';
let age = 21;
let adress = 'Dago Kota Bandung';
let hobby = 'Holliday';

function processSentence(name, age, adress, hobby) {

    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${adress}, dan saya punya hobby yaitu ${hobby}!`
}

let fullSentence = processSentence(name, age, adress, hobby);
console.log(fullSentence);