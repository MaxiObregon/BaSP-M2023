/* 1. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
mostrar por consola los meses 5 y 11 (utilizar console.log).*/
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("5to. mes: " + meses[4]);
console.log("11vo. mes: " + meses[10]);


/* 2. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
meses.sort();
console.log(meses);


/* 3. Agregar un elemento al principio y al final del array (utilizar unshift y push)*/

meses.unshift("Saturno");
meses.push("Júpiter"); 
console.log(meses);


/* 4. Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
meses.shift();
meses.pop();
console.log(meses);


/* 5. Invertir el orden del array (utilizar reverse).*/
meses.reverse();
console.log(meses);


/* 6. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/
meses.reverse();
let join_meses = meses.join('-');
console.log(join_meses);


/* 7. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/
let sub_meses = meses.slice(4, 11);
console.log(sub_meses);