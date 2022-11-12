// INSTRUCTIONS
// In makanSkuy function you can add new criteria
// total sales between 5.000.000 - 9.999.999 and the total point 25-49 the category is OneHalfStar

function mergeOrder(data) {
    // Your code here
    let result = [];
    for (let i = 0; i < data.length; i++) {
        let arr = [];
        for (let j = 0; j < data[i].orders.length; j++) {
            for (let k = 0; k < data[i].orders[j].length; k++) {
                arr.push(data[i].orders[j][k]);
            }
        }
        result.push(arr);
    }
    return result;
}

function calculateTotalSales(data) {
    let priceList = [{
            name: "Burger",
            price: 25000
        },
        {
            name: "Kentang",
            price: 1000
        },
        {
            name: "Ayam",
            price: 17000
        },
        {
            name: "CocaCola",
            price: 7000
        },
        {
            name: "IceCream",
            price: 3000
        },
    ];
    // Your code here
    let result = [];
    for (let i = 0; i < data.length; i++) {
        let total = 0;
        for (let j = 0; j < data[i].length; j += 2) {
            for (let k = 0; k < priceList.length; k++) {
                if (priceList[k].name === data[i][j]) {
                    total += data[i][j + 1] * priceList[k].price;
                }
            }
        }
        result.push(total);
    }
    return result;
}

function calculateTotalVote(data) {
    // Your code here
    let result = [];
    for (let i = 0; i < data.length; i++) {
        result.push(data[i].reviewers * 25 / 100);
    }
    return result;
}

function makanSkuy(data) {
    // Your code here
    if (!data) {
        return 'Invalid Data!';
    }
    if (!data.length) {
        return 'Tidak ada order, order dulu ngab!';
    }
    let merge = mergeOrder(data);
    let sales = calculateTotalSales(merge);
    let votes = calculateTotalVote(data);
    let result = {};
    for (let i = 0; i < data.length; i++) {
        let category = 'OneStar';
        if (sales[i] > 20000000 && votes[i] > 100) {
            category = 'ThreeStars';
        } else if (sales[i] >= 10000000 && votes[i] >= 50) {
            category = 'TwoStars'
        } else if (sales[i] >= 5000000 && votes[i] >= 25) {
            category = 'OneHalfStar'
        }
        if (!result[category]) {
            result[category] = [];
        }
        result[category].push(data[i].restaurant);
    }
    return result;
}

console.log(makanSkuy()); // Invalid Data!
console.log(makanSkuy([])); // Tidak ada order, order dulu ngab!

console.log(
    makanSkuy([{
            restaurant: "MekDun",
            orders: [
                ["Burger", 200],
                ["Kentang", 130],
                ["CocaCola", 400],
                ["IceCream", 186],
            ],
            reviewers: 140,
        },
        {
            restaurant: "Lawmore",
            orders: [
                ["Ayam", 126],
                ["CocaCola", 206],
                ["Burger", 368],
                ["IceCream", 80],
            ],
            reviewers: 260,
        },
        {
            restaurant: "Karl Sr",
            orders: [
                ["Ayam", 65],
                ["CocaCola", 510],
                ["Burger", 699],
                ["Kentang", 274],
            ],
            reviewers: 412
        },
    ])
);


/*
{
  OneHalfStar: [ 'MekDun' ],
  TwoStars: [ 'Lawmore' ],
  ThreeStars: [ 'Karl Sr' ]
}
*/


// console.log(
//     makanSkuy([{
//             "restaurant": "MekDun",
//             "orders": [
//                 ["Burger", 200],
//                 ["Kentang", 130],
//                 ["CocaCola", 400],
//                 ["IceCream", 186]
//             ],
//             "reviewers": 140
//         },
//         {
//             "restaurant": "Lawmore",
//             "orders": [
//                 ["Ayam", 326],
//                 ["CocaCola", 306],
//                 ["Burger", 468],
//                 ["IceCream", 280]
//             ],
//             "reviewers": 460
//         },
//         {
//             "restaurant": "Burger Queen",
//             "orders": [
//                 ["Ayam", 85],
//                 ["CocaCola", 150],
//                 ["Burger", 450],
//                 ["Kentang", 20]
//             ],
//             "reviewers": 80
//         },
//         {
//             "restaurant": "Pendys",
//             "orders": [
//                 ["Ayam", 580],
//                 ["CocaCola", 246],
//                 ["Burger", 366],
//                 ["Kentang", 290]
//             ],
//             "reviewers": 432
//         },
//         {
//             "restaurant": "Karl Sr",
//             "orders": [
//                 ["Ayam", 65],
//                 ["CocaCola", 510],
//                 ["Burger", 699],
//                 ["Kentang", 274]
//             ],
//             "reviewers": 412
//         }
//     ]));

/*
{
    OneHalfStar: [ 'MekDun' ],
    ThreeStars: [ 'Lawmore', 'Pendys', 'Karl Sr' ],
    OneStar: [ 'Burger Queen' ]
}
*/