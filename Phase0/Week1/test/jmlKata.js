let kalimat = 'aing ganteng banget';
let counter = 1;
if (kalimat.length === 0) {
    counter = 0;
} else {
    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[0] === " ") {
            counter = 0;
        } else if (kalimat[i] && kalimat[i] === " ") {
            counter++;
        }
    }
}

console.log(counter);