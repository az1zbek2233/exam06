let div = document.querySelector(".resalt");
let button = document.querySelector("button");
let input = document.querySelector('input');


button.addEventListener("click", function (event) {
    event.preventDefault();

    let search = input.value;

    fetch("https://raw.githubusercontent.com/diyor011/apibest/master/api.json")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let fData = data.filter(function (prod) {
                return prod.name.toLowerCase().includes(search.toLocaleLowerCase())
            });
            
            div.innerHTML = "";

            for(let prod of fData) {
                let title = prod.name;
                let price = prod.price;
                let img = prod.pic;
    
                let box = document.createElement("div");
                let imgel = document.createElement("img");
                let h2 = document.createElement("h2");
                let p = document.createElement("p");
    
                imgel.src = img;
                h2.textContent = title;
                p.textContent = price;
    
                box.appendChild(imgel);
                box.appendChild(h2);
                box.appendChild(p);
    
                div.appendChild(box);
            }

            
        });
})

fetch("https://raw.githubusercontent.com/diyor011/apibest/master/api.json")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        for (let prod of data) {
            let title = prod.name;
            let price = prod.price;
            let img = prod.pic;

            let box = document.createElement("div");
            let imgel = document.createElement("img");
            let h2 = document.createElement("h2");
            let p = document.createElement("p");

            imgel.src = img;
            h2.textContent = title;
            p.textContent = price;

            box.appendChild(imgel);
            box.appendChild(h2);
            box.appendChild(p);

            div.appendChild(box);
        }
    })