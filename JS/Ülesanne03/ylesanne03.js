/**
 * Karl Jugapuu
 * Üleasnne 3
 * 11.10.2023
 */

// sõidu aeg ja kaugus
const kaugus = 250  // km
const kiirus = 90   // km/h
const aeg = kaugus / kiirus  // tundides
console.log(aeg.toFixed(2) + " tundi")

// postituste kuvamine
const postitused = 137
const lehekylgi = postitused / 10
console.log(lehekylgi.toFixed(0))

// serveri töökulu
const voimsus = 400  // W
const hind = 9.69    // €/kWh
const voolutarbimine = voimsus / 1000
const tookulu = voolutarbimine * hind
console.log(tookulu.toFixed(2) + " €/h")
