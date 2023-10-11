/**
 * Karl Jugapuu
 * Üleasnne 7
 * 11.10.2023
 */


// mündid
const sorteerimataRaha = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];
let myndid = [];
let raha = [];

let i = 0;
while (i < sorteerimataRaha.length) {
    if (Number.isInteger(sorteerimataRaha[i]) && sorteerimataRaha[i] != 1 && sorteerimataRaha[i] != 2) {
        raha.push(sorteerimataRaha[i]);

    } else {
        myndid.push(sorteerimataRaha[i]);
    }
    ++i;
}

let sum = 0;
for (let i = 0; i < myndid.length; ++i) {
    sum += myndid[i];
}

console.log(myndid.length + " münti. Kokku: " + sum.toFixed(2) + "€");