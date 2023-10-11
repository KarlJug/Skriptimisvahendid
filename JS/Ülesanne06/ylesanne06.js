/**
 * Karl Jugapuu
 * Üleasnne 6
 * 11.10.2023
 */

// Positiivne või negatiivne
const number = -20;
let result = null;

switch (true) {
    case number === 0:
        result = "Null";
        break;

    case number > 0:
        result = "Positiivne";
        break;

    default:
        result = "Negatiivne";
}

console.log(result);

// restoran
let valjasta = null;
let arv = 9;

if (arv <= 0) arv = 1;

switch (arv) {
    case 1:
    case 2:
        valjasta = "Valige laud kahele inimesele.";
        break;
    
    case 3:
    case 4:
        valjasta = "Valige laud neljale inimesele.";
        break;
    
    case 5:
    case 6:
        valjasta = "Valige laud kuuele inimesele.";
        break;

    default:
        valjasta = "Valige suur laud.";
}

console.log(valjasta);
