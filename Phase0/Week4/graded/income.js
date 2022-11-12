function generateIngredients(ingredientsRaw) {
    // Your code here
    let result = [];

    for (var i = 0; i < ingredientsRaw.length; i++) {
        // console.log(ingredientsRaw[i][0]);
        let obj = {
            menu: ingredientsRaw[i][0],
            ratio: ingredientsRaw[i][1],
            ingredients: ingredientsRaw[i][2],
            cost: ingredientsRaw[i][3]
        }
        result.push(obj)
    }
    return result;
}
// const rawData = [
//     ["Bakso Spesial", 20, 6, 130000],
//     ["Mie Ayam Combo", 100, 3, 20000],
//     ["Mia Ayam Spesial", 500, 5, 40000],
// ];
// console.log(generateIngredients(rawData));

//   [
//     {menu: 'Bakso Spesial',ratio: 20,ingredients: 6,cost: 130000 }, 
//     {menu: 'Mie Ayam Combo',ratio: 100,ingredients: 3,cost: 20000},
//     {menu: 'Mie Ayam Spesial',ratio: 500,ingredients: 5,cost: 40000 }
//   ]

function calculateRawCost(ingredientsData) {
    // Your code here
    let result = [];
    let obj = {};

    for (var i = 0; i < ingredientsData.length; i++) {
        // console.log(ingredientsData[i])
        let stock = (ingredientsData[i].ingredients * 1000) / ingredientsData[i].ratio;
        let investment = ingredientsData[i].cost * ingredientsData[i].ingredients;
        let menu = ingredientsData[i].menu;

        obj = {
            menu: menu,
            stock: stock,
            investment: investment
        };

        result.push(obj);
    }
    return result;
}

// console.log(calculateRawCost(
//     [{
//             menu: 'Bakso Spesial',
//             ratio: 20,
//             ingredients: 6,
//             cost: 130000
//         },
//         {
//             menu: 'Mie Ayam Combo',
//             ratio: 100,
//             ingredients: 3,
//             cost: 20000
//         },
//         {
//             menu: 'Mie Ayam Spesial',
//             ratio: 500,
//             ingredients: 5,
//             cost: 40000
//         }
//     ]
// ));
/*
  [
    {menu: 'Bakso Spesial',stock: 300,investment: 780000},
    {menu: 'Mie Ayam Combo',stock: 30,investment: 60000},
    {menu: 'Mie Ayam Spesial',stock: 10,investment: 200000}
  ]
*/

function calculateROI(costData, ordersData) {
    // Your code here
    let result = [];

    for (let i = 0; i < costData.length; i++) {
        // console.log(costData[i]);
        let obj = {
            menu: '',
            stock: costData[i].stock,
            investment: costData[i].investment,
            sales: 0,
            profit: 0,
            roi: ''
        }
        for (let j = 0; j < ordersData.length; j++) {
            // console.log(ordersData[j]);
            if (costData[i].menu === ordersData[j].menuItem) {

                obj.menu = ordersData[j].menuItem;
                let stock = obj.stock - ordersData[j].amount;
                obj.stock = stock;
                obj.investment = costData[i].investment;
                let sales = ordersData[j].price * ordersData[j].amount;
                obj.sales += sales;
                let profit = obj.sales - obj.investment;
                obj.profit = profit;
                let roi = (profit / costData[i].investment) * 100;
                obj.roi = `${(roi.toFixed(2))}%`
            }
        }
        result.push(obj);
    }
    return result;
}

// const orderHistories = [{
//         "menuItem": "Bakso Spesial",
//         "price": 20000,
//         "amount": 260
//     },
//     {
//         "menuItem": "Bakso Spesial",
//         "price": 20000,
//         "amount": 12
//     },
//     {
//         "menuItem": "Mie Ayam Combo",
//         "price": 18000,
//         "amount": 20
//     },
//     {
//         "menuItem": "Mie Ayam Spesial",
//         "price": 12000,
//         "amount": 6
//     }
// ]

// console.log(calculateROI([{
//         menu: 'Bakso Spesial',
//         stock: 300,
//         investment: 780000
//     },
//     {
//         menu: 'Mie Ayam Combo',
//         stock: 30,
//         investment: 60000
//     },
//     {
//         menu: 'Mie Ayam Spesial',
//         stock: 10,
//         investment: 200000
//     }
// ], orderHistories));

/*
  [
  {menu: 'Bakso Spesial',stock: 28,investment: 780000,sales: 5440000,profit: 4660000,roi: '597.44%'},
  {menu: 'Mie Ayam Combo',stock: 10,investment: 60000,sales: 360000,profit: 300000,roi: '500.00%'},
  {menu: 'Mie Ayam Spesial',stock: 4,investment: 200000,sales: 72000,profit: -128000,roi: '-64.00%'}
]
*/

function incomeStatement(rawIngredients, orders) {
    // Your code here
    if (!rawIngredients || !orders) {
        return 'Invalid data';
    } else if (rawIngredients.length === 0 || orders.length === 0) {
        return 'Data is empty'
    }

    let generate = generateIngredients(rawIngredients);
    let calculate = calculateRawCost(generate);
    let hitungRoi = calculateROI(calculate, orders);
    // console.log(hitungRoi);
    return hitungRoi;
}
const rawData = [
    ["Bakso Spesial", 20, 6, 130000],
    ["Mie Ayam Combo", 100, 3, 20000],
    ["Mie Ayam Spesial", 500, 5, 40000],
];

const orderHistories = [{
        "menuItem": "Bakso Spesial",
        "price": 20000,
        "amount": 260
    },
    {
        "menuItem": "Bakso Spesial",
        "price": 20000,
        "amount": 12
    },
    {
        "menuItem": "Mie Ayam Combo",
        "price": 18000,
        "amount": 20
    },
    {
        "menuItem": "Mie Ayam Spesial",
        "price": 12000,
        "amount": 6
    }
];

console.log(incomeStatement());
// Invalid data

console.log(incomeStatement([], []));
// Data is empty

console.log(incomeStatement(rawData, orderHistories));
/*
  [
    {
      menu: 'Bakso Spesial',
      stock: 28,
      investment: 780000,
      sales: 5440000,
      profit: 4660000,
      roi: '597.44%'
    },
    {
      menu: 'Mie Ayam Combo',        
      stock: 10,
      investment: 60000,
      sales: 360000,
      profit: 300000,
      roi: '500.00%'
    },
    {
      menu: 'Mie Ayam Spesial',      
      stock: 4,
      investment: 200000,
      sales: 72000,
      profit: -128000,
      roi: '-64.00%'
    }
  ]
*/