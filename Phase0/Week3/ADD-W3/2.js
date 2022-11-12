/*
=============
Report Selling
=============
reportSelling adalah sebuah function yang membuat laporan penjualan dari tiap brand yang ada di toko. 
Input dari reportSelling adalah arrray of object berupa list pembeli yang memiliki informasi name, brand, dan qty (quantity dari barang yang dibeli)
Input memiliki format berikut :
[
  {name: <String>, brand: <String>, qty: <Number>},
  {name: <String>, brand: <String>, qty: <Number>},
  {name: <String>, brand: <String>, qty: <Number>},
  {name: <String>, brand: <String>, qty: <Number>}
]
Laporan perbrand memiliki data berikut :
customers : Array, list nama customer yang membeli produk tersebut 
sum : Number, total barang yang di beli
max : Number, jumlah terbesar yang pernah di beli oleh 1 customer
min : Number, jumlah terkecil yang pernah di beli oleh 1 customer
avg : Number, rata-rata jumlah barang di beli perorang 
Output dari reportSelling adalah object dengan keyname brand pada input dan value adalah laporan dari brand tersebut
Rules : 
1. DILARANG menggunakan indexOf(), find(), filter()
2. DILARANG menggunakan REGEX
*/

function setAvg(data) {

}

function reportSelling(list) {

}



console.log(reportSelling([
{ name: "Devita", brand: "Nacific", qty: 16 },
{ name: "Ayu", brand: "Sensatia Botanica", qty: 7 },
{ name: "Afi", brand: "Nacific", qty: 8 },
{ name: "Josep", brand: "Wardah", qty: 7 },
{ name: "Hary", brand: "Wardah", qty: 9 },
{ name: "Semmi", brand: "Sensatia Botanica", qty: 10 },
{ name: "Daniel", brand: "Nacific", qty: 9 },
{ name: "Risan", brand: "Wardah", qty: 5 },
{ name: "Sofyan", brand: "Sensatia Botanica", qty: 7 },
{ name: "Alun", brand: "Sensatia Botanica", qty: 7 }
]));
/*
{
Nacific: {
    customers: [ 'Devita', 'Afi', 'Daniel' ],
    sum: 33,
    max: 16,
    min: 8,
    avg: 11
},
'Sensatia Botanica': {
    customers: [ 'Ayu', 'Semmi', 'Sofyan', 'Alun' ],
    sum: 31,
    max: 10,
    min: 7,
    avg: 7.75
},
Wardah: {
    customers: [ 'Josep', 'Hary', 'Risan' ],
    sum: 21,
    max: 9,
    min: 5,
    avg: 7
}
}
*/


// console.log(reportSelling([
// { name: "Devita", brand: "Nacific", qty: 25 },
// { name: "Semmi", brand: "Nacific", qty: 5 },
// { name: "Ayu", brand: "Sensatia Botanica", qty: 7 },
// { name: "Afi", brand: "Bioderma", qty: 7 }
// ]));
/*
{
Nacific: {
    customers: [ 'Devita', 'Semmi' ],
    sum: 30,
    max: 25,
    min: 5,
    avg: 15
},
'Sensatia Botanica': { customers: [ 'Ayu' ], sum: 7, max: 7, min: 7, avg: 7 },
Bioderma: { customers: [ 'Afi' ], sum: 7, max: 7, min: 7, avg: 7 }
}
*/