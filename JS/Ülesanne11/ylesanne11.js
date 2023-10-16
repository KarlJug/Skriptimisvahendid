/**
 * Karl Jugapuu
 * Üleasnne 11
 * 16.10.2023
 */


// nimed
const nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", 
"Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];

// kõik algavad suure tähega
nimedSuur = [];
nimed.forEach(nimi => {
    let [enimi, pnimi] = nimi.split(" ");
    nimedSuur.push(enimi.charAt(0).toUpperCase() + enimi.slice(1) + " " + pnimi.charAt(0).toUpperCase(0) + pnimi.slice(1));
});
console.log(nimedSuur);


email = [];
nimed.forEach(nimi => {
    let [enimi, pnimi] = nimi.split(" ");
    email.push(pnimi + "@metshein.com");
});
console.log(email);


function otsiNimi(nimi, nimedFunc) {
    nimedFunc.forEach(nimiArr => {
        if (nimi.toLowerCase() === nimiArr.toLowerCase()) {
            console.log(nimi + " on olemsa");
        }
    });
}
otsiNimi("mari maasikas", nimedSuur);


// sünniaeg ja vanus
const inimesteAndmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" },
    { nimi: "Karl Jugapuu", isikukood: "5010511"},
    ];

function kuupaev(isikukood) {
    let aastaVahe;
    switch (isikukood.charAt(0)) {
        case "1":
        case "2":
            aastaVahe = "18";
            break;

        case "3":
        case "4":
            aastaVahe = "19";
            break;

        case "5":
        case "6":
            aastaVahe = "20";
            break;

        default:
            aastaVahe = "21";
            break;
    }
    let aasta = isikukood.slice(1, 3);
    let kuu = isikukood.slice(3, 5);
    let paev = isikukood.slice(5, 7);

    return paev + "." + kuu + "." + aastaVahe + aasta;
}

function vanus(synniaeg) {
    let [paev, kuu, aasta] = synniaeg.split(".");
    let date = new Date();
    let aastaNyyd = date.getFullYear();

    let vanus = aastaNyyd - parseInt(aasta);

    // kui kuu on suurem kui praegune kuu, siis vanus väheneb
    if (kuu > date.getMonth() + 1) {
        vanus--;
    } else if (kuu == date.getMonth() + 1) {
        if (paev > date.getDate()) {
            vanus--;
        }
    }

    return vanus;
}


console.log();
inimesteAndmed.forEach(isik => {
    let aasta = kuupaev(isik.isikukood);
    console.log(isik.nimi + " on sündinud " + aasta + " - " + vanus(aasta) + " aastat vana");
});


// kaugushüpe
const opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
    { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
    { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
    { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
    { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
    { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
    { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
    { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
    ];

let num = 0;
let parim = 0;
opilased.forEach((opilane, index) => {
        let temp = opilane.tulemused.reduce((a, b) => a + b, 0) / opilane.tulemused.length;
        if (temp > parim) {
            parim = temp;
            num = index;
        }
});

console.log();
console.log(opilased[num].nimi + " on parim kaugushüppaja keskmise tulemusega " + parim.toFixed(2) + " meetrit");
