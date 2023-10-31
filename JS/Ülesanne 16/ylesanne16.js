/**
 * Karl Jugapuu
 * Üleasnne 15
 * 31.10.2023
 */

let active = false;

let temp = document.querySelector(".peida");
let kuva = document.getElementById("kuva");
kuva.addEventListener("click", () => {
    active = !active;
    let peidaElements = document.querySelectorAll('span');
    if (active) {
        peidaElements.forEach(element => {
            element.removeAttribute("peida");
        });
    } else {
        peidaElements.forEach(element => {
            element.classList.add("peida");
        });
    }
    kuva.classList.toggle("peida");
});
