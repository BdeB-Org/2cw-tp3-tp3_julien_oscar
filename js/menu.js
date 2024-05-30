


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
const elemH1 = document.getElementById("h1");


const url = "http://localhost:8080/ords/tp3/menu/";


elemH1.innerHTML = "Menu";
total = 0

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let menu = data.items;

        return menu.map(function (menu) {
            let li = createNode("li"),
                span = createNode("span");

            span.innerHTML = `${menu.id_menu}. ${menu.type}`;

            append(li, span);
            append(menu_ul, li);
        });

    })

    .catch(function (error) {
        console.log(JSON.stringify(error));
    });