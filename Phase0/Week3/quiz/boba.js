function beliTermurah(toBuy) {
    let sellers = [{
            seller: "BobaFett",
            items: [{
                    name: "Fett Drink",
                    price: 30000
                },
                {
                    name: "Dragon Boba Juice",
                    price: 40000
                },
                {
                    name: "Star Big Boba",
                    price: 25000
                },
            ],
            discount: 0.15,
        },
        {
            seller: "BobaFest",
            items: [{
                    name: "Fett Drink",
                    price: 30000
                },
                {
                    name: "Dragon Boba Juice",
                    price: 40000
                },
                {
                    name: "Star Big Boba",
                    price: 25000
                },
            ],
            discount: 0.35,
        },
        {
            seller: "ChaTime",
            items: [{
                    name: "Fett Drink",
                    price: 18000
                },
                {
                    name: "Dragon Boba Juice",
                    price: 24000
                },
                {
                    name: "Star Big Boba",
                    price: 21000
                },
            ],
            discount: 0.1,
        },
        {
            seller: "Kokumi",
            items: [{
                    name: "Fett Drink",
                    price: 32000
                },
                {
                    name: "Dragon Boba Juice",
                    price: 42000
                },
                {
                    name: "Star Big Boba",
                    price: 27000
                },
            ],
            discount: 0.4,
        },
    ];
    let harga = 0;
    let toko = ''
    let minimum = Infinity
    for (let i = 0; i < sellers.length; i++)
        for (let j = 0; j < sellers[i].items.length; j++) {
            if (toBuy === sellers[i].items[j].name) {
                harga = sellers[i].items[j].price - (sellers[i].items[j].price * sellers[i].discount)
            }
            if (harga < minimum) {
                minimum = harga

            }
            //console.log(harga)
            toko = sellers[i].seller
        }
    return `${toBuy} bisa dibeli dengan harga paling murah ${harga} di ${toko}`
}