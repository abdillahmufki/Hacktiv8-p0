/*
  Buatlah dua buah fungsi validateInput dan checkLogin:

  A. Fungsi validateInput bertujuan untuk mengecek input.
    Fungsi ini mempunyai 3 parameter yang bernama username, password dan email.
    Fungsi ini mempunyai kondisi:
    1. Username dan password harus bertipe data string.
    2. Password harus mengandung angka.
    2. Email harus terdapat tanda @.
    3. Jika semua kondisi terpenuhi maka akan menampilkan "Input tervalidasi" dan akan mengembalikan nilai true.
    4. Jika terdapat kondisi yang tidak terpenuhi maka menampilkan "Input salah" dan akan mengembalikan nilai false.

  B. Fungsi checkLogin bertujuan untuk mencocokan input dengan data yang ada.
    Fungsi ini mempunyai 4 parameter yang bernama username, email dan password.
    Fungsi ini mempunyai kondisi:
    1. Jika data username sesuai dengan input username maka akan berlanjut ke tahap 2,
      jika tidak maka tampilkan "username salah". 
    2. Jika email sudah sesuai maka akan berlanjut ke tahap 3,
      jikta tidak maka tampilkan "email salah".
    3. Jika password sudah sesuai maka akan berlanjut ke tahap 4,
      jika tidak maka tampilkan "password salah".
    4. Jika semua benar maka tampilkan "[username] login berhasil".
*/


// Create function validateInput here
function validateInput(username, password, email) {
  if (typeof username !== 'string' && password !== 'string') {
    console.log('Input Salah');
    return false;
  }
  for (var i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      checkEmail = true;
    }
  }
}
if (checkEmail === true && checkPassword === true) {
  console.log('Input tervalidasi');
} else {
  console.log('Input Salah!');
}
}
validateInput('admin', 'password2', 'baba@mail.com');

function validateInput(username, password, email) {
  let checkEmail = false;
  let checkPassword = false;
  if (typeof username === 'string' && typeof password === 'string') {
    for (let j = 0; j < password.length; j++) {
      switch (password[j]) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
          checkPassword = true;
      }
    }
    for (let i = 0; i < email.length; i++) {
      if (email[i] === '@') {
        checkEmail = true;
      }

    }
  }
  if (checkEmail === true && checkPassword === true) {
    console.log('Input Tervalidasi')
  } else {
    console.log('Input Salah')
  }
}
validateInput('admin', 'passwordadmin', 'baba@mail.com')

function checkLogin(username, password, email) {
  let usernameData = "admin"
  let passwordData = "password2"
  let emailData = "baba@mail.com"
  // code here

}

// Tidak boleh diutak atik
// Case 1:
let usernameInput = "admin"
let passwordInput = "password2"
let emailInput = "baba@mail.com"
let isValidate = validateInput(usernameInput, passwordInput, emailInput)
if (isValidate) {
  console.log(checkLogin(usernameInput, passwordInput, emailInput))
}
// OUTPUT: admin login berhasil

// Case 2
let usernameInput2 = "admin"
let passwordInput2 = "passwordadmin"
let emailInput2 = "baba@mail.com"
let isValidate2 = validateInput(usernameInput2, passwordInput2, emailInput2)
if (isValidate2) {
  console.log(checkLogin(usernameInput2, passwordInput2, emailInput2))
}
// OUTPUT: input salah

// Case 3
let usernameInput3 = "admin"
let passwordInput3 = "password29"
let emailInput3 = "baba@mail.com"
let isValidate3 = validateInput(usernameInput3, passwordInput3, emailInput3)
if (isValidate3) {
  console.log(checkLogin(usernameInput3, passwordInput3, emailInput3))
}
// OUTPUT: password salah