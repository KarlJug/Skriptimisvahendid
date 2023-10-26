/**
 * Karl Jugapuu
 * Üleasnne 13
 * 23.10.2023
 */

const titels = document.querySelectorAll('[data-title]');
titels.forEach(titel => {
    titel.setAttribute("card-title", titel.getAttribute("data-title"));
    titel.removeAttribute("data-title");
});



