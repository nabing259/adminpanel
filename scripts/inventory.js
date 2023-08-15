const dataP = JSON.parse(localStorage.getItem("data"));

let box = document.getElementById("products_data");

dataP.map((ele, ind) => {
    let div = document.createElement("div");
    
    let img = document.createElement("img");
    img.src = ele.Image;

    let name = document.createElement("p");
    name.innerText = ele.Name;

    let price = document.createElement("p");
    price.innerText = ele.Price;

    let remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.addEventListener("click", function(){
        removeProduct(ele, ind);
    });

    let subdiv = document.createElement("div");
    subdiv.append(name, price);

    div.append(img, subdiv, remove);
    box.append(div);
});

function removeProduct(ele, ind){
    dataP.splice(ind, 1);
    localStorage.setItem("data", JSON.stringify(dataP));
    window.location.reload();
}