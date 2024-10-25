//variable 
let challenge = "30 Days of JavaScript";

//Imprimir variable
console.log(challenge);

//Imprimir longitud de la cadena
console.log(challenge.length);

//Pasar cadena a mayuscula
console.log(challenge.toUpperCase());

//Pasar a minuscula todo
console.log(challenge.toLowerCase());

//cortar primera palabra
console.log(challenge.substring(0,2));

//Cortar la frase
console.log(challenge.substring(3,21));

//Comprobar si la cadena tiene script
console.log(challenge.includes("Script"));

//Dividir la cadena en una matriz
console.log(challenge.split(""));

//Dividir la cadena en el espacio
console.log(challenge.split(" "));

//Divir empresas
let empresas = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(empresas.split(","));

//Metodo reemplazar
console.log(challenge.replace("JavaScript", "Node"));

//Checar caracter en el indice 15
console.log(challenge.charAt(15));

//Checar codigo de caracter
console.log(challenge.charCodeAt("J"));

//Determinar la posicion de la primera aparicion de la "a"
console.log(challenge.indexOf("a"));

//Determinar la posicion de la ultima aparicion de la "a"
console.log(challenge.lastIndexOf("a"));

//Determinar la posicion de la primera aparicion de "porque"
console.log("No puedes terminar una oracion con porque porque porque es una conjuncion".indexOf("porque"));

//Determinar la posicion de la ultima aparicion de "porque"
console.log("No puedes terminar una oracion con porque porque porque es una conjuncion".lastIndexOf("porque"));

//Utilizar la busqueda para la primera posicion de "porque"
console.log("No puedes terminar una oracion con porque porque porque es una conjuncion".search("porque"))

//Eliminar espacios en blanco al principio y final
console.log(" 30 dias de JavaScript ".trim());

//Utilizar metodo startwith
console.log(challenge.startsWith("3"));

//Utilizar metodo 
console.log(challenge.endsWith("t"))

//Encontrar todas las "a"
console.log(challenge.match(/a/g));

//Concatenar cadena
console.log("30 dias de ".concat("JavaScript"));

//Repetir cadena
console.log(challenge.repeat(2));
