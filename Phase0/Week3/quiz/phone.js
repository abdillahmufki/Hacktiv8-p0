let groupByCategory = function (array) {
    let result = {};

    for (let i = 0; i < array.length; i++) {
        // console.log(array[i]);
        let {
            category,
            brand,
            laptopCode,
            price
        } = array[i];

        if (!result[array[i].category]) {
            result[category] = {
                totalPrice: 0,
                averagePrice: 0,
                laptop: []
            };
        }
        result[category].totalPrice += price;
        result[category].laptop.push(`${brand} ${laptopCode}`);
        result[category].averagePrice = (result[category].totalPrice / result[category].laptop.length);
    }
    return result;
}

let items = [{
        brand: 'SNSV',
        laptopCode: 'G501JX',
        price: 20000000,
        category: 'gaming'
    },
    {
        brand: 'SNSV',
        laptopCode: 'GL752VW',
        price: 25000000,
        category: 'gaming'
    },
    {
        brand: 'LoveMe',
        laptopCode: 'Legion 4',
        price: 15000000,
        category: 'gaming'
    },
    {
        brand: 'LoveMe',
        laptopCode: 'Legion 6',
        price: 23000000,
        category: 'gaming'
    },
    {
        brand: 'SNSV',
        laptopCode: 'jenbuk ux421',
        price: 12000000,
        category: 'business'
    },
    {
        brand: 'Pear',
        laptopCode: 'mekbuk pro m99',
        price: 38000000,
        category: 'business'
    },
    {
        brand: 'LoveMe',
        laptopCode: 'gaya 9i',
        price: 28000000,
        category: 'business'
    },
    {
        brand: 'nyangsang',
        laptopCode: 'Galaksi book',
        price: 30000000,
        category: 'business'
    },
]

console.log(groupByCategory(items))
/*
  totalPrice = number
  average price = number
  laptop = contoh [SNSV pipobuk k521, PH papiliun dk14xxx]
  expected output
  {
    gaming: {
      totalPrice: 83000000,
      averagePrice: 20750000,
      laptop: [
        'SNSV G501JX',
        'SNSV GL752VW',
        'LoveMe Legion 4',
        'LoveMe Legion 6'
      ]
    },
    business: {
      totalPrice: 108000000,
      averagePrice: 27000000,
      laptop: [
        'SNSV jenbuk ux421',
        'Pear mekbuk pro m99',
        'LoveMe gaya 9i',
        'nyangsang Galaksi book'
      ]
    }
  }
  or output
  ┌──────────┬────────────┬──────────────┬───────────────────────────────────────────────────────────────────────────────────┐
  │ (index)  │ totalPrice │ averagePrice │                                      laptop                                       │
  ├──────────┼────────────┼──────────────┼───────────────────────────────────────────────────────────────────────────────────┤
  │  gaming  │  83000000  │   20750000   │       [ 'SNSV G501JX', 'SNSV GL752VW', 'LoveMe Legion 4', ... 1 more item ]       │
  │ business │ 108000000  │   27000000   │ [ 'SNSV jenbuk ux421', 'Pear mekbuk pro m99', 'LoveMe gaya 9i', ... 1 more item ] │
  └──────────┴────────────┴──────────────┴───────────────────────────────────────────────────────────────────────────────────┘
*/