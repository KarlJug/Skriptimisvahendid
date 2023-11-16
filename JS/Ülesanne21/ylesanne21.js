/**
 * Karl Jugapuu
 * Üleasnne 21
 * 16.11.2023
 */

var content = document.createElement("div");
content.className = "container text-center pt-5";
document.body.appendChild(content);

let jsonURL = "https://dummyjson.com/quotes";

async function getJson(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

getJson(jsonURL).then((data) => {
    data.quotes.forEach(quote => {
       // loob uue rea iga 4 toote tagant
        if (index % 4 == 0) {
            var row = document.createElement("div");
            row.className = "row gap-3 my-4";
            content.appendChild(row);
        }
        console.log(quote.quote);
        let div = document.createElement("div");
        div.className = "border col border p-4";

        let autor = document.createElement("p");
        autor.textContent = quote.author;

        let quote = document.createElement("p");
        quote.textContent = quote.quote;

        div.appendChild(autor);
        div.appendChild(quote);
        content.appendChild(div);

    });
});
