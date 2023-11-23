/**
 * Karl Jugapuu
 * Üleasnne 21
 * 16.11.2023
 */
var content = document.getElement("div");
//var content = document.createElement("div");
//content.className = "container pt-5";
//document.body.appendChild(content);

let jsonURL = "https://dummyjson.com/quotes";

async function getJson(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

getJson(jsonURL).then((data) => {
    var index = 0;
    data.quotes.forEach(element => {
        // loob uue rea iga 4 toote tagant
        if (index % 3 == 0) {
            row = document.createElement("div");
            row.className = "row gap-3 my-4";
            content.appendChild(row);
        }
        let div = document.createElement("div");
        div.className = "border col border p-4";

        let autor = document.createElement("p");
        autor.textContent = element.author;

        let quote = document.createElement("p");
        quote.className = "text-center";
        quote.textContent = element.quote;

        let qoute = document.createElement("span");
        qoute.className = "badge text-bg-primary p-2 mt-2";
        qoute.textContent = "Quotes";

        div.appendChild(autor);
        div.appendChild(quote);
        div.appendChild(qoute);
        row.appendChild(div);

        ++index;
    });
});
