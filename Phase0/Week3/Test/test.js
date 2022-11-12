/*
K => Karnivora 
H => Herbivora 
O => Omnivora

*/


function getAnimals(arr) {
    // Write your code here
    let result = [];
    let arr1 = [];
    let temp = '';

    // 'hewanJenisKarnivora', 'hewanJenisKarnivora', 'hewanJenisomnivora'
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length + 1; j++) {
            if (arr[i][j] === ':' || !arr[i][j]) {
                result.push(temp);
                temp = '';
            } else {
                temp += arr[i][j];
            }
        }
        arr1.push(result);
        arr1 = [];
    }

    let output = [];
    let karnivoraHewan = '';
    let karnivoraCount = Number.MIN_VALUE;
    let herbivoraHewan = '';
    let herbivoraCount = Number.MIN_VALUE;
    let omnivoraHewan = '';
    let omnivoraCount = Number.MIN_VALUE;

    for (i = 0; i < arr1.length; i++) {
        if (arr1[i][1] === 'K') {
            if (karnivoraCount < arr1[i][0].length) {
                karnivoraCount = arr1[i][0].length;
                karnivoraHewan = arr1[i][0];
            }
        }
        if (arr1[i][1] === 'H') {
            if (herbivoraCount < arr1[i][0].length) {
                herbivoraCount = arr1[i][0].length;
                herbivoraHewan = arr1[i][0];
            }
        }
        if (arr1[i][1] === 'O') {
            if (omnivoraCount < arr1[i][0].length) {
                omnivoraCount = arr1[i][0].length;
                omnivoraHewan = arr1[i][0];
            }
        }
    }
    return output[karnivoraHewan, herbivoraHewan, omnivoraHewan]
}

// don't change this code below
// let input = ['Singa:K', 'Kuda:H', 'Monyet:O'];
// console.log(getAnimals(input));

// console.log(getAnimals(['Singa:K', 'Kuda:H', 'Monyet:O']))['Singa', 'Kuda', 'Monyet'];

console.log(getAnimals(['Macan:K', 'Ayam:O', 'Gajah:H', 'Monyet:O', 'Kerbau:H', 'Musang:O', 'Burung:H', 'Hiu:K']))
// [ 'Macan', 'Kerbau', 'Monyet' ]

// console.log(getAnimals(['Tikus:O', 'Merpati:H', 'Beruang:O', 'Elang:K', 'Perkutut:H', 'Harimau:K']))
// [ 'Harimau', 'Perkutut', 'Beruang' ]