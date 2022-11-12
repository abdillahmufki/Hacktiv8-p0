//instructions
//add new condition where candidate's age is 50 or more, and it should print out : 'Dianjurkan untuk tidak memasuki kawasan ini'

var nama = "Fajrin";
var tinggi = 180;
var umur = 50;
var uang = 80000;

if (umur < 18) {
    console.log("Maaf " + nama + ", kamu tidak dapat memasuki kawasan ini!");
} else if (uang < 50000) {
    if (tinggi < 166) {
        console.log("Tinggi kamu kurang " + (166 - tinggi) + "cm dan kamu kurang uang sebanyak " + (50000 - uang) + " untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!");
    } else {
        console.log("Kamu kurang uang sebanyak " + (50000 - uang) + " untuk menaiki wahana favorit, Tapi tenang, kamu dapat menaiki wahana Lontang-Lanting!");
    }
} else if (umur >= 50) {
    console.log("Dianjurkan untuk tidak memasuki kawasan ini");
} else {
    if (tinggi < 166) {
        console.log("Tinggi kamu kurang " + (166 - tinggi) + "cm untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Trilili!");
    } else {
        console.log("Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-Kacir!");
    }
}

//expected output
//Dianjurkan untuk tidak memasuki kawasan ini