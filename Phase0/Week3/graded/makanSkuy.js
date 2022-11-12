 function mergeOrder(data) {
     // write your code here
     let result = [];
     let arr1 = [];

     for (let i = 0; i < data.length; i++) {
         let perResto = data[i];
         for (let j = 0; j < perResto.orders.length; j++) {
             //  console.log(data[i].orders[j]);
             for (let k = 0; k < perResto.orders[j].length; k++) {
                 //  console.log(data[i].orders[j][k]);
                 arr1.push(perResto.orders[j][k]);
             }
         }
         result.push(arr1);
         result = [];
     }
     return result;
 }

 console.log(
     mergeOrder([{
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
             restaurant: "Burger Queen",
             orders: [
                 ["Ayam", 85],
                 ["CocaCola", 150],
                 ["Burger", 450],
                 ["Kentang", 20],
             ],
             reviewers: 80,
         },
     ])
 );

 /*
 [
  [
    'Burger',   200,
    'Kentang',  130,
    'CocaCola', 400,
    'IceCream', 186
  ],
  [
    'Ayam',     126,
    'CocaCola', 206,
    'Burger',   368,
    'IceCream', 80
  ],
  [ 'Ayam', 85, 'CocaCola', 150, 'Burger', 450, 'Kentang', 20 ],
 ]
 */

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
         //  console.log(data[i]);
         let perResto = data[i];
         let total = 0;

         for (let j = 0; j < perResto.length; j++) {
             //  console.log(perResto[j]);
             let orderTotal = perResto[j + 1];
             for (let k = 0; k < priceList.length; k++) {
                 //  console.log(priceList[k]);
                 let listHarga = priceList[k];
                 if (perResto[j] === listHarga.name) {
                     total += listHarga.price * orderTotal;
                 }
             }
         }
         result.push(total);
     }
     return result;
 }

 //  console.log(
 //      calculateTotalSales([
 //          ["Burger", 200, "Kentang", 130, "CocaCola", 400, "IceCream", 186],
 //          ["Ayam", 126, "CocaCola", 206, "Burger", 368, "IceCream", 80],
 //          ["Ayam", 85, "CocaCola", 150, "Burger", 450, "Kentang", 20],
 //      ])
 //  );
 //  [8488000, 13024000, 13765000]

 function calculateTotalVote(data) {
     // Your code here
     let result = [];

     for (let i = 0; i < data.length; i++) {
         //  console.log(data[i]);
         result.push((data[i].reviewers * 25) / 100);
     }
     return result;
 }

 //  console.log(
 //      calculateTotalVote([{
 //              restaurant: "MekDun",
 //              orders: [
 //                  ["Burger", 200],
 //                  ["Kentang", 130],
 //                  ["CocaCola", 400],
 //                  ["IceCream", 186],
 //              ],
 //              reviewers: 140,
 //          },
 //          {
 //              restaurant: "Lawmore",
 //              orders: [
 //                  ["Ayam", 126],
 //                  ["CocaCola", 206],
 //                  ["Burger", 368],
 //                  ["IceCream", 80],
 //              ],
 //              reviewers: 260,
 //          },
 //          {
 //              restaurant: "Burger Queen",
 //              orders: [
 //                  ["Ayam", 85],
 //                  ["CocaCola", 150],
 //                  ["Burger", 450],
 //                  ["Kentang", 20],
 //              ],
 //              reviewers: 80,
 //          },
 //      ])
 //  );
 //  // [ 35, 65, 20 ]

 function makanSkuy(data) {
     // Your code here
     if (!data) {
         return 'Invalid Data!';
     } else if (data.length === 0) {
         return 'Tidak ada order, order dulu ngab!'
     }

     let merge = mergeOrder(data);
     let totalSale = calculateTotalSales(merge);
     let vote = calculateTotalVote(data);

     let obj = {};

     for (let i = 0; i < data.length; i++) {
         //  console.log(data[i]);
         if (totalSale[i] > 20000000 && vote[i] > 100) {
             if (!obj.ThreeStars) {
                 obj.ThreeStars = [];
             }
             obj.ThreeStars.push(data[i].restaurant);

         } else if (totalSale[i] >= 10000000 && vote[i] >= 50) {
             if (!obj.TwoStars) {
                 obj.TwoStars = [];
             }
             obj.TwoStars.push(data[i].restaurant);
         } else {
             if (!obj.OneStar) {
                 obj.OneStar = [];
             }
             obj.OneStar.push(data[i].restaurant);
         }
     }
     return obj;
 }

 //  console.log(makanSkuy()); // Invalid Data!
 //  console.log(makanSkuy([])); // Tidak ada order, order dulu ngab!

 //  console.log(
 //      makanSkuy([{
 //              restaurant: "MekDun",
 //              orders: [
 //                  ["Burger", 200],
 //                  ["Kentang", 130],
 //                  ["CocaCola", 400],
 //                  ["IceCream", 186],
 //              ],
 //              reviewers: 140,
 //          },
 //          {
 //              restaurant: "Lawmore",
 //              orders: [
 //                  ["Ayam", 126],
 //                  ["CocaCola", 206],
 //                  ["Burger", 368],
 //                  ["IceCream", 80],
 //              ],
 //              reviewers: 260,
 //          },
 //          {
 //              restaurant: "Karl Sr",
 //              orders: [
 //                  ["Ayam", 65],
 //                  ["CocaCola", 510],
 //                  ["Burger", 699],
 //                  ["Kentang", 274],
 //              ],
 //              reviewers: 412
 //          },
 //      ])
 //  );
 /*
 {
   OneStar: [ 'MekDun' ],
   TwoStars: [ 'Lawmore' ],
   ThreeStars: [ 'Karl Sr' ]
 }
 */