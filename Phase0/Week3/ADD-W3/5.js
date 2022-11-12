/*
===========================
GUILD RAID GROUPING FILTER
===========================
guildRaidFilter adalah sebuah function yang menerima 2 parameter members dan req
  - members merupakan sebuah array of object yang berisi anggota guild
  - req adalah sebuah object dengan minimal power yang dibutuhkan dan job yang dibutuhkan
Output dari function ini adalah sebuah object of array, dimana keyName object utama berdasarkan
job-nya kemudian berisikan data total power dari anggota guild dan anggota-anggota guild yang
memenuhi requirement power yang diminta.
NOTE:
- Jika job yang dicari tidak terdapat pada data guild, maka tidak perlu ditampilkan didalam output
- totalPower didapatkan dari jumlah power dari para heroes dengan job yang sama yang memenuhi minPower
==CONTOH==
INPUT:
guild = [
    { name: 'Kirito', job: 'Swordman', power: 10000 },
    { name: 'Dazzle', job: 'Cleric', power: 8000 },
    { name: 'Xin', job: 'Mage', power: 8000 },
    { name: 'Sinon', job: 'Archer', power: 11000 },
    { name: 'Asuna', job: 'Swordman', power: 5800 },
    { name: 'Razzil', job: 'Merchant', power: 9000 },
    { name: 'Darkbrew', job: 'Merchant', power: 9999 },
    { name: 'Wizz', job: 'Blacksmith', power: 9000 },
    { name: 'Alice', job: 'Swordman', power: 3000 }
];
power = 5800
jobs = ['Swordman', 'Mage']
OUTPUT :
{
  Swordman: {
    totalPower: 15800, ----> di dapat dari power kirito + power asuna (total power heroes)
    heroes: [ 'Kirito', 'Asuna' ]
  },
  Mage: {
    totalPower: 8000,
    heroes: [ 'Xin' ]
  }
}
*/

function guildRaidGroupingFilter(members, req) {
    // YOUR CODE HERE
}
  
let guild = [
  { name: 'Kirito', job: 'Swordman', power: 10000 },
  { name: 'Dazzle', job: 'Cleric', power: 8000 },
  { name: 'Xin', job: 'Mage', power: 8000 },
  { name: 'Sinon', job: 'Archer', power: 11000 },
  { name: 'Asuna', job: 'Swordman', power: 5800 },
  { name: 'Razzil', job: 'Merchant', power: 9000 },
  { name: 'Darkbrew', job: 'Merchant', power: 9999 },
  { name: 'Wizz', job: 'Blacksmith', power: 9000 },
  { name: 'Alice', job: 'Swordman', power: 3000 }
]

console.log(guildRaidGroupingFilter(guild, { minPower: 7000, jobs: ['Swordman', 'Mage'] }))
// {
//   Swordman: {
//     totalPower: 10000,
//     heroes: [ 'Kirito' ]
//   },
//   Mage: {
//     totalPower: 8000,
//     heroes: [ 'Xin' ]
//   }
// }

console.log(guildRaidGroupingFilter(guild, { minPower: 5800, jobs: ['Swordman', 'Mage'] }))
// {
//   Swordman: {
//     totalPower: 15800,
//     heroes: [ 'Kirito', 'Asuna' ]
//   },
//   Mage: {
//     totalPower: 8000,
//     heroes: [ 'Xin' ]
//   }
// }

console.log(guildRaidGroupingFilter(guild, { minPower: 7000, jobs: ['Carpenter', 'Archer', 'Merchant'] }))
// {
//   Archer: {
//     totalPower: 11000,
//     heroes: [ 'Sinon' ]
//   },
//   Merchant: {
//     totalPower: 18999,
//     heroes: [ 'Razzil', 'Darkbrew' ]
//   }
// }
  