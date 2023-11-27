/**
 * Karl Jugapuu
 * Üleasnne 16
 * 31.10.2023
 */

let active = false;

let li = document.querySelectorAll("li");
let peidaElements = document.querySelectorAll('.peida');

// eraldi kuvamine
li.forEach(element => {
    console.log();
    element.addEventListener("click", function () {
        active = !active;

        if (active) {
            element.querySelector("span").classList.remove("peida");

        } else {
            element.querySelector("span").classList.add("peida");
        }
    });
});

// kuva/peida nupp
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
