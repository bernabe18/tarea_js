// Recorrer array eventos y obtener la fecha base de referencia y la fecha del evento para ver si es past o upcoming event. (evento pasado | evento futuro)


var data = {
  "currentDate": "2022-01-01",
  "events": [
    {
      _id: 1,
      "image": "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
      "name": "Collectivities Party",
      "date": "2021-12-12",
      "description": "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      "category": "Food Fair",
      "place": "Room A",
      "capacity": 45000,
      "assistance": 42756,
      "price": 5
    },
    {
      _id: 2,
      "image": "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
      "name": "Korean style",
      "date": "2022-08-12",
      "description": "Enjoy the best Korean dishes, with international chefs and awesome events.",
      "category": "Food Fair",
      "place": "Room A",
      "capacity": 45000,
      "assistance": 42756,
      "price": 10
    },
    {
      _id: 3,
      "image": "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
      "name": "Jurassic Park",
      "date": "2021-11-02",
      "description": "Let's go meet the biggest dinosaurs in the paleontology museum.",
      "category": "Museum",
      "place": "Field",
      "capacity": 82000,
      "assistance": 65892,
      "price": 15
    },
    {
      _id: 4,
      "image": "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
      "name": "Parisian Museum",
      "date": "2022-11-02",
      "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
      "category": "Museum",
      "place": "Paris",
      "capacity": 8200,
      "estimate": 8200,
      "price": 3500
    },
    {
      _id: 5,
      "image": "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
      "name": "Comicon",
      "date": "2021-02-12",
      "description": "For comic lovers, all your favourite characters gathered in one place.",
      "category": "Costume Party",
      "place": "Room C",
      "capacity": 120000,
      "assistance": 110000,
      "price": 54
    },
    {
      _id: 6,
      "image": "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
      "name": "Halloween Night",
      "date": "2022-02-12",
      "description": "Come with your scariest costume and win incredible prizes.",
      "category": "Costume Party",
      "place": "Room C",
      "capacity": 12000,
      "estimate": 9000,
      "price": 12
    },
    {
      _id: 7,
      "image": "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
      "name": "Metallica in concert",
      "date": "2022-01-22",
      "description": "The only concert of the most emblematic band in the world.",
      "category": "Music Concert",
      "place": "Room A"
      , "capacity": 138000,
      "estimate": 138000,
      "price": 150
    },
    {
      _id: 8,
      "image": "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
      "name": "Electronic Fest",
      "date": "2021-01-22",
      "description": "The best national and international DJs gathered in one place.",
      "category": "Music Concert",
      "place": "Room A",
      "capacity": 138000,
      "assistance": 110300,
      "price": 250
    },
    {
      _id: 9,
      "image": "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
      "name": "10K for life",
      "date": "2021-03-01",
      "description": "Come and exercise, improve your health and lifestyle.",
      "category": "Race",
      "place": "Soccer field",
      "capacity": 30000,
      "assistance": 25698,
      "price": 3
    },
    {
      _id: 10,
      "image": "https://i.postimg.cc/zv67r65z/15kny.jpg",
      "name": "15K NY",
      "date": "2022-03-01",
      "description": "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      "category": "Race",
      "place": "New York",
      "capacity": 3000000,
      "assistance": 2569800,
      "price": 3
    },
    {
      _id: 11,
      "image": "https://i.postimg.cc/Sst763n6/book1.jpg",
      "name": "School's book fair",
      "date": "2022-10-15",
      "description": "Bring your unused school book and take the one you need.",
      "category": "Book Exchange",
      "place": "Room D1",
      "capacity": 150000,
      "estimate": 123286,
      "price": 1
    },
    {
      _id: 12,
      "image": "https://i.postimg.cc/05FhxHVK/book4.jpg",
      "name": "Just for your kitchen",
      "date": "2021-11-09",
      "description": "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      "category": "Book Exchange",
      "place": "Room D6",
      "capacity": 130000,
      "assistance": 90000,
      "price": 100
    },
    {
      _id: 13,
      "image": "https://i.postimg.cc/vH52y81C/cinema4.jpg",
      "name": "Batman",
      "date": "2021-03-11",
      "description": "Come see Batman fight crime in Gotham City.",
      "category": "Cinema",
      "place": "Room D1",
      "capacity": 11000,
      "assistance": 9300,
      "price": 225
    },
    {
      _id: 14,
      "image": "https://i.postimg.cc/T3C92KTN/scale.jpg",
      "name": "Avengers",
      "date": "2022-10-15",
      "description": "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      "category": "Cinema",
      "place": "Room D1",
      "capacity": 9000,
      "estimate": 9000,
      "price": 250
    }
  ]
};

