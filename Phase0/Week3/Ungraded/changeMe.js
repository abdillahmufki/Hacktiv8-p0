function changeMe(arr) {
    // you can only write your code here!
    let year = 2022;
    let obj = {};

    if (arr.length === 0) {
        console.log('');
    } else {
        for (let i = 0; i < arr.length; i++) {
            // console.log(arr[i]);
            obj.firstName = arr[i][0];
            obj.lastName = arr[i][1];
            obj.gender = arr[i][2];
            obj.age = arr[i][3];

            if (!arr[i][3] || arr[i][3] > year) {
                obj.age = 'Invalid Birth Year';
            } else {
                obj.age = year - arr[i][3];
            }
            console.log(`${i+1}. ${obj.firstName} ${obj.lastName}:`);
            console.log(obj);
        }
    }
}


//do not change the code below
let inputArr = [
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
];
changeMe(inputArr);