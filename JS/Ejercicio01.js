// COMENTARIOS DE UNA SOLA LÍNEA
/* Comentarios multilinea */

// EJERCICIO 01: DECLARACIÓN DE VARIABLES
// a) Var

var miNombre = "Brisa N.";
var misApellidos;

var miEdad = "20";

// El objetivo de console es permitirnos enviar datos a la terminal y poder visualizar el valor de una variable o resultado de una función o método
console.warn("-------------------DECLARACIÓN DE VARIABLES USANDO: VAR");

console.log(miNombre, misApellidos);
misApellidos = "García Gregorio";
console.log("Ya que ambas fueron inicializadas, vuelvo a intentar leerlas:", miNombre, misApellidos);
// Una variable puede cambiar en el proceso de ejecución del programa

// b) Const
console.warn("--------------------");

const miUniversidad = "UT Xicotepec";
const miMatricula = 230362;

console.log("Hola", miNombre, '', misApellidos, '', "sé que estudias actualmente en:", miUniversidad, "te asignaron la matrícula", miMatricula, "y tienes la edad de", miEdad, "años.");
// Para saber el tipo de dato que tiene una variable o constante, podemos utilizar la función typeof()
console.log("Analizando los datos puedo deducir que:");
console.log("miNombre es de tipo:", typeof(miNombre));
console.log("misApellidos es de tipo:", typeof(misApellidos));
console.log("miUniversidad es de tipo:", typeof(miUniversidad));
console.log("miMatricula es de tipo:", typeof(miMatricula));
console.log("miEdad es de tipo:", typeof(miEdad));

// c) LET
let miFechaNacimiento = "2004-08-24";
let miColorFavorito;
console.warn("--------------------- Declaración de variables Locales usando: LET");
console.log("Genial, te voy conociendo mejor, ahora sé que naciste el:", miFechaNacimiento, "y tu color favorito es: mmmmmmmmmmmmmmmmm déjame pensar....");
miColorFavorito = "Azul";
console.log(`Creo que es ${miColorFavorito}, ¿le atiné?`); // La manera de mezclar textos fijos con el valor actual de las variables se conoce como:
// interpolación y deben iniciar y finalizar con un backtick - tilde inversa
console.log("miColorFavorito es del tipo:", typeof(miColorFavorito));
console.log("miFechaNacimiento es del tipo:", typeof(miFechaNacimiento));




