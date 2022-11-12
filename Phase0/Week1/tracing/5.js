var nama = 'rose'
var result = ''

for (let i = 0; i < nama.length; i++) {
    result += nama[i] + i

    var temp = ''
    for (let j = 0; j < result.length; j += 2) {
        temp += result[j] + '*'
    }
    console.log(temp)
}

console.log(result)