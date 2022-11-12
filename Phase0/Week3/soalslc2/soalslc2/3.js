function getPoints(history) {
    let itemPoint = {
        'Moonlight': 120,
        'Goldqueen': 550,
        'Beras Parist': 1200,
        'Minyak Fatma': 2500
    }
    // write your code here
    let result = {};
    let obj = {};
    let totalPoints = 0; // pasing sebagai output dari total point

    for (let i = 0; i < history.length; i++) {
        // console.log(history[i]);
        totalPoints += itemPoint[history[i]];
        if (!obj[history[i]]) {
            obj[history[i]] = 0;
        }
        obj[history[i]]++;
    }
    result = {
        totalPoints: totalPoints,
        belanjaanReport: obj
    }
    return result;
}

function getPrizes(point) {
    // write your code here
    let listPrize = [
        [2000, 'Voucher 10k', 'Sticker', 'Penggaris'],
        [5000, 'Voucher 25k', 'Kinderboy', 'Tissue', 'Piring'],
        [10000, 'Payung', 'Panci']
    ]
    let result = [];

    for (let i = 0; i < listPrize.length; i++) {
        // console.log(listPrize[i]);
        for (let j = 1; j < listPrize[i].length; j++) { // j mulai dari 1 karena kita akan mengambil nama produknya;
            if (listPrize[i][0] <= point) {
                result.push(listPrize[i][j]);
                point -= listPrize[i][0];
            }
        }
    }
    return result;
}

function betamart(pembeli) {
    // write your code here
    if (!pembeli) {
        return 'Tidak ada pembeli yang belanja';
    }
    // mengembalikan nilai dari function getPoint dan mengambil histories sebagai output belanja;

    let point = getPoints(pembeli.histories);
    let prize = getPrizes(point.totalPoints);
    let output = {};

    output = ['name'] = pembeli.name;
    output = ['belanjaanReport'] = point.belanjaanReport;
    output = ['prizes'] = prize;
    return output;
}

console.log(
    betamart({
        name: 'Ilham',
        histories: [
            'Minyak Fatma',
            'Moonlight',
            'Beras Parist',
            'Minyak Fatma',
            'Goldqueen',
            'Beras Parist',
            'Moonlight',
            'Moonlight',
            'Moonlight',
            'Minyak Fatma',
            'Goldqueen',
            'Goldqueen',
            'Minyak Fatma',
            'Beras Parist',
            'Beras Parist',
            'Moonlight',
            'Moonlight',
            'Minyak Fatma',
            'Minyak Fatma'
        ]
    })
)

/*
{
  name: 'Ilham',
  belanjaanReport: { Moonlight: 6, Goldqueen: 4, 'Beras Parist': 4, 'Minyak Fatma': 5 },
  prizes: [ 'Voucher 10k', 'Sticker', 'Penggaris', 'Voucher 25k', 'Kinderboy' ]
}
*/

// console.log(
//     betamart({
//         name: 'Kosasih',
//         histories: [
//             'Moonlight',
//             'Moonlight',
//             'Goldqueen',
//             'Moonlight',
//             'Minyak Fatma',
//             'Goldqueen',
//             'Beras Parist',
//             'Beras Parist',
//             'Beras Parist',
//             'Moonlight',
//             'Minyak Fatma',
//             'Minyak Fatma',
//             'Moonlight',
//             'Goldqueen',
//             'Goldqueen',
//             'Goldqueen',
//             'Beras Parist',
//             'Moonlight',
//             'Moonlight',
//             'Beras Parist',
//             'Beras Parist',
//             'Minyak Fatma',
//             'Minyak Fatma',
//             'Goldqueen',
//             'Goldqueen',
//             'Moonlight',
//             'Moonlight',
//             'Moonlight',
//             'Moonlight'
//         ]
//     })
// )

/*
{
  name: 'Kosasih',
  belanjaanReport: { Moonlight: 11, Goldqueen: 7, 'Minyak Fatma': 5, 'Beras Parist': 6 },
  prizes: [
    'Voucher 10k',
    'Sticker',
    'Penggaris',
    'Voucher 25k',
    'Kinderboy',
    'Tissue'
  ]
}
*/

// console.log(betamart());
// Tidak ada pembeli yang belanja