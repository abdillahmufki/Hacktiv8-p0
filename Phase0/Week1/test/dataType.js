// Jika bertipe data String maka tampilkan 'username' + kata using templete literal `${}`
//jika data sebuah number, maka tampilkan age + data kata using templete literal `${}`
// Jika data bertipe boolean cek nilainya:
//  - jika true maka tampilkan 'thank you agreeing'
//  - jika false maka tampilkan 'cannot proceed without agreement'
// jika nilai/ value dari data adalah angka 0 atau empty string atau undifined atau null dan Nan maka tampilkan invalid data
//DATA TYPE CHALLENGE[OPENCLASS]

let kata = 'stefani';

if (kata === 0 || "" || undefined || null || NaN) {
    console.log("Invalid data");
} else {
    switch (typeof kata) {
        case 'string':
            console.log(`username ${kata}`);
            break;
        case 'number':
            console.log(`age ${kata}`);
            break;
        case 'boolean':
            if (kata === true) {
                console.log('thank you for agreeing');
            } else {
                console.log('cannot proceed without agreement');
            }
            break;
    }
}