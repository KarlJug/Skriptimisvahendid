/**
 * Karl Jugapuu
 * Üleasnne 13
 * 23.10.2023
 */


const target = document.getElementById("eemaldaID");
target.removeAttribute("id");

// muuda teksti
const attr = document.querySelector('p[attr="Siia muu tekst"]');
attr.setAttribute("attr", "Karl Jugapuu");

console.log(attr.getAttribute("attr"));



