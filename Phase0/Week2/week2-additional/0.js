/**
 * =================
 * WordToArrayReverse
 * ==================
 * buatlah sebuah program yang mengconvert string menjadi array, 
 * yang di reverse posisinya berdasarkan per kata 
 * 
 * [RULE]
 * - dilarang menggunakan built-in function kecuali push
 * 
 * [EXAMPLE]
 * wordToArrayReverse("Hello my name is Dimas")
 * output:
 * ["Dimas","is","name","my","Hello"]
 * 
 * Tulislah pseudocode dari code kamu!
 */

function wordToArrayReverse(str) {
    // your code here 
    let temp = '';
    let arr = [];

    for (let i = 0; i <= str.length; i++) {
        // console.log(str.length);
        if (str[i] === ' ' || !str[i]) {
            arr.push(temp);
            temp = '';
        } else {
            temp += str[i];
        }
    }
    console.log(arr.reverse());
}

// Tese Case
wordToArrayReverse("Hello my name is Dimas")
//["Dimas","is","name","my","Hello"]
wordToArrayReverse("Lorem ipsum sit dolor amet")
//["amet","dolor","sit","ipsum","Lorem"]