/* Setiap pembelian satu permen karet akan mendapatkan satu tiket dengan kode tertentu.Masing - masing kode akan 
 memberikan kamu point dengan ketentuan berikut:
     >
     Huruf YOMAN = 20 point >
     Karakter spesial!@# $ % ^ & * = 1 point >
     Huruf selain YOMAN = 0 point

    Satu buah permen karet harganya 1000 rupiah.

    Ketentuan hadiah yang didapatkan adalah sebagai berikut

  1.  Total point lebih lebih dari 100 akan mendapatkan hadiah utama
  2. Total point pada rentang 50 sampai 100 akan mendapatkan pleystetion5
  3.  Total point kurang dari 50 akan mendapatkan souvenir permen karet

  Buatlah program untuk menentukan berapa total uang yang dipakai untuk membeli permen karet serta hadiah 
  yang didapat berdasarkan total point.

  Diberikan dua buah variabel randomTickets dan money.Variabel randomTickets bertipe data string dan berisi kombinasi 
  huruf dan karakter spesial.Variabel money bertipe data number dan digunakan untuk mencatat 
  berapa banyak uang yang kamu habiskan untuk membeli permen karet.

     
*/

const randomTickets = 'YOMAN!$#@';
let money = 0;
let spesialChar = '!@#$%^&*';
money = 1000 * randomTickets.length;
let point = 0;

for (let i = 0; i < randomTickets.length; i++) {
  switch (randomTickets[i]) {
    case 'Y':
    case 'O':
    case 'M':
    case 'A':
    case 'N':
      point += 20;
      break;
    default:
      for (let j = 0; j < spesialChar.length; j++) {
        if (randomTickets[i] === spesialChar[j]) {
          point++;
          break;
        }
      }

  }
}
console.log(point);
if (point > 100) {
  console.log(`Kamu menghabiskan uang sejumlah ${money} dan kamu mendapatkan hadiah utama`);
} else if (point >= 50) {
  console.log(`Kamu menghabiskan uang sejumlah ${money} dan kamu mendapatkan playstation5`);
} else {
  console.log(`Kamu menghabiskan uang sejumlah ${money} dan kamu mendapatkan souvenir permen karet`);
}