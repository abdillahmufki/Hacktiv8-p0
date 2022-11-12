/*
========================
RESTAURANT SERI'S CHOICE
========================
Function restaurant memiliki input berupa Array of Objects yaitu 'customers'.
Object ini memiliki value: 
-  name (String)
- bornYear (String)
- studentCard (Boolean)
- orders (Array)
Function akan menghitung biaya pesanan customer dan discount.  
Restaurant ini memiliki promo discount untuk beberapa menu favorite dari korea drama CLOY yang tamat di February tahun ini, 
dan ada additional discount 10% yaitu Promo Pelajar untuk customer membawa kartu pelajar dan berumur 23 tahun atau kurang
additional discount dihitung dari total harga normal. 
Function ini menghasilkan output berupa array of objects, dimana object merupakan struk pembayaran customer dengan format berikut:
{
  name: (String, nama dari customer),
  age: (Number, umur dari customer),
  orders: (Array of String, kumpulan makanan pesanan customer ),
  totalPrice: (Number, total harga makanan yang dipesanan dengan harga normal ),
  totalCloyDisc: (Number, total discount dari harga makanan yang di pesanan),
  additionalDiscount: (Number, discount Promo Pelajar terhadap total harga normal ),
  totalPayment: (Number, total biaya yang harus customer bayar ),
}
RULES:
Dilarang menggunakan built-in function, kecuali:
  .push()
  .toUpperCase() dan .toLowerCase()
  Built-in for Math
  Built-in Informative (.length, isNaN(), isArray(), isInteger)
  Built-in function yang mengubah type data ( string --> number / number --> string )
Asumsikan semua input pada test-case mengikuti batasan format array-of-object yang sudah dijelaskan diatas
*/

function restaurant(customers) {
    var menu = {
        goldenChicken: { price: 200000, discCloy: 0.5 },
        kpubBBQ: { price: 500000, discCloy: 0.4 },
        yaminAsin: { price: 100000, discCloy: 0 },
        yaminManis: { price: 100000, discCloy: 0 },
        ramen: { price: 800000, discCloy: 0.1 }
    }
    // your code here
}


console.log(restaurant([
    {
        name: 'Daniel',
        bornYear: '1925',
        studentCard: true,
        orders: ['yaminManis']
    },
    {
        name: 'Heri',
        bornYear: '1990',
        studentCard: false,
        orders: ['yaminManis', 'ramen']
    }
]))
/*
[
  {
    name: 'Daniel',
    age: 95,
    orders: [ 'yaminManis' ],
    totalPrice: 100000,
    totalCloyDisc: 0,
    additionalDiscount: 0,
    totalPayment: 100000
  },
  {
    name: 'Heri',
    age: 30,
    orders: [ 'yaminManis', 'ramen' ],
    totalPrice: 900000,
    totalCloyDisc: 80000,
    additionalDiscount: 0,
    totalPayment: 820000
  }
] */

console.log(restaurant([{
    name: 'Ayu',
    bornYear: '1999',
    studentCard: true,
    orders: ['goldenChicken', 'kentangGoreng']
},
{
    name: 'Iqbal',
    bornYear: '1997',
    studentCard: false,
    orders: ['yaminAsin']
}]))
/*
[
  {
    name: 'Ayu',
    age: 21,
    orders: [ 'goldenChicken' ],
    totalPrice: 200000,
    totalCloyDisc: 100000,
    additionalDiscount: 20000,
    totalPayment: 80000
  },
  {
    name: 'Iqbal',
    age: 23,
    orders: [ 'yaminAsin' ],
    totalPrice: 100000,
    totalCloyDisc: 0,
    additionalDiscount: 0,
    totalPayment: 100000
  }
] */

console.log(restaurant([{
    name: 'Bagas',
    bornYear: '1995',
    studentCard: true,
    orders: ['goldenChicken', 'ramen']
}]))
/*
[
  {
    name: 'Bagas',
    age: 25,
    orders: [ 'goldenChicken', 'ramen' ],
    totalPrice: 1000000,
    totalCloyDisc: 180000,
    additionalDiscount: 0,
    totalPayment: 820000
  }
]*/