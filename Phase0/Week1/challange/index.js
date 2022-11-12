/*
  Pembelajaran di hacktiv dilaksanakan selama 5 hari dari senin hingga jumat, setiap harinya diadakan lecture di jam 9 dan jam 1.

  Buatlah sebuah program untuk memberitahukan 
  pada hari tertentu apakah ada lecture atau tidak dan 
  pada hari dan jam tertentu apakah lecture sedang berlangsung atau tidak.

  contoh 1:

  input:
  hari = senin
  jam = 9

  output: 
  hari senin ada lecture
  sedang ada lecture yang berlangsung

  contoh 2:

  input:
  hari = sabtu
  jam = 9

  output:
  hari sabtu tidak ada lecture
  tidak ada lecture yang berlangsung

  contoh 3 :

  input:
  hari = kamis
  jam = 4

  output: 
  hari kamis ada lecture
  tidak ada lecture yang berlangsung

*/
// Breakout Room 3
var hari = 'senin';
var jam = 1;

// switch (hari) {
//     case 'senin':
//         console.log("Ada lecture yang berlangung");
//         break;
//     case 'sabtu':
//         console.log("tidak ada lecture yang berlangung");
//     default:
//         console.log("ERORR!")
// }

// if (hari === senin || jam === 1) {
//     console.log("tidak ada lecture yang berlangsung");
//     if(jam === 1)
// } 

var nama = "mufki";
var tinggi = 167;
var umur = 19;
var uang = 50000;

// code here

if (umur < 18) {
    console.log(`Maaf ${nama}, kamu tidak dapat memasuki kawasan ini!`);
} else if (uang < 50000 && tinggi < 166) {
    console.log(`Tinggi kamu kurang ${tinggi} cm dan kamu kurang uang sebanyak ${uang} untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!`);
} else if (uang < 50000 && tinggi >= 166) {
    console.log(`Kamu kurang uang sebanyak ${uang} untuk menaiki wahana favorit, Tapi tenang, kamu dapat menaiki wahana Lontang-Lanting!`);
} else if (uang > 50000 && tinggi > 166) {
    console.log("Tinggi kamu kurang ${tinggi} cm untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Trilili!");
}