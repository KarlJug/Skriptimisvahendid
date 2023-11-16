/**
 * Karl Jugapuu
 * Üleasnne 19
 * 08.11.2023
 */

let content = document.createElement("div");
content.className = "container text-center pt-5";
document.body.appendChild(content);

fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        var index = 0;
        for (let product of data.products) {
            // loob uue rea iga 4 toote tagant
            if (index % 4 == 0) {
                row = document.createElement("div");
                row.className = "row gap-3 my-4";
                content.appendChild(row);
            }

            let img = document.createElement("img");
            img.className = "img-fluid";
            img.style = "width: 900px; height: 200px;";
            img.src = product.thumbnail;

            let h4 = document.createElement("h4");
            h4.textContent = product.title;
            let p = document.createElement("p");
            p.textContent = product.price + "€";

            let button = document.createElement("button");
            button.type = "button";
            button.textContent = "Add to cart";
            button.className = "btn btn-outline-dark";

            let div = document.createElement('div');
            div.className = "col border p-0";
            let divContent = document.createElement('div');
            divContent.className = "text-center my-4";

            row.appendChild(div);
            div.appendChild(img);
            div.appendChild(divContent);
            divContent.appendChild(h4);
            divContent.appendChild(p);
            divContent.appendChild(button);

            ++index;
        }
    })
    .catch(error => {
        console.log(error);
    });

