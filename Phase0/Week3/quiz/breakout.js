/*
===
Battle Stats
===
Diberikan array 2 dimensi yang merupakan rangkuman hasil dari pertempuran 2 kelompok pasukan. Di tiap pasukan, terdapat pasukan-pasukan kecil yang dipimpin oleh Jendralnya masing-masing.

Jika angka Jendral positif, maka di sebuah pertempuran, pasukan Jendral tersebut menang sebanyak angka tersebut
Jika angka Jendral negatif, maka di sebuah pertempuran, pasukan Jendral tersebut kalah sebanyak angka tersebut

Tugas kamu untuk mengeluarkan statistik hasil pertempuran seperti contoh

Contoh :
[
  ["Hwang Shi Mok", -1],
  ["Savants", 1],
  ["Hwang Shi Mok", 2],
  ["Hwang Shi Mok", 1],
  ["Savants", 5],
  ["Legolas", 10],
  ["Legolas", -20],
  ["Legolas", -10],
]


Output :
{
  "Hwang Shi Mok": {
    "Kalah": 1,
    "Menang": 3
  },
  "Savants": {
    "Kalah": 0,
    "Menang": 6
  },
  "Legolas": {
    "Kalah": 30,
    "Menang": 10
  },
}

*/

let battleStats = function (arr) {
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);

        const keys = arr[i][0];
        const total = arr[i][1];

        if (!obj[keys]) {
            obj[keys] = {
                kalah: 0,
                menang: 0
            }
        }
        if (total > 0) {
            obj[keys].menang += total
        } else {
            obj[keys].kalah -= total;
        }
    }
    return obj;
}

let battle = [
    ["Hwang Shi Mok", -1],
    ["Savants", 1],
    ["Hwang Shi Mok", 2],
    ["Hwang Shi Mok", 1],
    ["Savants", 5],
    ["Legolas", 10],
    ["Legolas", -20],
    ["Legolas", -10],
]


console.log(battleStats(battle))