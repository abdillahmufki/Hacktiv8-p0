function getAnimals(arr) {
  // Write your code here
  let arrTampung = [];
  let result = [];
  let str = '';

  // Lakukan split untuk mendapatakan ['singa:K'] => ['singa', 'K'] dengan melakukan manual split menggunakan for

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    for (let j = 0; j < arr[i].length + 1; j++) {
      if (arr[i][j] === ':' || arr[i][j] === undefined) {
        arrTampung.push(str);
        str = '';
      } else {
        str += arr[i][j];
      }
    }
    result.push(arrTampung);
    arrTampung = [];
  }

  // Untuk membandingkan panjang dari setiap kategori jenis dan kelompok hewan using Number.Min_value;
  let output = [];

  let hewanKarnivora = '';
  let karnivoraCount = Number.MIN_VALUE;

  let hewanHerbivora = '';
  let herbivoraCount = Number.MIN_VALUE;

  let hewanOmnivora = '';
  let omnivoraCount = Number.MIN_VALUE;

  for (let i = 0; i < result.length; i++) {

    if (result[i][1] === 'K') { // Jika result mengandung kode ka maka lakukan perkondisian di bawah;
      if (karnivoraCount < result[i][0].length) {
        karnivoraCount = result[i][0].length;
        hewanKarnivora = result[i][0];
      }
    }
    if (result[i][1] === 'H') { // Jika result mengandung kode ka maka lakukan perkondisian di bawah;
      if (herbivoraCount < result[i][0].length) {
        herbivoraCount = result[i][0].length;
        hewanHerbivora = result[i][0];
      }
    }
    if (result[i][1] === 'O') { // Jika result mengandung kode ka maka lakukan perkondisian di bawah;
      if (omnivoraCount < result[i][0].length) {
        omnivoraCount = result[i][0].length;
        hewanOmnivora = result[i][0];
      }
    }
  }
  // masukan ke dalam array 1 dimensi
  output.push(hewanKarnivora);
  output.push(hewanHerbivora)
  output.push(hewanOmnivora);
  return output;
}

//Test Case 
console.log(getAnimals(['Singa:K', 'Kuda:H', 'Monyet:O']))
// [ 'Singa','Kuda','Monyet' ]

console.log(getAnimals(['Macan:K', 'Ayam:O', 'Gajah:H', 'Monyet:O', 'Kerbau:H', 'Musang:O', 'Burung:H', 'Hiu:K']))
// [ 'Macan', 'Kerbau', 'Monyet' ]

console.log(getAnimals(['Tikus:O', 'Merpati:H', 'Beruang:O', 'Elang:K', 'Perkutut:H', 'Harimau:K']))
// [ 'Harimau', 'Perkutut', 'Beruang' ]