/**
 * GENERAL WAREHOUSE
 * =================
 * 
 * Terdapat function generalWarehouse yang menerima 2 parameter sebagai berikut:
 *   - cap   : Kapasitas penampungan gudang.
 *   - items : Array multidimensi dengan format seperti di bawah.
 *     [
 *       [<nama_item>, <space_gudang_yang_dibutuhkan>],
 *       [<nama_item>, <space_gudang_yang_dibutuhkan>],
 *       ...
 *       [<nama_item>, <space_gudang_yang_dibutuhkan>],
 *     ]
 * 
 * Berdasarkan dua parameter tersebut, function akan memberikan nilai kembalian berupa string dengan format berikut.
 *   Total Space: <kapasitas_penampungan_gudang>, Used Space: <kapasitas_gudang_yang_telah_digunakan>, Free Space: <kapasitas_gudang_yang_belum_digunakan>
 * 
 * Apabila kapasitas penampungan gudang kurang untuk menampung semua item, maka function akan memberikan nilai kembalian:
 *   "Error: Overcapacity!"
 * 
 * Contoh 1:
 *   - cap: 100
 *   - items: [
 *       ["Proyektor", 10],
 *       ["Lemari", 10],
 *       ["Kertas HVS", 10],
 *       ["Kursi", 10],
 *       ["Meja", 10],
 *       ["Tempat pensil", 10]
 *     ]
 *   - Output: Total Space: 100, Used Space: 60, Free Space: 40
 * 
 * Contoh 2:
 *   - cap: 10
 *   - items: [
 *       ["Proyektor", 10],
 *       ["Lemari", 10]
 *     ]
 *   - Output: "Error: Overcapacity!"
 * 
 * RULES:
 *   - Dilarang menggunakan built-in function apapun selain push().
 */

 function generalWarehouse(cap, items) {
    // Your code here
  }
  
  console.log(generalWarehouse(100, [
    ["Proyektor", 10],
    ["Lemari", 10],
    ["Kertas HVS", 10],
    ["Kursi", 10],
    ["Meja", 10],
    ["Tempat pensil", 10]
  ]));
  // Total Space: 100, Used Space: 60, Free Space: 40
  
  console.log(generalWarehouse(10, [
    ["Proyektor", 10],
    ["Lemari", 10]
  ]));
  // Error: Overcapacity!
  
  console.log(generalWarehouse(10, []));
  // Total Space: 10, Used Space: 0, Free Space: 10