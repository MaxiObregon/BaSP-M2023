/* 1. Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/
/*
function sum() {
  var num_1 = parseFloat(prompt('Enter the first number:'));
  var num_2 = parseFloat(prompt('Enter the second number:'));
  
  if (isNaN(num_1) || isNaN(num_2)) {
    alert('One of the numbers is invalid! Please enter only numeric values.');
    return NaN;
  }
  
  return num_1 + num_2;
}

var result = sum();
console.log(result);
*/


/* 2. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un número; 
de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/
/*
function sum() {
    var num1 = parseFloat(prompt('Enter the first number:'));
    var num2 = parseFloat(prompt('Enter the second number:'));
    
    if (isNaN(num1) || isNaN(num2)) {
      alert('One of the numbers is invalid! Please enter only numeric values.');
      return NaN;
    }
    
    return num1 + num2;
  }

var result = sum();
console.log(result);
*/
/* 3. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero. */
/*
  var num1 = 10;
  var num2 = 3.14;

  function validateInteger(num) {
    return Number.isInteger(num);
  }
  
  console.log(validateInteger(num1));
  console.log(validateInteger(num2));
  */
/* 4. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que valide 
que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado). */

/*
function validateInteger(num) {
    return Number.isInteger(num);
  }
function sumIntegers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));

    
    if (isNaN(num1) || isNaN(num2)) {
      alert("One of the numbers is invalid! Please enter only numeric values.");
      return NaN;
    }
    
    if (!validateInteger(num1) || !validateInteger(num2)) {
      alert("One of the numbers is not an integer! Please enter only integer values.");
      return Math.round(num1) + Math.round(num2);
    }
    
    return num1 + num2;
  }

var result = sumIntegers();
console.log(result);
*/

/* 5. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando 
que todo siga funcionando igual que en el apartado anterior.*/

function sumIntegers() {
    let num1 = parseFloat(prompt('Enter the first number:'));
    let num2 = parseFloat(prompt('Enter the second number:'));
    
    if (isNaN(num1) || isNaN(num2)) {
      alert('One of the numbers is invalid! Please enter only numeric values.');
      return NaN;
    }
    
    if (!validateIntegerInput(num1) || !validateIntegerInput(num2)) {
      alert('One of the numbers is not an integer! Please enter only integer values.');
      return Math.round(num1) + Math.round(num2);
    }
    
    return num1 + num2;
  }
  
  function validateIntegerInput(num) {
    if (!Number.isInteger(num)) {
      return false;
    }
    return true;
  }
  
  let result = sumIntegers();
  console.log(result);
  