// 1. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var string_lower = "Es mejor encender una vela que maldecir la oscuridad";
var string_upper = string_lower.toUpperCase();
console.log(string_upper); 

// 2. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var majorstring ="Quien pecho abarca, loco aprieta";
var substring = majorstring.substring(0,10);
console.log(substring);

// 3. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var original_string = "¿Acaso olvidar no es recordar sin querer?";
var modified_string = original_string.substring(original_string.length -3);
console.log(modified_string)

/* 4. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/
var first_string = "Es más fácil Desarmar una Bomba que un Prejuicio";
let second_string = first_string.substring(0, 1).toUpperCase() + first_string.substring(1).toLowerCase();
console.log(second_string)

/* 5. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */
var main_string = "Crear, construir, aunque te equivoques; nunca dejes de luchar por ser feliz.";
var first_space_caracter = main_string.indexOf(" ");
console.log(first_space_caracter);

/* 6. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
var longer_strings = "yuxtaposición extrovertida";
var first_whitespace = longer_strings.indexOf(" ");
var second_whitespace = longer_strings.indexOf(" ", second_whitespace + 1);

var first_word = longer_strings.substring(0, first_whitespace).toLowerCase();
var first_wordchanged = first_word.substring(0, 1).toUpperCase() + first_word.substring(1);
var second_word = longer_strings.substring(second_whitespace + 1).toLowerCase();
var second_wordchanged = second_word.substring(0, 1).toUpperCase() + second_word.substring(1);

var new_string = first_wordchanged + " " + second_wordchanged;
console.log(new_string);