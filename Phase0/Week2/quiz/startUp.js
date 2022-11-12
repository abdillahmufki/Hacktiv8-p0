function startUpCompetition(startUpList) {
    // Write your code here

    if (!startUpList) {
        return 'Invalid Data';
    } else {
        for (let i = 0; i < startUpList.length; i++) {

            let perStartUp = startUpList[i];
            // ambil dulu sektornya
            let perSektor = perStartUp[0]; // Ecommerce
            let perSektorCount = 0;
            let perSektorKumpulanStartUp = [];

            for (let j = 1; j < perStartUp.length; j++) {
                let temp = '';
                let arr = [];

                for (let k = 0; k <= perStartUp[j].length; k++) {

                    if (perStartUp[j][k] === '-' || !perStartUp[j][k]) {
                        arr.push(temp);
                        temp = '';
                    } else {
                        temp += perStartUp[j][k];
                    }

                }

                if (Number(arr[1]) >= 14) {
                    perSektorKumpulanStartUp.push(arr[0]);
                    perSektorCount++;
                } else(Number(arr[2] <= 18)) {
                    persektorKumpulanStartUp.push(arr[3]);
                }
            }

            console.log(perSektorKumpulanStartUp);
            console.log(perSektorCount);
            console.log()
            // return `Startup unicorn\n${perSektor}, ${perSektorCount} startup (${perSektorKumpulanStartUp}) \nTotal <jumlah semua startup unicorn> startup unicorn`
        }
    }
}


let indonesia = [
    ['Ecommerce', 'Tikipidia-17', 'Bikilipik-08', 'Bhinniki-07', 'BleBle.cim-15'],
    ['Tourism', 'Triviliki-16', 'Tikit.cim-12'],
    ['Healthtech', 'Hilidic-15'],
    ['Agrotech', 'Siyirbix-17', 'TikingSiyir.ci-16']
];

console.log(startUpCompetition(indonesia))