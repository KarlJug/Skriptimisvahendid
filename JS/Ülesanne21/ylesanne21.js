/**
 * Karl Jugapuu
 * Üleasnne 21
 * 16.11.2023
 */

var content = document.getElementById("container");
//var content = document.createElement("div");
//content.className = "container pt-5";
//document.body.appendChild(content);

let jsonURL = "https://dummyjson.com/quotes";

// fetch json data
async function getJson(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}

function setup(data) {
        let div = document.createElement("div");
        div.className = "border col border p-4";

        let autor = document.createElement("p");
        autor.textContent = data.author;

        let quote = document.createElement("p");
        quote.className = "text-center";
        quote.textContent = data.quote;

        let qoute = document.createElement("span");
        qoute.className = "badge text-bg-primary p-2 mt-2";
        qoute.textContent = "Quotes";

        row.appendChild(div);
        div.appendChild(autor);
        div.appendChild(quote);
        div.appendChild(qoute);

}

var filter = document.getElementById("filter");
var dataArray = [];
// laadimise indikaator
document.getElementById('loadingIndicator').style.display = 'block';

getJson(jsonURL)
    .then(data => {
        dataArray = data.quotes;

        // peidab laadimise indikaatori
        document.getElementById('loadingIndicator').style.display = 'none';


        var index = 0;
        dataArray.forEach(element => {
            // loob uue rea iga 3 toote tagant
            if (index % 3 === 0) {
                row = document.createElement("div");
                row.className = "row gap-3 my-4 reload";
                content.appendChild(row);
            }

            setup(element);

            ++index;
        });

        // filter event listener
        filter.addEventListener("input", async function (event) {
            // kustutab kõik div reload elemendid
            let divReload = document.querySelectorAll(".reload");
            divReload.forEach(element => {
                element.remove();
            });

            var filterValue = event.target.value;
            var index = 0;
            dataArray.forEach(element => {
                // loob uue rea iga 3 toote tagant
                if (index % 3 === 0) {
                    row = document.createElement("div");
                    row.className = "row gap-3 my-4 reload";
                    content.appendChild(row);
                }

                // kui quote või author sisaldab filterValue siis loob uue div elemendi
                if (element.quote.toLowerCase().includes(filterValue.toLowerCase()) || element.author.toLowerCase().includes(filterValue.toLowerCase())) {
                    setup(element);
                    ++index;
                }
            });
        });

    });
