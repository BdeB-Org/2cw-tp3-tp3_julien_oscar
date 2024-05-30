const style = document.createElement("style")
style.textContent = "ul li { display: flex; padding-top:2em; margin-left:-2em; align-items: center; justify-content: center;}"
document.head.appendChild(style)


function createNode(element) {

    return document.createElement(element);
}


function append(parent, el) {

    return parent.appendChild(el);
}


const menu_ul = document.getElementById("menu");
var elemH1 = document.getElementById("h1");


const url = "http://localhost:8080/ords/tp3/menu/";

const produit_ul = document.getElementById("produit");
var elemH2 = document.getElementById("p");


const link = "http://localhost:8080/ords/tp3/produit/";


elemH1.innerHTML = "Menu";
elemH2.innerHTML = "Produit";

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let menu = data.items;

        return menu.map(function (menu) {
            let li = createNode("li"),
                span = createNode("span");
            var a = document.createElement("a");
            a.setAttribute('href', "#affichage_produit")

            span.innerHTML = `${menu.id_menu}. ${menu.type}`;

            if (id_menu = 2) {
                span.appendChild(a)
            }

            append(li, span);
            append(menu_ul, li);
        });

    })

    .catch(function (error) {
        console.log(JSON.stringify(error));
    });

fetch(link)
    .then((resp) => resp.json())
    .then(function (data) {
        let produit = data.items;

        return produit.map(function (produit) {
            let li = createNode("li"),
                span = createNode("span");

            span.innerHTML = `${produit.id_produit}. ${produit.nom}, Description: ${produit.description_produit}, Aliments: ${produit.aliments}, Prix: ${produit.prix}$`;

            append(li, span);
            append(produit_ul, li);
        });

    })

    .catch(function (error) {
        console.log(JSON.stringify(error));
    });