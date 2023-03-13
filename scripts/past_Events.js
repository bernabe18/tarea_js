// En el home.html deben haber tantas tarjetas como eventos haya en el array de eventos.
let fragment = document.createDocumentFragment();
let cards = document.getElementById("cards");
let box_check = document.querySelectorAll(".box_check");
let Contenedorcategory = document.getElementById("category");
cards.className = "row m-3";

crearTarjeta(eventPast);
cards.appendChild(fragment);

let checkboxButtons = document.querySelectorAll(".checkbox");
box_check.forEach(checkbox => checkbox.addEventListener("click", filtrarCards));

filtrarCheck(eventPast);

//esta funcion sirve para comparar el valor de check en los filtro y trae los eventos segun su categoria
function filtrarCards(e) {

  if (e.target.checked) {

    checkSelects.push(e.target.value);
    filtrarCheckBox(eventPast, checkSelects);

  } else {

    let DcheckSelects = checkSelects.filter(item => item !== e.target.value);
    checkSelects = DcheckSelects;
    filtrarCheckBox(eventPast, checkSelects);
  }
  return checkSelects;
}