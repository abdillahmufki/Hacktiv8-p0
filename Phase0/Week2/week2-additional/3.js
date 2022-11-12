/**
 * GET COORDINATES
 * ===============
 * fungsi getCoordinates adalah sebuah fungsi untuk mendapatkan koordinat
 * dari setiap titik "x". Output yang dikembalikan pada fungsi ini adalah
 * sebuah array dengan koordinat dengan format "<huruf><angka>" pada board.
 * 
 * EXAMPLE:
 * Input:
 * [
 *  [" ", "A", "B", "C"],
 *  ["1", " ", "x", " "],
 *  ["2", " ", " ", " "],
 *  ["3", "x", " ", " "],
 * ]
 * Output : ["B1", "A3"]
 * 
 * RULES :
 * - Dilarang menggunakan built-in function selain .push
*/

function getCoordinates(arr) {
    // code below here
}

var array = [
    [" ", "A", "B", "C", "D"],
    ["1", " ", " ", "x", " "],
    ["2", " ", "x", " ", " "],
    ["3", " ", " ", " ", "x"],
    ["4", " ", " ", "x", " "],
]
console.log(getCoordinates(array))
// [ 'C1', 'B2', 'D3', 'C4' ]
var array2 = [
    [" ", "A", "B", "C"],
    ["1", "x", " ", "x"],
    ["2", " ", "x", " "],
    ["3", "x", " ", "x"],
]
console.log(getCoordinates(array2))
// [ 'A1', 'C1', 'B2', 'A3', 'C3' ]