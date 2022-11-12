/**
 * Tuliskan PSEUDOCODE Untuk menyelesaikan kasus berikut:
 *
 * Pada tahun 2020, Sebuah kebun binatang ingin mengganti harga tiketnya. Saat ini, kebun binatang tersebut memiliki HARGA DASAR
 * Rp 10.000. Harga tiket masuk akan disesuaikan dengan umur dari pengunjung tersebut. Kamu diminta untuk membuat program yang akan menghitung
 * harga tiket masuk dari tiap pengunjung. Di program ini nantinya, pengunjung akan menginput NAMA dan TAHUN KELAHIRAN.
 *
 * -Umur < 2 tahun: gratis
 * -Umur 2-10:  Harga dasar
 * -Umur 11-18:  Harga dasar dikalikan 1.5
 * -Umur 19 keatas: Harga dasar dikalikan 2
 * -Jika umurnya diatas 120 tahun ATAU dia kelahiran dibawah tahun 1900, maka tampilkan 'Invalid Age' dan hentikan program.
 *
 * Setelah menghitung harga, maka tampilkan NAMA dan HARGA TIKET dari pengunjung tersebut.

 */

// Your algorithm/pseudocode here
//  STORE tahunKelahiran AS NUMBER WITH ANY VALUE 
//  STORE nama AS STRING WITH ANY VALUE
//  STORE hargaDasar AS 10000
//  STORE tahun AS NUMBER WTIH 2020
//  STORE umur AS tahun SUBRACTION tahunKelahiran

//    
//  IF(umur LESS THAN 2) 
//     DISPLAY gratis
//    ELSE IF (umur GREATHER THAN EQUAL 2 AND AND umur LESS THAN EQUAL 10) 
//      DISPLAY nama + hargaDasar
//    ELSE IF (umur GREATHER THAN EQUAL 11 AND AND umur LESS THAN EQUAL 18)
//      DISPLAY nama + (hargaDasar 	MULTIPLICATION 1.5)
//    ELSE IF (umur GREATHER THAN EQUAL 19)
//      DISPLAY nama + (hargaDasar 	MULTIPLICATION 2)
//    ELSE IF (umur GREATHER THAN EQUAL 120)
//      DISPLAY Invalid Age



let tahunKelahiran = 1999;
let nama = 'abdillah mufki';
let hargaDasar = 10000;
let tahun = 2020;
let umur = tahun - tahunKelahiran;

if (umur < 2) { //Umur < 2 tahun: gratis
    console.log("gratis");
} else if (umur >= 2 && umur <= 10) { // Umur 2-10:  Harga dasar
    console.log(`${nama} ${hargaDasar}`);
} else if (umur >= 11 && umur <= 18) { //Umur 11-18:  Harga dasar dikalikan 1.5
    console.log(`${nama} ${hargaDasar * 1.5}`);
} else if (umur >= 19) { // Umur 19 keatas: Harga dasar dikalikan 2
    console.log(`${nama} ${hargaDasar * 2}`);
} else if (umur >= 120) {
    console.log(`${nama} ${'Invalid Age'}`);
}