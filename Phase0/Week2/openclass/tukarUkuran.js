// /*
//  * Logic Challenge - Tukar Besar Kecil
//  * Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string.
//  *  Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan.
//  */

function tukarBesarKecil(kalimat) {
    let hurufKecil = 'abcdefghijklmnopqrstuvwxyz';
    let hurufCapital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let totalDigit = 26;
    let simbol = false;
    let result = '';

    for (let i = 0; i < kalimat.length; i++) {
        // console.log(kalimat[i]);
        let panjangKalimat = kalimat[i];
        for (let j = 0; j < totalDigit; j++) {
            if (panjangKalimat === hurufKecil[j]) {
                result += hurufCapital[j];
                break;
            } else if (panjangKalimat === hurufCapital[j]) {
                result += hurufKecil[j];
                break;
            }
            if (j === totalDigit - 1) {
                simbol = true;
            }
            if (simbol) {
                result += kalimat[i];
                simbol = false;
            }
        }

    }

    return result;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"