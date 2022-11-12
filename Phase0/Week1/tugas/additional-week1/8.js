/**
 * Ada sebuah Kerajaan yang sedang diserang oleh Penyihir, Kerajaan tersebut menyewa kalian
 * untuk membangun sebuah tembok yang tingginya melebihi batas dari para Penyihir tersebut terbang.
 * Temboknya harus dibikin selang - seling dengan material batu - bata @, besi # dan dibagian
 * paling atas ada menara ! untuk Pemanah. Contoh:
 *
 * batasTerbang = 4
 *
 * @@@@
 * ####
 * @@@@
 * ####
 * !!!!
 *
 * batasTerbang = 5
 *
 * @@@@@
 * #####
 * @@@@@
 * #####
 * @@@@@
 * !!!!!
 *
 * batasTerbang = 6
 *
 * @@@@@@
 * ######
 * @@@@@@
 * ######
 * @@@@@@
 * ######
 * !!!!!!
 */
let batasTerbang = 5;
let bata = '@';
for (let i = 0; i < batasTerbang; i++) {
    let line = '';
    for (let j = 0; j < batasTerbang; j++) {
        if (i % 2 == 1 && batasTerbang != i) {
            line += '#';
        } else if (i % 2 == 0 && batasTerbang != i) {
            line += '@';
        } else {
            line += '!';
        }
    }
    console.log(line);
}