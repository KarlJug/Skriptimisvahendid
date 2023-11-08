/**
 * Karl Jugapuu
 * Üleasnne 17
 * 08.11.2023
 */


const jsonURL = "https://dummyjson.com/products";

fetch(jsonURL)
    .then(response => response.json())
    .then(data => {
        var index = 0;
        let row;
        data.forEach(item => {
            if (index % 4 == 0) {
                // Create a new div with class "row gap-3" every 4th item
                row = document.createElement("div");
                row.className = "row gap-3";
                document.body.appendChild(row);
            }

            // Create a new div for the item and append it to the row
            const itemDiv = document.createElement("div");
            itemDiv.textContent = JSON.stringify(item);
            row.appendChild(itemDiv);

            index++;
        });

    })
    .catch((error) => console.error('Error:', error));
