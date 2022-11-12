function generateIngredients(ingredientsRaw) {
    // Your code here
    let result = [];

    for (let x = 0; x < ingredientsRaw.length; x++) {
        let [menu, ratio, ingredients, cost] = ingredientsRaw[x]; // ["Bakso Spesial", 20, 6, 130_000]

        let temp = {
            menu,
            ratio,
            ingredients,
            cost
        }

        result.push(temp)
    }

    return result;
} // Selesai

function calculateRawCost(ingredientsData) {
    // Your code here
    let result = [];

    for (let x = 0; x < ingredientsData.length; x++) {
        let {
            menu,
            ratio,
            ingredients,
            cost
        } = ingredientsData[x]; // { menu: "Bakso Spesial", ...}, ...

        let temp = {
            menu,
            stock: (ingredients * 1000) / ratio,
            investment: cost * ingredients
        };

        result.push(temp);
    }

    return result;
} // Selesai

function calculateROI(costData, ordersData) {
    // Your code here
    for (let x = 0; x < costData.length; x++) {
        costData[x].sales = 0;
        for (let y = 0; y < ordersData.length; y++) {
            if (costData[x].menu === ordersData[y].menuItem) {
                if (ordersData[y].amount <= costData[x].stock) {

                    costData[x].stock -= ordersData[y].amount;
                    costData[x].sales += (ordersData[y].price * ordersData[y].amount)
                }
            }
        }

        costData[x].profit = costData[x].sales - costData[x].investment;
        costData[x].roi = ((costData[x].profit / costData[x].investment) * 100).toFixed(2) + "%";
    }

    return costData;
} // Selesai

function incomeStatement(rawIngredients, orders) {
    // Your code here
    if (!rawIngredients || !orders) {
        return "Invalid data";
    }
    if (rawIngredients.length === 0 || orders.length === 0) {
        return "Data is empty";
    }

    let hasilGenIngredient = generateIngredients(rawIngredients);
    let hasilPerhitungan = calculateRawCost(hasilGenIngredient);
    let perhitunganROI = calculateROI(hasilPerhitungan, orders);

    return perhitunganROI;
}

const rawData = [
    ["Bakso Spesial", 20, 6, 130000],
    ["Mie Ayam Combo", 100, 3, 20000],
    ["Mia Ayam Spesial", 500, 5, 40000],
];

const orderHistories = [{
        menuItem: "Bakso Spesial",
        price: 20000,
        amount: 260
    },
    {
        menuItem: "Bakso Spesial",
        price: 20000,
        amount: 12
    },
    {
        menuItem: "Mie Ayam Combo",
        price: 18000,
        amount: 20
    },
    {
        menuItem: "Mia Ayam Spesial",
        price: 12000,
        amount: 6
    },
    {
        menuItem: "Mia Ayam Spesial",
        price: 12000,
        amount: 5
    },
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
    menu: 'Mia Ayam Spesial',      
    stock: 4,
    investment: 200000,
    sales: 72000,
    profit: -128000,
    roi: '-64.00%'
  }
]
*/

// KODE DI BAWAH INI JANGAN DI UBAH!
// module.exports = {
//     generateIngredients,
//     calculateRawCost,
//     calculateROI,
//     incomeStatement,
// };