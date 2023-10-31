/**
 * Karl Jugapuu
 * Üleasnne 16
 * 31.10.2023
 */

let active = false;

let peidaElements = document.querySelectorAll('.peida');
let kuva = document.getElementById("kuva");
kuva.addEventListener("click", () => {
    active = !active;
    
    if (active) {
        peidaElements.forEach(element => {
            element.classList.remove("peida");
        });
        kuva.textContent = "Peida";
    } else {
        peidaElements.forEach(element => {
            element.classList.add("peida");
        });
        kuva.textContent = "Kuva";
    }
    
});