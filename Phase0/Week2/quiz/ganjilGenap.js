let input = '123;5343;8686;324;1233';

function ganjilGenap(plat) {
    //   your code here
    let arr = []
    let temp = '';
    let countGanjil = 0;
    let countGenap = 0;
    for (let i = 0; i <= plat.length; i++) {
        if (plat[i] === ';' || plat[i] === undefined) {
            arr.push(temp)
            temp = ''
        } else {
            temp += plat[i]
        }
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] % 2 === 0) {
            countGenap++
        } else {
            countGanjil++
        }
    }
    if (countGenap === 0) {
        return `plat ganjil sebanyak ${countGanjil} dan plat genap tidak ditemukan`
    } else if (countGanjil === 0) {
        return `plat genap sebanyak ${countGenap} dan plat ganjil tidak ditemukan`
    } else {
        return `plat genap sebanyak ${countGenap} dan plat ganjil sebanyak ${countGanjil}`
    }
}
//do not change the code below

console.log(ganjilGenap(input));