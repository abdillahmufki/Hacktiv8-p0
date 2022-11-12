/**
 * PASANGAN YANG TERTUKAR
 * ======================
 * 
 * Terdapat sebuah array multidimensi yang berisi data pasangan.
 * Namun sayang sekali, beberapa pasangan tersebut tertukar satu sama lain.
 * Buatlah sebuah function tukarPasangan untuk membenarkan pasangan-pasangan yang tertukar tersebut.
 * 
 * Function tukarPasangan akan menerima 2 buah parameter yaitu:
 *   - pairs  : Array multidimensi pasangan
 *   - orders : Array 1 dimensi yang berisi kumpulan angka.
 *              Angka pertama adalah index pasangan yang seharusnya didapatkan oleh orang pertama.
 *              Angka kedua adalah index pasangan yang seharusnya didapatkan oleh orang kedua.
 *              Angka ketiga adalah index pasangan yang seharusnya didapatkan oleh orang ketiga.
 *              dst.
 * 
 * Format dari pairs adalah seperti di bawah:
 *   [
 *     ['<orang-ke-1>', '<pasangan_yang_seharusnya>', '<pasangan_yang_tertukar>'],
 *     ['<orang-ke-2>', '<pasangan_yang_seharusnya>', '<pasangan_yang_tertukar>'],
 *     ...
 *     ['<orang-ke-x>', '<pasangan_yang_seharusnya>', '<pasangan_yang_tertukar>'],
 *   ]
 * 
 * Sebagai contoh:
 *   - pairs  :
 *       [
 *         ['Bayu', '', 'Aming'],
 *         ['Dzakki', '', 'Mimi Peri'],
 *       ]
 *   - orders : [1, 0]
 *   - Penjelasan :
 *       Angka pertama adalah 1. Jadi pasangan yang seharusnya didapatkan oleh orang pertama ('Bayu') adalah 'Mimi Peri'.
 *       Angka kedua adalah 0. Jadi pasangan yang seharusnya didapatkan oleh orang kedua ('Dzakki') adalah 'Aming'.
 *   - Output:
 *       [
 *         ['Bayu', 'Mimi Peri', 'Aming'],
 *         ['Dzakki', 'Aming', 'Mimi Peri']
 *       ]
 * 
 * NOTES: Asumsikan semua argumen yang diberikan saat pemanggilan function adalah valid.
 * RULES: Hanya diperbolehkan menggunakan built-in function .push().
 */

 function tukarPasangan(pairs, orders) {
    // Your code here
  }
  
  console.log(tukarPasangan([
    ['Bayu', '', 'Aming'],
    ['Dzakki', '', 'Mimi Peri'],
  ], [1, 0]));
  // [
  //   [ 'Bayu', 'Mimi Peri', 'Aming' ],
  //   [ 'Dzakki', 'Aming', 'Mimi Peri' ]
  // ]
  
  console.log(tukarPasangan([
    ['Bayu', '', 'Aming'],
    ['Ardi', '', 'Taylor Swift'],
    ['Fiqi', '', 'Lisa'],
    ['Dzakki', '', 'Mimi Peri'],
    ['Josep', '', 'Power Ranger Pink'],
    ['Risan', '', 'Tinky Winky']
  ], [0, 1, 2, 3, 4, 5]));
  // [
  //   [ 'Bayu', 'Aming', 'Aming' ],
  //   [ 'Ardi', 'Taylor Swift', 'Taylor Swift' ],
  //   [ 'Fiqi', 'Lisa', 'Lisa' ],
  //   [ 'Dzakki', 'Mimi Peri', 'Mimi Peri' ],
  //   [ 'Josep', 'Power Ranger Pink', 'Power Ranger Pink' ],
  //   [ 'Risan', 'Tinky Winky', 'Tinky Winky' ]
  // ]
  
  console.log(tukarPasangan([
    ['Bayu', '', 'Aming'],
    ['Ardi', '', 'Taylor Swift'],
    ['Fiqi', '', 'Lisa'],
    ['Dzakki', '', 'Mimi Peri'],
    ['Josep', '', 'Power Ranger Pink'],
    ['Risan', '', 'Tinky Winky']
  ], [5, 4, 3, 2, 1, 0]));
  // [
  //   [ 'Bayu', 'Tinky Winky', 'Aming' ],
  //   [ 'Ardi', 'Power Ranger Pink', 'Taylor Swift' ],
  //   [ 'Fiqi', 'Mimi Peri', 'Lisa' ],
  //   [ 'Dzakki', 'Lisa', 'Mimi Peri' ],
  //   [ 'Josep', 'Taylor Swift', 'Power Ranger Pink' ],
  //   [ 'Risan', 'Aming', 'Tinky Winky' ]
  // ]
  
  console.log(tukarPasangan([
    ['Bayu', '', 'Aming'],
    ['Ardi', '', 'Taylor Swift'],
    ['Fiqi', '', 'Lisa'],
    ['Dzakki', '', 'Mimi Peri'],
    ['Josep', '', 'Power Ranger Pink'],
    ['Risan', '', 'Tinky Winky'],
    ['Bayu', '', 'Chucky'],
    ['Acong', '', 'Anabelle'],
    ['Djoko', '', 'Sub Zero'],
    ['Sitorus', '', 'Shao Kahn'],
    ['Aldo', '', 'Yoona'],
    ['Reynold', '', 'Cloud']
  ], [6, 5, 2, 3, 8, 9, 0, 1, 4, 7, 10, 11]));
  // [
  //   [ 'Bayu', 'Chucky', 'Aming' ],
  //   [ 'Ardi', 'Tinky Winky', 'Taylor Swift' ],
  //   [ 'Fiqi', 'Lisa', 'Lisa' ],
  //   [ 'Dzakki', 'Mimi Peri', 'Mimi Peri' ],
  //   [ 'Josep', 'Sub Zero', 'Power Ranger Pink' ],
  //   [ 'Risan', 'Shao Kahn', 'Tinky Winky' ],
  //   [ 'Bayu', 'Aming', 'Chucky' ],
  //   [ 'Acong', 'Taylor Swift', 'Anabelle' ],
  //   [ 'Djoko', 'Power Ranger Pink', 'Sub Zero' ],
  //   [ 'Sitorus', 'Anabelle', 'Shao Kahn' ],
  //   [ 'Aldo', 'Yoona', 'Yoona' ],
  //   [ 'Reynold', 'Cloud', 'Cloud' ]
  // ]
  