/* 1. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras. */
/*var titans =  ["attack", "armored", "jaw", "beast", "female"];

for (let i = 0; i < titans.length; i++) {
    alert(titans[i]);
  }
  */


/* 2. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada. */
/*var titans =  ["attack", "armored", "jaw", "beast", "female"];

  for (let i = 0; i < words.length; i++) {
    let modifiedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    alert(modifiedWord);
  }
*/


/* 3. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir 
guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa. */

/*var titans =  ["attack", "armored", "jaw", "beast", "female"];
var new_titans = "";

for (let i = 0; i < titans.length; i++) {
  new_titans += titans[i] + " ";
}

alert(new_titans.trim());*/


/* 4. Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for
 debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log). */
 let empty_array = [];

for (let i = 0; i < 10; i++) {
  empty_array   .push(i);
}

console.log(empty_array);
