/**
 * Karl Jugapuu
 * Üleasnne 22
 * 27.11.2023
 */


let cookieTheme = localStorage.getItem("theme");
if (cookieTheme == "true") {
    document.body.classList.add("dark");
}

let theme = document.getElementById("theme");
theme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        window.localStorage.setItem("theme", true);

    } else {
        window.localStorage.setItem("theme", false);
    }
});

