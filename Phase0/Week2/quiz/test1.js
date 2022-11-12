// function fill(data, value, start, end) {
//     // your code here
//     if (!data || !value) {
//         return 'Invalid Input';
//     }
//     if (!start) {
//         start = 0;
//     }
//     if (!end || end > data.length) {
//         end = data.length;
//     }

//     for (let i = start; i < end; i++) {
//         data[i] = value;
//     }
//     return data;
//     // while (start < end) { // Start diganti kurang dari end
//     //     data[start] = value;
//     //     start++;
// }

// //Test Case
// console.log(fill());
// // Invalid input
// console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo"]));
// // Invalid input
// console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Echo", 2, 4));
// // [ 'Alpha', 'Beta', 'Echo', 'Echo' ]
// console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Foxtrot", 1, 3));
// // [ 'Alpha', 'Foxtrot', 'Foxtrot', 'Delta' ]
// console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Juliett", 3, 20));
// // [ 'Alpha', 'Beta', 'Charlie', 'Juliett' ]
// console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Golf", 0, 1));
// // [ 'Golf', 'Beta', 'Charlie', 'Delta' ]
// console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo"], "Hotel", 1));
// // [ 'Alpha', 'Hotel', 'Hotel', 'Hotel', 'Hotel' ]
// console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo", "Foxtrot"], "India"));
// // [ 'India', 'India', 'India', 'India', 'India', 'India' ]


function startUpCompetition(startUpList) {
    // Write your code here

    if (!startUpList) {
        return 'Invalid Data';
    }

    for (let i = 0; i < startUpList.length; i++) {
        //   console.log(startUpList[i])
        // perSektor = perStartUp[0];
        // perSektorCount = 0;
        // perSektorStartUp = [];
        // result = '';

        for (let j = 1; j < startUpList[i].length; j++) {
            // console.log(perStartupSplitted);
            let temp = '';
            let arr = [];

            for (let k = 0; k <= startUpList[i][j].length; k++) {
                // console.log(perStartupSplitted[k]);

                if (startUpList[i][j][k] === '-' || startUpList[i][j][k] === undefined) {
                    arr.push(temp);
                    temp = '';
                } else {
                    temp += startUpList[i][j][k];
                    // console.log(temp);
                }
            }
            console.log(arr);
        }
    }
}

let indonesia = [
    ['Ecommerce', 'Tikipidia-17', 'Bikilipik-08', 'Bhinniki-07', 'BleBle.cim-15'],
    ['Tourism', 'Triviliki-16', 'Tikit.cim-12'],
    ['Healthtech', 'Hilidic-15'],
    ['Agrotech', 'Siyirbix-17', 'TikingSiyir.ci-16']
]
console.log(startUpCompetition(indonesia))