/**
 * Sebuah pabrik robot memiliki beberapa jenis robot yang bisa dibuat oleh mereka beserta bahan-bahannya. Informasi ini tersedia di dalam objek
 * yang sudah diberikan di soal. 
 * 
 * Berikut ini katalog robot-robotnya:
 * nama: 'Robot Cop' bahan: 'kevlar','steel'
 * nama: 'Nanobot' bahan: 'protein', 'metal', 'nuclear'
 * nama: 'Robo Duck' bahan: 'rubber', 'metal'
 * nama: 'AI' bahan: 'silicone', 'steel'
 * 
 * Namun pabrik tersebut sedang kekurangan bahan, sehingga mereka tidak bisa membuat semua robot yang ada di katalog mereka pada saat ini.
 * Kalian ditugaskan untuk mengimplementasikan function buildPrototype yang menerima input berupa array berisi bahan-bahan yang sedang tersedia.
 * Lalu, function ini akan mencari robot mana saja yang bisa dibuat berdasarkan bahan-bahan tersebut. 
 * Robot akan dibuat secara berurutan dari prioritas 'Robot Cop' dahulu, berurutan sampai 'AI' paling terakhir (lihatlah katalog/objek yang diberikan).
 * 
 * Jika tidak ada robot yang bisa dibuat dari array materials maka return "Tidak ada robot yang bisa dibuat"
 * Diasumsikan bahwa TIDAK ADA ROBOT YANG BISA DIBUAT DUA KALI ATAU LEBIH dari 'materials'
 * 
 * Rules:
 * - Dilarang menggunakan built-in function selain .push(), tetapi bisa pake slice hanya untuk arnold selain arnold, manual!
 * 
 * 
 */
 function buildPrototype(materials) {

    let input_robots = [
        {name: 'Robot Cop', materials: ['kevlar', 'steel']},
        {name: 'Nanobot', materials: ['protein', 'metal', 'nuclear']},
        {name: 'Robo  Duck', materials: ['rubber', 'metal']},
        {name: 'AI', materials: ['silicone', 'steel']}
    ];

}


console.log(buildPrototype(['steel', 'kevlar', 'steel', 'silicone', 'protein', 'metal' , 'nuclear'])); //[ 'Robot Cop', 'Nanobot', 'AI' ]
console.log(buildPrototype(['steel' ,'nuclear' , 'rubber', 'steel'])); //Tidak ada robot yang bisa dibuat