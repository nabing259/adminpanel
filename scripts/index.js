//store the products array in localstorage as "data"
let products = JSON.parse(localStorage.getItem("data")) || [];

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const brand = document.querySelector("#product_brand").value;
    const name = document.querySelector("#product_name").value;
    const price = document.querySelector("#product_price").value;
    const image = document.querySelector("#product_image").value;

    const product = {
       Brand: brand,
        Name: name,
        Price: price,
        Image: image
    }
    products.push(product);

    console.log(products);
    localStorage.setItem("data", JSON.stringify(products));
})
