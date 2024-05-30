// Définition de la fonction createNode
function createNode(element) {
    // Création d'un nouvel élément DOM avec le type spécifié
    return document.createElement(element);
}

// Définition de la fonction append
function append(parent, el) {
    // Attache l'élément `el` comme enfant de l'élément `parent`
    return parent.appendChild(el);
}

// Sélection des éléments HTML dans le document
const emp_ul = document.getElementById("menu"); // Sélectionne l'élément avec l'ID "employees"
const elemH1 = document.getElementById("h1"); // Sélectionne l'élément avec l'ID "h1"
//const elemTotal = document.getElementById("total");

// URL de l'API contenant les données des employés
const url = "http://localhost:8080/ords/tp3/menu/";

// Modification du contenu de l'élément `elemH1`
elemH1.innerHTML = "Menu";
total = 0
// Utilisation de la fonction fetch() pour récupérer les données depuis l'URL
fetch(url)
    .then((resp) => resp.json()) // Convertit la réponse en format JSON
    .then(function (data) { // Manipule les données JSON
        // Récupère le tableau d'employés depuis les données
        let menu = data.items; //.results;

        // Utilisation de map() pour parcourir chaque employé
        return menu.map(function (menu) {
            // Création d'éléments HTML pour chaque employé
            let li = createNode("li"), // Crée un élément <li>
                span = createNode("span"); // Crée un élément <span>

            // Remplit le contenu du <span> avec les informations de l'employé
            span.innerHTML = `${menu.id_menu} ${menu.type}`;
            //total += employee.sal
            // Attache le <span> comme enfant du <li>
            append(li, span);

            // Attache le <li> comme enfant de la liste des employés
            append(emp_ul, li);
            //elemTotal.innerHTML = "Total=" + total
            //elemTotal.textContent = "Total=" + total
        });

    })

    // Gestion des erreurs lors de la récupération ou du traitement des données
    .catch(function (error) {
        console.log(JSON.stringify(error)); // Affiche l'erreur dans la console
    });