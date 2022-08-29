let products = {
    data: [


        {
            productName: "Ejecutivos de la empresa",
            category: "directores",
            image: "./imagenes/d-3.jpg"
        },

        {
            productName: "Ejecutivos de la empresa",
            category: "directores",
            image: "./imagenes/d-3.jpg"
        },
        {
            productName: "Noticias",
            category: "new",
            image: "./imagenes/news-1.jpg"
        },
        {
            productName: "Noticias",
            category: "new",
            image: "./imagenes/news-2.jpg"
        },
        {
            productName: "Relog Inteligente",
            category: "products",
            image: "./imagenes/product-2.jpg"
        },
        {
            productName: "Zapato deportivo",
            category: "products",
            image: "./imagenes/product-1.jpg"
        },
        {
            productName: "Noticias",
            category: "new",
            image: "./imagenes/news-4.jpg"
        },
        {
            productName: "Face Serum",
            category: "products",
            image: "./imagenes/product-3.jpg"
        },
        {
            productName: "Lentes",
            category: "products",
            image: "./imagenes/product-4.jpg"
        },
        {
            productName: "Audifono",
            category: "products",
            image: "./imagenes/product-5.jpg"
        },
        {
            productName: "Ejecutivos de la empresa",
            category: "directores",
            image: "./imagenes/d-3.jpg"
        },


    ],
}

for (let i of products.data) {
    let cardBody = document.createElement("div");
    cardBody.classList.add("cardBody", i.category, "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    cardBody.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("p");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    cardBody.appendChild(container);
    document.getElementById("products").appendChild(cardBody);
}
//parameter passed from button (parameter same as category)
function filterProduct(value) {
    let buttons = document.querySelectorAll("botton-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("acti");
        }
        else {
            button.classList.remove("acti")
        }
    });
    // Select all card
    let elements = document.querySelectorAll("cardBody");
    elements.forEach((element) => {
        if (value == "all") {
            element.classList.remove("hide");
        }

    });
}
// Initially display all products
window.onload = () => {
    filterProduct("all");
};