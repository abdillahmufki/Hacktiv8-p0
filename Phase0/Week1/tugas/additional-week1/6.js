/*
Booking Lapangan Futsal Hacktiv8
Kita diperintahkan untuk membuat sistem dimana dapat menampilkan total harga pemesanan jika masyarakat Indonesia 
ingin memesan lapangan di Lapangan Futsal Hacktvi8.
Lapangan Futsal Hacktiv8 memiliki 2 tipe lapangan dengan harga yg berbeda-beda, yaitu:
1. Lapangan Futsal berbasis rumput sintetis: 
  - Pagi, Siang dan Sore = 100000/jam
  - Malam = 120000/jam
2. Lapangan Futsal berbasis pluran: 
  - Pagi, Siang dan Sore = 120000/jam
  - Malam = 140000/jam
Lapangan Futsal Hacktiv8 juga menyediakan layanan member untuk para pelanggan setia dengan menawarkan promo diskon 20%, 
yang dimana TOTAL harga dari pemesenan akan dikurangi oleh diskon 20% JIKA pelanggan merupakan member.
Pelanggan Member = true / false
Waktu Main = pagi, siang, sore dan malam
Jenis Lapangan = rumput sintetis, pluran
Proses perhitungannya :
Total harga pemesanan lapangan - diskon 20% total harga pemesanan lapangan
misalnya pelanggan member booking 2 jam lapangan pluran di malam hari, maka:
(140000 x 2) - ((140000 x 2) x 20%) = 224000 
Output program diharapkan formatnya seperti di bawah :
Total harga dari [totalJam] jam pemesanan lapangan futsal berbasis [jenisLapangan] di [waktuMain] hari adalah [totalHarga]
Contoh 1 : 
var isMember = true;
var totalJam = 2;
var waktuMain = 'siang';
var jenisLapangan = 'rumput sintetis'
output:
Total harga dari 2 jam pemesanan lapangan futsal berbasis rumput sintetis di siang hari adalah 160000
Contoh 2 :
var isMember = false;
var totalJam = 1;
var waktuMain = 'malam';
var jenisLapangan = 'pluran'
output:
Total harga dari 1 jam pemesanan lapangan futsal berbasis pluran di malam hari adalah 140000
*/

var isMember = false
var totalJam = 0
var waktuMain = ""
var jenisLapangan = ""

// Your code here