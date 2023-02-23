/*
1:crear un objeto con 10 propiedades

2: al objeto creado anteriormente aplique cada una de las 
operaciones que ha aprendido, debe aplicar al menos una vez cada operación

3: cree una matriz de datos con los datos de su elección, que contenga al menos 10 elementos

4: en un comentario identifique el número de índices y la longitud de su matriz

5:aplique cada uno de los métodos aprendidos a su matriz, debe aplicar al menos una vez cada método
*/ 
const auto={
   color:"negro",
   puertas:5,
   ruedaAuxilio:true,
   patente:"AA355BF",
   marca:"audi",
   anio:"2022",
   modelo:"A3",
   vtv:true,
   tipoDeCambio:"automatico",
   medidad:{
    altura:1.75,
    ancho:1.80,
    peso:1.400
   }
}
/*

2: al objeto creado anteriormente aplique cada una de las 
operaciones que ha aprendido, debe aplicar al menos una vez cada operación
*/ 
console.log(auto.color);

auto.ruedaAuxilio=false;

delete auto.anio
// console.log(auto);

const auto2= new Object({
    color:"negro",
    puertas:2,
    ruedaAuxilio:true,
    patente:"BB655WI",
    marca:"volvo",
    anio:"2022",
})

console.log(Object.values(auto));

console.log(Object.keys(auto));

console.log(Object.entries(auto2));

//3: cree una matriz de datos con los datos de su elección, que contenga al menos 10 elementos

let juegos=["footballs","hamball","tenis","pool","volleyball","rugby","polo","ping pong","truco"];

//4: en un comentario identifique el número de índices y la longitud de su matriz
// 9 elementos

//5:aplique cada uno de los métodos aprendidos a su matriz, debe aplicar al menos una vez cada método

console.log(juegos.length);

//para capturar o modificar
let element10=juegos[9]="natacion";

console.log(element10)

console.log(juegos.length);

//para eleminar
juegos.shift();
juegos.pop();
console.log(juegos.length);


//para agregar
juegos.push('footboll sala');
console.log(juegos);

//agregar un primera posicion
juegos.unshift('arqueria');
console.log(juegos);

//buscar indice de un elemento
juegos.indexOf('');

//buscar un elemento y nos avisa con un boolean
let seEncuentra=juegos.includes('tenis');
console.log(seEncuentra);

//para convertir todos los elementos en string
console.log(juegos.toString());

//para elegir conque separar cada elemento y nos devuelve todo el array
console.log(juegos.join(';'))

//
console.log(juegos.reverse());