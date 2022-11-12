/*
 * =============================
 *  HITUNG NILAI JUAL KENA PAJAK
 * ==============================
 * 
 * Dasar perhitungan NJKP (Nilai Jual Kena Pajak) adalah 20% dari nilai tanah ditambah nilai bangunan. 
 * 
 * Nilai tanah dihitung berdasarkan kategori lokasinya, apakah terletak di desa, pinggiran kota, atau pusat kota dengan perhitungan berikut:
 * 1. Nilai tanah di desa adalah 5.000 dollar per meter persegi.
 * 2. Nilai tanah di pinggiran kota adalah 10.000 dollar per meter persegi.
 * 3. Nilai tanah di pusat kota adalah 20.000 dollar per meter persegi.
 * 
 * Sementara nilai bangunan dihitung berdasarkan jenis bangunannya, apakah merupakan rumah, pertokoan, atau perkantoran.
 * 1. Nilai bangunan rumah adalah 1.000 dollar per meter persegi.
 * 2. Nilai bangunan pertokoan atau perkantoran adalah 2.000 dollar per meter persegi.
 * 
 * CONTOH 1:
 * Diminta menentukan NJKP dari pertokoan seluas 1.000 meter persegi di pusat kota
 * 
 * var lokasiTanah = 'pusat kota'
 * var bangunan = 'pertokoan'
 * var luas = 1000
 * 
 * PROSES:
 * Nilai tanah = 20.000 * 1000 = 20.000.000
 * Nilai bangunan = 2.000 * 1.000 = 2.000.000
 * Total harga = Nilai bangunan + Nilai tanah = 22.000.000
 * NJKP = 20/100 * total harga = 20/100 * 22.000.000 = 4.400.000
 * 
 * OUTPUT:
 * Nilai Jual Kena Pajak adalah 4400000 dollar
 * 
 * CONTOH 2:
 * Diminta menentukan NJKP dari rumah seluas 2000 meter persegi di desa
 * 
 * var lokasiTanah = 'desa'
 * var bangunan = 'rumah'
 * var luas = 2000
 * 
 * PROSES:
 * Nilai bangunan = 1.000 * 2.000 = 2.000.000
 * Nilai tanah = 5.000 * 2.000 = 10.000.000
 * Total harga = Nilai bangunan + Nilai tanah = 12.000.000
 * NJKP = 20/100 * total harga = 20/100 * 12.000.000 = 2.400.000
 * 
 * OUTPUT:
 * Nilai Jual Kena Pajak adalah 2400000 dollar
 * 
 * 
 * RULES:
 * - ASUMSI inputan user selalu benar, tidak pernah ada kasus invalid input
 * - ASUMSI luas tanah dan luas bangunan selalu sama
 * - DILARANG MENGGUNAKAN BUILT IN FUNCTION APAPUN!
 */

var lokasiTanah = 'desa';
var bangunan = 'rumah';
var luas = 1000;

let lokasiDesa = 5000;
let lokasiPinggiranKota = 10000;
let lokasiTengahKota = 20000;

let rumah = 1000;
let kantor = 2000;

nilaiTanah += lokasiTanah * luas;
nilaiBangunan += bangunan * luas;
totalBangunan += nilaiTanah + nilaiBangunan;
njpk += 20 / 100 * totalBangunan;


if (lokasiTanah === desa && bangunan === rumah) {
    console.log(njkp);
}