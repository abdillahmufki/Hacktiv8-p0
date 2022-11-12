// Split string, hanya boleh pake push dan length

let manualSplit = function (str) {
    let result = [];
    let temp = '';
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === ' ' || str[i] === undefined) {
            result.push(temp);
            temp = '';
        } else {
            temp += str[i];
        }
    }
    return result;
}

console.log(manualSplit('I Love Javascript')) // ['I', 'Love', 'Javascript']
console.log(manualSplit('Javascript is so cool')) // ['Javascript', 'is', 'so', 'cool']