//array de eventos segun corresponda
let eventPast = [];
let upcomingEvent = [];
let allEvents = [];

//arrays de funciones
let concidenciasArr = [];
let categoriaFilter = [];
let checkSelects = [];


// si cambio la fecha me cambia la fecha base
// const currentDate =new Date(data.currentDate);
const currentDate = data.currentDate;

// Recorrer array eventos y obtener la fecha base de referencia y la fecha del evento para ver si es past o upcoming event. (evento pasado | evento futuro)
for (let i = 0; i < data.events.length; i++) {
  let element = data.events[i];
  allEvents.push(element)

  if (currentDate <= element.date) {
    eventPast.push(element);
  } else {
    upcomingEvent.push(element);
  }
}

//funcion para que se muestre las categorias
function crearCategoria(categoria) {

  for (let i = 0; i < categoria.length; i++) {

    let listaC = document.getElementById("listac");
    let li = document.createElement("li");
    let label = document.createElement("label");
    let input = document.createElement("input");
    let span = document.createElement("span");

    input.type = "checkbox";
    span.innerText = categoria;
    input.value=categoria;
    li.className = "p-2";

    //estilo
    span.style.margin = "5px";

    listaC.appendChild(li);
    li.appendChild(label);
    label.appendChild(span);
    label.appendChild(input);
  }
   return categoria;
}

//funcion para crear tarjeat
function crearTarjeta(events) {

  for (const event of events) {
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
    verMas.style.margin = "15px";

    //asignando data de los eventos
    imagen.src = event.image;
    titulo.textContent = event.name;
    descripcion.textContent = event.description;
    precio.textContent = "Precio $ " + event.price;

    //agregando 
    card_c.appendChild(imagen);
    card_cc.appendChild(titulo);
    card_cc.appendChild(descripcion);
    card_cc.appendChild(precio);
    card_cc.appendChild(verMas);


    card_c.appendChild(card_cc);
    fragment.appendChild(card_c);
  }

  cards.appendChild(fragment);
}


//esta funcion es para mostar cards un array segun el filtro al que le haga check
function filtrarCheckBox(arrEvent, arrInputs) {

  if (arrInputs.length === 0) {
    cards.innerHTML=""
    crearTarjeta(arrEvent);
  } else {
    cards.innerHTML=""
    concidenciasArr = [];
      arrEvent.forEach(element => {

        for (const input of arrInputs) {
          if (element.category == input) {
            concidenciasArr.push(element);
          }
        }
      });
    crearTarjeta(concidenciasArr);
  }
}

// esta funcion sirve para que los check no se repitan
function filtrarCheck(arr){

  arr.forEach((event) => {
  if (!categoriaFilter.includes(event.category)) {
    categoriaFilter = []
    categoriaFilter.push(event.category);
    crearCategoria(categoriaFilter);
  }
});
}


  
//1- Incorporar filtros por input search y checkbox por categorías.

//2- Los filtros deben funcionar tanto de forma independiente como combinada.

//3- En caso de que no se encuentre ningún evento con los filtros, se debe pedir al usuario que ajuste los filtros para encontrar un evento.

//4- Los filtros deben estar presentes en las páginas Inicio, Eventos pasados y Eventos futuros.

//5- Al hacer clic en la tarjeta del evento, éste debe aparecer en la página Detalle.

// RECOMENDACIONES:

// Incorpore entradas de búsqueda y casillas de verificación de categorías en sus páginas de Inicio, Eventos pasados y Eventos futuros.

// Te aconsejamos que empieces por el input de búsqueda, capturando los datos que el usuario teclee en este, ordenando la cadena que has capturado y pasándola a minúsculas, después filtra estos datos con el nombre del evento del fichero de datos también pasado a minúsculas para igualar los valores y finalmente guarda el array resultante del filtro para mostrarlo en tu html.

// Para las casillas de verificación, te aconsejamos que extraigas las categorías dinámicamente del fichero de datos del evento, elimines las repetidas para obtener un único valor para cada una y luego con el array resultante del filtro lo muestres en tu html.

// Para que los filtros funcionen en combinación, define condicionales que evalúen si la entrada tiene un valor o si las casillas de verificación están marcadas.
