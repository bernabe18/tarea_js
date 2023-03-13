// En el home.html deben haber tantas tarjetas como eventos haya en el array de eventos.
let fragment = document.createDocumentFragment();
let Contenedorcategory = document.getElementById("category");
let cards = document.getElementById("cards");
let box_check = document.querySelectorAll(".box_check");
cards.className = "row m-3";


//1- Incorporar filtros por input search y checkbox por categorías.
let checkboxButtons = document.querySelectorAll(".checkbox");
box_check.forEach(checkbox => checkbox.addEventListener("click", filtrarCards));

crearTarjeta(allEvents);
filtrarCheck(allEvents);

//esta funcion sirve para comparar el valor de check en los filtro y trae los eventos segun su categoria
function filtrarCards(e) {

  if (e.target.checked) {

    checkSelects.push(e.target.value);
    filtrarCheckBox(allEvents, checkSelects);

  } else {

    let DcheckSelects = checkSelects.filter(item => item !== e.target.value);
    checkSelects = DcheckSelects;
    filtrarCheckBox(allEvents, checkSelects);
  }
  return checkSelects;
}