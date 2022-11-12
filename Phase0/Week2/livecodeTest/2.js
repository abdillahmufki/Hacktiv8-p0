/*
Sebuah sekte rahasia Klumisonry mengadakan pertemuan rahasia tahunan.Untuk dapat memasuki tempat pertemuan para 
anggotanya diharuskan memperlihatkan id mereka. Setiap id ini memiliki informasi yang menunjukan status anggota tersebut di sekte.
Informasi ini dapat dilihat dari 2 huruf khusus yang terdapat pada id.

Penentuan status dan years didapatkan dari id anggota dengan ketentuan:

-Penempatan code status dalam string id anggota ditempatkan secara acak, 
-Apabila dalam string id anggota terdapat huruf R, maka status adalah anggota biasa, 
-Apabila dalam string id anggota terdapat huruf S, maka status adalah pengurus sekte, 
-Jumlah huruf kapital(S atau R) pada id menunjukan berapa tahun seseorang itu berada pada statusnya saat ini 
-Untuk anggota biasa yang sudah menjalani keanggotaan selama 5 tahun ke atas, berhak mendapatkan medali gold 
-Untuk pengurus sekte yang sudah menjalani keanggotaan selama 3 tahun ke atas, berhak mendapatkan medali platinum

*/

let nama = 'asep';
let id = 'kljsdklSlkjkjSjdSS';

let statusAnggota = '';
let yearsLama = 0;
let medal = '';

for (let i = 0; i < id.length; i++) {
    if (id[i] === 'R') {
        statusAnggota = 'anggota biasa';
    } else if (id[i] === 'S') {
        statusAnggota = 'pengurus sekte';
        yearsLama++;
    } else if (statusAnggota === 'anggota biasa') {
        if (yearsLama >= 5) {
            medal = 'gold';
        }
    } else if (statusAnggota === 'pengurus sekte') {
        if (yearsLama >= 3) {
            medal = 'platinum';
        }
    }
}

if (medal === '') {
    console.log(`${nama} sudah menjadi ${statusAnggota} selama ${yearsLama} tahun`);
} else {
    console.log(`${nama} sudah menjadi ${statusAnggota} selama ${yearsLama} tahun dan berhak mendapatkan mendali ${medal}`);
}