var nama = 'lisa'
var result = ''

for (let i = 0; i < nama.length; i++) {
    if (nama[i] === 'i') {
        result += 's'
    }

    if (i % 2 !== 0) {
        result += 7
    } else {
        result += nama[i]
    }
}

console.log(result)