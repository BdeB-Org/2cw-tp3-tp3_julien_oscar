const style = document.createElement("style")
style.textContent = "ul li { display: flex; padding-top:2em; margin-left:-2em; align-items: center; justify-content: center;} ul{ padding-top:2em}"
document.head.appendChild(style)


function createNode(element) {

    return document.createElement(element);
}


function append(parent, el) {

    return parent.appendChild(el);
}


const utilisateur_ul = document.getElementById("utilisateur");
var elemH1 = document.getElementById("h1");


const url = "http://localhost:8080/ords/tp3/utilisateur/";

elemH1.innerHTML = "Utilisateur";

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let utilisateur = data.items;

        return utilisateur.map(function (utilisateur) {
            let li = createNode("li"),
                span = createNode("span");

            span.innerHTML = `${utilisateur.id_utilisateur}. Nom: ${utilisateur.nom}, Addresse: ${utilisateur.addresse}, Telephone: ${utilisateur.telephone},`;

            append(li, span);
            append(utilisateur_ul, li);
        });

    })

    .catch(function (error) {
        console.log(JSON.stringify(error));
    });