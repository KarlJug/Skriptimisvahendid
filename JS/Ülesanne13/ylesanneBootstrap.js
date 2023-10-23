/**
 * Karl Jugapuu
 * Üleasnne 13
 * 23.10.2023
 */

const titels = document.querySelectorAll('[data-title="Metsajõgi"]');
titels.forEach(titel => {
    titel.setAttribute("card-title", "Metsajõgi");
    titel.removeAttribute("data-title");
});



