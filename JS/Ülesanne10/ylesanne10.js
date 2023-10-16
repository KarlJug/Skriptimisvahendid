/**
 * Karl Jugapuu
 * Üleasnne 10
 * 16.10.2023
 */

// ladu
class Ladu {
    constructor() {
        this.tooted = [];
    }

    LisaToode(toode) {
        this.tooted.push(toode);
    }

    // muuda toote kogust (kui toode on olemas)
    MuudaKogust(tooteNimi, kogus) {
        tooteNimi.kogus += kogus;
    }

    get Ladu() {
        this.tooted.forEach(toode => {
            console.log(toode.nimi + "\t" + toode.hind + "€\t" + toode.kogus + " tk");
        });
    }
}


// toote objekt
class Toode extends Ladu {
    constructor(nimi, hind, kogus = 0, ladu) {
        super();
        this.nimi = nimi;
        this.hind = hind;  // €/tk
        this.kogus = kogus;  // tk

        // lisa toode lao massiivi
        ladu.LisaToode(this);
    }

    get Toode() {
        console.log(this.nimi + "\t" + this.hind + "€\t" + this.kogus + " tk");
    }

}


// ostukorv
class Ostukorv extends Ladu {
    constructor() {
        super();
        this.tooted = [];
    }

    LisaToode(toode, kogus) {
        // kontrolli kas toodet on laos piisavalt
        if (toode.kogus < kogus) {
            kogus = toode.kogus;
        }

        // kontrolli kas toode on juba ostukorvis
        let leitud = false;
        this.tooted.forEach(toodeArr => {
            if (toodeArr.nimi === toode.nimi) {
                leitud = true;
            }
        });

        // kui toode on juba ostukorvis siis suurenda kogust
        if (leitud) {
            this.tooted.forEach(toodeArr => {
                if (toodeArr.nimi === toode.nimi) {
                    toodeArr.kogus += kogus;
                }
            });

          // kui toodet ei ole ostukorvis siis lisa see
        } else {
            this.tooted.push({nimi: toode.nimi, hind: toode.hind, kogus: kogus});

        }
        // võtab koguse laost maha
        this.MuudaKogust(toode, -kogus);
    }


    get Ostukorv() {
        this.tooted.forEach(toode => {
            console.log(toode.nimi + "\t" + toode.hind + "€\t" + toode.kogus + " tk");
        });
    }

    // arvuta ostukorvi summa
    get summaKokku() {
        let summa = 0;
        this.tooted.forEach(toode => {
            summa += toode.hind * toode.kogus;
        });
        console.log("Summa kokku: " + summa + "€");
    }
}

let ladu = new Ladu();

piim = new Toode("Piim", 3.60, 3, ladu);
leib = new Toode("Leib", 2.00, 1, ladu);
munad = new Toode("Munad", 1.50, 6, ladu);
juust = new Toode("Juust", 4.20, 1, ladu);
tomatid = new Toode("Tomatid", 2.30, 3, ladu);

piim.Toode;
console.log("\n\nLadu\n");
ladu.Ladu;


ostukorv = new Ostukorv();

ostukorv.LisaToode(piim, 2);
ostukorv.LisaToode(piim, 1);
ostukorv.LisaToode(leib, 3);
ostukorv.LisaToode(munad, 4);


console.log("\n\nOstukorv\n");
ostukorv.Ostukorv;
ostukorv.summaKokku;


console.log("\n\nLadu pärast ostu\n");
ladu.Ladu;
