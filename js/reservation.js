const style = document.createElement("style")
style.textContent = "ul li { display: flex; padding-top:2em; margin-left:-2em; align-items: center; justify-content: center;} ul{ padding-top:2em}"
document.head.appendChild(style)


function createNode(element) {

    return document.createElement(element);
}


function append(parent, el) {

    return parent.appendChild(el);
}


const reservation_ul = document.getElementById("reservation");
var elemH1 = document.getElementById("h1");


const url = "http://localhost:8080/ords/tp3/reservation/";

elemH1.innerHTML = "Reservation";

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let reservation = data.items;

        return reservation.map(function (reservation) {
            let li = createNode("li"),
                span = createNode("span");

            span.innerHTML = `Id reservation: ${reservation.id_reservation}. Id utilisateur: ${reservation.id_utilisateur}. Nombre de places: ${reservation.nombre_places}`;

            append(li, span);
            append(reservation_ul, li);
        });

    })

    .catch(function (error) {
        console.log(JSON.stringify(error));
    });