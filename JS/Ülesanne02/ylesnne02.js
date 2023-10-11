/**
 * Karl Jugapuu
 * Üleasnne 2
 * 21.09.2023
 */

// aeg
const tunnid = 2;
const minutid = 38;
const sekundid = 50;
const aeg = tunnid + ':' + minutid + ':' + sekundid
console.log(aeg)

// tsitaat lause
const tsitaat = "Don't judge each day by the harvest you reap but by the seeds that you plant."
const autor = "Robert Louis Stevenson"
console.log(tsitaat + '\n' + autor + '\n')

// mallide kasutamine
const eesnimi = "Karl"
const perenimi = "Jugapuu"
console.log(eesnimi + ' ' + perenimi + " nimetähed on " + eesnimi.charAt(0) + '.' + perenimi.charAt(0) + '.')

// perenime pikkus
const nimi = perenimi + ', ' + eesnimi
const koma = nimi.indexOf(',')
const pere = nimi.substring(0, koma)
console.log(pere.toUpperCase())
console.log(pere.length)

// E-post aadressi muutmine
const epost = "KarlJ@netlog.com"
const kukk = epost.indexOf('@')
const gmail = epost.substring(0, kukk)
const gmail2 = gmail + "@gmail.com"
console.log(gmail2)

// andmerida anlüüs
const andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175"
const komad = andmerida.split(',')
// leiab ip aadressi ja maili adressi
console.log(komad[3] + ' - ' + komad[5])

