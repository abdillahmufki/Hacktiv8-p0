/*
====================
Tambah penumpang Bus
====================

[INSTRUCTION]
Terdapat function "tambahPenumpangBus" yang menerima 2 parameter berupa :
  1. array multidimensi yang berisi kondisi penumpang bus yang sudah menaiki bus
  2. array penumpang bus yang ingin menaiki bus
Fungsi ini akan mengembalikan array multidimensi yang sudah terisi oleh semua penumpang jika jumlah bangku yang kosong dan penumpang yang ingin naik pas / sama. (LIHAT EXAMPLE 1)
Sedangkan fungsi ini akan mengembalikan string pesan tidak muat, jika jumlah bangku yang kosong tidak mencukupi. (LIHAT EXAMPLE 2)

[EXAMPLES 1]
Input 1 :
  [
    ['Hary', '', 'Miftah'],
    ['', 'Tony', ''],
    ['Udin', 'Paijo', 'Butet']
  ]
Input 2 : ['Budi', 'Soleh', 'Miku']
Output :
  [
    ['Hary', 'Budi', 'Miftah'],
    ['Soleh', 'Tony', 'Miku'],
    ['Udin', 'Paijo', 'Butet']
  ]
--------------------------------------------
[EXAMPLES 2]
Input 1 :
  [
    ['Udin', '', ''],
    ['', '', 'Dede'],
    ['Saiful', 'Paijo', 'Butet']
  ]
Input 2 : ['Alucard', 'Balmond', 'Eudora', 'Nana', 'Miya', 'Zilong','Layla', 'Grock']
Output :
'Tidak muat.'

*/

function tambahPenumpangBus(penumpangBus, penumpangBaru) {

    let idx = 0;
    for (let i = 0; i < penumpangBus.length; i++) {
        let perBaris = penumpangBus[i];

        for (let j = 0; j < perBaris.length; j++) {
            let perKursi = perBaris[j]

            if (perKursi === '') {
                penumpangBus[i][j] = penumpangBus[idx];
            }
        }

    }
    if (penumpangBaru[idx] !== undefined) {
        return 'Tidak Muat.';
    } else {
        return penumpangBus;
    }
    return penumpangBus;
}

console.log(tambahPenumpangBus([
        ['Hary', '', 'Miftah'],
        ['', 'Tony', ''],
        ['Udin', 'Paijo', 'Butet']
    ],
    ['Budi', 'Soleh', 'Miku']));
/*
[
  ['Hary', 'Budi', 'Miftah'],
  ['Soleh', 'Tony', 'Miku'],
  ['Udin', 'Paijo', 'Butet']
]
*/

console.log(tambahPenumpangBus([
        ['Udin', '', ''],
        ['', '', 'Dede'],
        ['Saiful', 'Paijo', 'Butet']
    ],
    ['Alucard', 'Balmond', 'Eudora', 'Nana', 'Miya', 'Zilong', 'Layla', 'Grock']));
/*
'Tidak muat.'
*/