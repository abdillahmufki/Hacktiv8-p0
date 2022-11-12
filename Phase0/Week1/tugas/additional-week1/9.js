/*
Penjualan Sayur Hasil Panen
Kita diminta untuk membuat program menghitung total penjualan sayur hasil panen. Dimana ada dua jenis sayur yang dijual, yaitu caisim dan pakcoy, dengan harga dasar tertentu, dan total berat tertentu, yang dijual dengan harga jual berbeda-beda ke dua jenis pembeli, yaitu ke warung atau ke restoran.
Jenis Sayur = caisim, pakcoy
Harga Jual Dasar
Caisim = 1000 / kg
Pakcoy = 2000 / kg
Jenis Pembeli = warung, restoran
Apabila dijual ke Warung, maka harga dasar ditambah 10%
Apabila dijual ke Restoran, maka harga dasar ditambah 30%
Proses perhitungannya :
(Harga Jual Dasar + Marjin) x Total Berat Sayur
misalnya Caisim 10kg, dijual ke warung
(1000 + 100) x 10 = 11000
misalnya Pakcoy 10kg, dijual ke restoran
(2000 + 600) x 10 = 26000
Output program diharapkan formatnya seperti di bawah :
Total penjualan sayur [jenisSayur] sebanyak [totalBeratSayur] kilogram ke [jenisPembeli] adalah [totalPenjualan]
Contoh 1 : 
var jenisSayur = 'caisim';
var totalBeratSayur = 10;
var jenisPembeli = 'warung';
output:
Total penjualan sayur caisim sebanyak 10 kilogram ke warung adalah 11000
Contoh 2 :
var jenisSayur = 'caisim';
var totalBeratSayur = 10;
var jenisPembeli = 'restoran';
output:
Total penjualan sayur caisim sebanyak 10 kilogram ke restoran adalah 13000
Contoh 3 :
var jenisSayur = 'pakcoy';
var totalBeratSayur = 10;
var jenisPembeli = 'warung';
output:
Total penjualan sayur pakcoy sebanyak 10 kilogram ke warung adalah 22000
Contoh 4 :
var jenisSayur = 'pakcoy';
var totalBeratSayur = 10;
var jenisPembeli = 'restoran';
output:
Total penjualan sayur pakcoy sebanyak 10 kilogram ke restoran adalah 26000
*/

var jenisSayur = '';
var totalBeratSayur = 0;
var jenisPembeli = '';