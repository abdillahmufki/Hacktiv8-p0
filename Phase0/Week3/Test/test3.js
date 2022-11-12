function getArcadeResult(history) {
    let arcadeTickets = {
        'Circus Ball Drop': 200,
        'Lucky Chicken': 100,
        'Street Basketball': 50,
        'Gold Rush': 20
    }
    // write your code here
    let result = {};
    let obj = {};
    let totalTicket = 0;

    for (let i = 0; i < history.length; i++) {
        // console.log(history[i]);
        if (!obj[history[i]]) {
            obj[history[i]] = 0;
        }
        obj[history[i]]++;
    }
    result = {
        totalTicket: totalTicket,
        gameReport: obj
    }
    return result;
}

function getPrizes(ticket) {
    let listPrize = [
        [200, 'Rautan', 'Pensil', 'Penghapus'],
        [500, 'Tempat Pensil', 'Celengan', 'Buku Tulis', 'Penjepit Rambut'],
        [1000, 'Boneka', 'Tas']
    ];
    // write your code here
    let result = [];

    for (let i = 0; i < listPrize.length; i++) {
        // console.log(listPrize[i]);
        for (let j = 0; j < listPrize[i].length; j++) {
            // console.log(listPrize[i][j]);
            if (listPrize[i][0] <= ticket) {
                result.push(listPrize[i][j]);
                ticket -= listPrize[i][0];
            }
        }
    }
    return result;
}

function gamezone(user) {
    // panggil getArcadeResult dan getPrizes disini
    if (!user) {
        return 'Tidak ada pemain yang bermain';
    }
    let hasil = getArcadeResult(user.history);
    let prize = getPrizes(ticket.totalTicket);

    let result = {};

    result = ['user'] = user.user;
    result = ['gameReport'] = hasil.gameReport;
    result = ['prizes'] = prize;

}
const history = [
    'Circus Ball Drop',
    'Lucky Chicken',
    'Street Basketball',
    'Circus Ball Drop',
    'Lucky Chicken',
    'Street Basketball',
    'Gold Rush',
    'Gold Rush',
    'Gold Rush',
    'Circus Ball Drop',
    'Lucky Chicken',
    'Lucky Chicken',
    'Circus Ball Drop',
    'Street Basketball',
    'Street Basketball',
    'Gold Rush',
    'Gold Rush',
    'Circus Ball Drop',
    'Circus Ball Drop'
]

console.log(getArcadeResult(history))
/**
 * {
 *  totalTicket: 1900,
 *  gameReport: {
 *    'Circus Ball Drop': 6,
 *    'Lucky Chicken': 4,
 *    'Street Basketball': 4,
 *    'Gold Rush': 5
 *  }
 * }
 *
 */
console.log(getPrizes(1900))

console.log(
    gamezone({
        name: 'Ihsan',
        histories: [
            'Circus Ball Drop',
            'Lucky Chicken',
            'Street Basketball',
            'Circus Ball Drop',
            'Lucky Chicken',
            'Street Basketball',
            'Gold Rush',
            'Gold Rush',
            'Gold Rush',
            'Circus Ball Drop',
            'Lucky Chicken',
            'Lucky Chicken',
            'Circus Ball Drop',
            'Street Basketball',
            'Street Basketball',
            'Gold Rush',
            'Gold Rush',
            'Circus Ball Drop',
            'Circus Ball Drop'
        ]
    })
)
/**
{
  name: 'Ihsan',
  gameReport: {
    'Circus Ball Drop': 6,
    'Lucky Chicken': 4,
    'Street Basketball': 4,
    'Gold Rush': 5
  },
  prizes: [ 'Rautan', 'Pensil', 'Penghapus', 'Tempat Pensil', 'Celengan' ]
}
*/