function getStartUp(arr) {
    // Write your code here
    let arr1 = [];
    let result = [];
    let str = '';

    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        for (let j = 0; j < arr[i].length + 1; j++) {
            // console.log(arr[i][j]);
            if (arr[i][j] === '-' || arr[i][j] === undefined) {
                arr1.push(str);
                str = '';
            } else {
                str += arr[i][j];
            }
        }
        result.push(arr1);
        arr1 = [];
    }

    let arr2 = [];

    let startupBidangECommerce = '';
    let bidangECommerceCount = Number.MIN_VALUE;

    let startupBidangTourism = '';
    let bidangTourismCount = Number.MIN_VALUE;

    let startupBidangHealthecth = '';
    let bidangHealthecthCount = Number.MIN_VALUE;

    let startupBidangAgrotech = ''
    let bidangAgrotechCount = Number.MIN_VALUE;

    for (let i = 0; i < result.length; i++) {
        // console.log(result[i]);
        if (result[i][1] === 'E') {
            if (bidangECommerceCount < result[i][0].length) {
                bidangECommerceCount = result[i][0].length;
                startupBidangECommerce = result[i][0];
            }
        }
        if (result[i][1] === 'T') {
            if (bidangTourismCount < result[i][0].length) {
                bidangTourismCount = result[i][0].length;
                startupBidangTourism = result[i][0];
            }
        }
        if (result[i][1] === 'H') {
            if (bidangHealthecthCount < result[i][0].length) {
                bidangHealthecthCount = result[i][0].length;
                startupBidangHealthecth = result[i][0];
            }
        }
        if (result[i][1] === 'A') {
            if (bidangAgrotechCount < result[i][0].length) {
                bidangAgrotechCount = result[i][0].length;
                startupBidangAgrotech = result[i][0];
            }
        }
    }
    arr1.push(startupBidangECommerce, startupBidangTourism, startupBidangHealthecth, startupBidangAgrotech);
    return arr1;
}


//Test Case 

console.log(getStartUp(['Bikilipik-E', 'Tikit.cim-T', 'Ilidiktir-H', 'TiniHib-A']))
// [ 'Bikilipik', 'Tikit.cim', 'Ilidiktir', 'TiniHib' ]

// console.log(getStartUp(['Lizidi-E', 'Iirbnb-T', 'TikingSiyir.ci-A', 'PriSihit-H', 'DiktirSihit-H', 'eFishiry-A', 'babaAli-E', 'eMeat-A']))
// // [ 'babaAli', 'Iirbnb', 'DiktirSihit', 'TikingSiyir.ci' ]

// console.log(getStartUp(['Tikipidia-E', 'Triviliki-T', 'Hilidic-H', 'Siyirbix-A', 'Shipee-E', 'Bhinniki-E', 'BleBle.cim-E', 'PigiPigi-T', 'tomazo-A']))
// // [ 'BleBle.cim', 'Triviliki', 'Hilidic', 'Siyirbix' ]

// console.log(getStartUp(['FoGoods-A', 'FoMarts-E', 'Lazora-E', 'eFruit-A', 'FoHealth-H', 'FoTravel-T', 'HaiDoc-H', 'ticket.net-T']))
// // [ 'FoMarts', 'ticket.net', 'FoHealth', 'FoGoods' ]