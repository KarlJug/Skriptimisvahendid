/**
 * Karl Jugapuu
 * Üleasnne 13
 * 23.10.2023
 */

const cardData = document.querySelectorAll(".card");
console.log(cardData);
cardData.forEach(title => {
    let text = title.querySelector("img").getAttribute("data-description");
    let name = title.querySelector("img").getAttribute("data-title");

    title.querySelector(".card-title").textContent = name;
    title.querySelector(".card-text").textContent = text;
});



