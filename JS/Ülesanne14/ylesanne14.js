/**
 * Karl Jugapuu
 * Üleasnne 14
 * 26.10.2023
 */


const items = document.querySelectorAll(".list-group-item")
items.forEach(item => {
    if (item.textContent.includes("Viga")) {
        item.classList.add('bg-warning');

    } else if (item.textContent.includes("Tehtud")) {
        item.classList.add('bg-success');
        item.classList.add('tx-weight');

    } else if (item.textContent.includes("Ootel")) {
        item.classList.add('bg-primary');
    }
});