/**
 * Karl Jugapuu
 * Üleasnne 9
 * 16.10.2023
 */


// erinevad funktsioonid
function nimi() {
    let nimi = "Karl Jugapuu";
    console.log(nimi);
}

nimi();

(() => {
    let nimi = "Karl Jugapuu";
    console.log(nimi);
})();


// argumendiga funktsioon kuvab kuupäeva
function kuupaev() {
    let kuupaev = new Date();
    let options = { year: '2-digit', month: '2-digit', day: '2-digit' };
    let formattedKuupaev = kuupaev.toLocaleDateString('et-EE', options);

    console.log(Date());
    console.log(formattedKuupaev);
}
kuupaev();


// salajane sõnum
let salajaneSona = (sona) => {
    let salajaneSona = sona.replace(/[aeiouõäöü]/gi, '*');
    console.log(salajaneSona);
}
salajaneSona("Tere tulemast");


// unikaalsed nimed
function leiaUnikaalsedNimed(nimed) {
    let unikaalsedNimed = new Set(nimed);

    unikaalsedNimed.forEach(nimi => {
        console.log(nimi);
    });
}

leiaUnikaalsedNimed(["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"])