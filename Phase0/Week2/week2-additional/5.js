/*
    ============
    PAIR PROJECT
    ============
    [INSTRUCTION]
    saat nya phase 0 mengerjakan project secara pair ( berpasangan / berdua ).
    dalam pembagian kelompok student, ada kriteria yang harus dipenuhi yaitu
    setiap kelompok yang dipasangkan harus memiliki huruf depan ( inisial ) yang
    BERBEDA.
    pada kelas ini , jumlahnya selalu genap dan murid yang memiliki inisial yang sama
    tidak lebih dari 2 orang
    [EXAMPLE]
      input : ["Afifah", "Bayu", "Juminten", "Junaedi", "Iqbal", "Marimar""]
      output : ["Afifah dan Bayu", "Juminten dan Iqbal", "Junaedi dan Marimar"]
    [NOTES] :
    - jika murid berjumlah ganjil output : "Jumlah murid harus genap"
    - murid dengan inisial yang sama maksimal hanya 2 orang
    [RULE]
    - dilarang menggunakan build in function 'match', 'indexOf', 'search', 'includes'
*/

function pairProject(students) {
    // your code here 
}

console.log(pairProject(["Acong", "Afifah", "Charlie", "Samuel", "Daniel", "Wika", "Wiwin", "Mimin", "Rindu", "Semmi"]))
// [ 
//   'Acong dan Charlie',
//   'Afifah dan Samuel',
//   'Daniel dan Wika',
//   'Wiwin dan Mimin',
//   'Rindu dan Semmi' 
// ]

console.log(pairProject(["Afifah", "Bayu", "Juminten", "Junaedi", "Iqbal", "Marimar"]))
// ["Afifah dan Bayu", "Juminten dan Iqbal", "Junaedi dan Marimar"]

console.log(pairProject(["Afifah", "Bayu", "Juminten"]))
// jumlah murid harus genap
