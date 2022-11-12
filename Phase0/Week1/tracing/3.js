var kalimat = 'Blackpink in your area'
var result = ''

for (let i = 0; i < kalimat.length; i += 2) {
    var bagiTiga = i / 3
    if (bagiTiga % 2 === 0) {
        result += kalimat[i]
        console.log(result)
    }

    result += '$'
}