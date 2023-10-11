/**
 * Karl Jugapuu
 * Üleasnne 5
 * 11.10.2023
 */

// temperatuur
const temperatuur = 14;

if (temperatuur > 25) {
    console.log("Väga kuum ilm!");

} else if (temperatuur >= 15 && temperatuur <= 25) {
    console.log("Mõnus temperatuur");

} else if (temperatuur < 15) {
    console.log("Jahe ilm");
}


// kasutajanime kontroll
const kasutajanimi = "admin";

if (kasutajanimi === "admin") {
    console.log("Tere admin");
} else {
    console.log("Tere külaline");
}


// ürituse piletite hind
const vanus = 39;
const tyyp = "sooduspilet";
let hind = 22220;  // €

if (tyyp === "taispilet") {
    if (vanus < 18) {
        hind = 10

    } else if (vanus >= 18 && vanus <= 64) {
        hind = 20

    } else {
        hind = 15
    }
} else {
    if (vanus < 18 || (vanus >= 18 && vanus <= 64)) {
        hind = 8

    } else {
        hind = 15
    }
}

console.log(hind);
