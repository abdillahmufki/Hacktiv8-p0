//instructions
//temukan masalah pada program

var nama = "Fajrin";
var tinggi = 180;
var uang = 20000;
var umur = 20;
if (umur < 18) {
    console.log("Maaf " + nama + ", kamu tidak dapat memasuki kawasan ini!");
} else if (uang < 50000) {
    if (tinggi < 166) {
        console.log("Tinggi kamu kurang " + (166 - tinggi) + "cm dan kamu kurang uang sebanyak " + (50000 - uang) + " untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!");
    } else {
        console.log("Kamu kurang uang sebanyak " + (50000 - uang) + " untuk menaiki wahana favorit, Tapi tenang, kamu dapat menaiki wahana Lontang-Lanting!"); // Kurang operator pengurangan
    }
} else {
    if (tinggi < 166) {
        console.log("Tinggi kamu kurang " + (166 - tinggi) + "cm untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Trilili!");
    } else {
        console.log("Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-Kacir!");
    }
}

//expected output
//Kamu kurang uang sebanyak 30000 untuk menaiki wahana favorit, Tapi tenang, kamu dapat menaiki wahana Lontang-Lanting!