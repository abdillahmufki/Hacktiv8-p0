function sameHobbies(obj1, obj2) {
    // Code Here
    result = [];


    for (let i = 0; i < obj1.hobbies.length; i++) {
        // console.log(obj1.hobbies[i]);
        for (let j = 0; j < obj2.hobbies.length; j++) {
            // console.log(obj2.hobbies[j]);
            if (obj1.hobbies[i] === obj2.hobbies[j]) {
                result.push(obj1.hobbies[i]);
            }
        }
    }
    return result;
}

let semmi = {
    name: 'semmi',
    hobbies: ['Sleeping', 'Dancing', 'Coding']
}

let bimo = {
    name: 'bimo',
    hobbies: ['Sleeping', 'Cooking', 'Coding', 'Cleaning']
}

console.log(sameHobbies(semmi, bimo)) // ['Sleeping', 'Coding']