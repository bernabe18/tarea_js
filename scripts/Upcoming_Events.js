// En el home.html deben haber tantas tarjetas como eventos haya en el array de eventos.
let fragment = document.createDocumentFragment();
let cards = document.getElementById("cards");
cards.className = "row m-3";


for (const events of upcomingEvent) {
//creando elementos
    let card_c = document.createElement("div");
    let card_cc = document.createElement("div")
    let imagen = document.createElement("img");
    let titulo = document.createElement("h5");
    let descripcion = document.createElement("p");
    let precio = document.createElement("span");
    let verMas = document.createElement("a");

//agregando valores y clases bootstrap
    card_c.className = "card m-1 p-2";
    titulo.className = "card-title";
    card_cc.className = "card-body";
    verMas.className = "btn btn-primary";
    verMas.textContent = "Ver mas"
    verMas.href = "./Details.html"
    imagen.className = "card-img-top";

//stilos
    card_c.style.width = "18rem";
    precio.style.color = "black";
    descripcion.style.color = "black";
    verMas.style.margin="15px";

//asignando data de los eventos
    imagen.src = events.image;
    titulo.textContent = events.name;
    descripcion.textContent = events.description;
    precio.textContent = "Precio $ " + events.price;

    card_c.appendChild(imagen);
    card_cc.appendChild(titulo);
    card_cc.appendChild(descripcion);
    card_cc.appendChild(precio);
    card_cc.appendChild(verMas);


    card_c.appendChild(card_cc);
    fragment.appendChild(card_c);
}

cards.appendChild(fragment);

