const style = document.createElement("style")
style.textContent = "ul li { display: flex; padding-top:2em; margin-left:-2em; align-items: center; justify-content: center;}"
document.head.appendChild(style)


function createNode(element) {

    return document.createElement(element);
}


function append(parent, el) {

    return parent.appendChild(el);
}


const livraison_ul = document.getElementById("livraison");
var elemH1 = document.getElementById("h1");


const url = "http://localhost:8080/ords/tp3/livraison/";

const commande_ul = document.getElementById("commande");
var elemH2 = document.getElementById("p");


const link = "http://localhost:8080/ords/tp3/commande/";


elemH1.innerHTML = "Livraison";
elemH2.innerHTML = "Commande";

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let livraison = data.items;

        return livraison.map(function (livraison) {
            let li = createNode("li"),
                span = createNode("span");

            span.innerHTML = `${livraison.id_livraison}. Id commande: ${livraison.id_commande}, Id utilisateur: ${livraison.id_utilisateur}`;

            append(li, span);
            append(livraison_ul, li);
        });

    })

    .catch(function (error) {
        console.log(JSON.stringify(error));
    });

fetch(link)
    .then((resp) => resp.json())
    .then(function (data) {
        let commande = data.items;

        return commande.map(function (commande) {
            let li = createNode("li"),
                span = createNode("span");

            span.innerHTML = `${commande.id_commande}. Quantité: ${commande.quantite}, Id Produit: ${commande.id_produit}`;

            append(li, span);
            append(commande_ul, li);
        });

    })

    .catch(function (error) {
        console.log(JSON.stringify(error));
    });