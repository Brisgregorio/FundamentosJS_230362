// cOMENTARIOSS DE UNA SOLA LINEA
/* comentarios multi linea*/

// EJERCICIO 01: DECLARACION DE VARIABLES
 // a) Var

 var miNombre = "Brisa N."
var misApellidos;

var miEdad = "20"

//El objetivo de console nos permite enviar datos a la terminal y poder visualisarel valor de una variable o resultado de una funcion o metodo
console.warn("-------------------DECRARACION DE VARIABLES USANDO : VAR")

console.log(miNombre, misApellidos)
misApellidos = "Garcia Gregorio"
console.log("Ya que ambas fueron inicializadas vuelvo a intentar leerlas:", miNombre, misApellidos);
// una variable puede cambiar en el proceso de ejecucion del programa

// b) Const
console.warn("--------------------")

const miUniversidad= "UT Xicotepec";
const miMatricula=230362;

console.log("Hola", miNombre,'',misApellidos,'',"se que estudias actualmente en:",miUniversidad,"te asignaron la matricula" , miMatricula, "y tienes la edad de ", miEdad,"años.");
// Para saber el tipo de dato que tiene una variable o constante podemos utilizar la funcion typeoF()
console.log("Analizando los datos puedo deducir que: ");
console.log("miNombre es de tipo:", typeof(miNombre));
console.log("misApellidos es de tipo: ", typeof(misApellidos));
console.log("miUniversidad es de tipo: ", typeof(miUniversidad));
console.log("miMatricula es de tipo: ", typeof(miMatricula));
console.log("miEdad es de tipo:", typeof(miEdad));

// c) LET
let miFechaNacimiento= "2004-08-24";
let miColorFavorito;
console.warn("--------------------- Declaracion de variables Locales usando: LET")
console.log("Genial, te voy conociendo mejor ahora se que tu naciste el:",miFechaNacimiento,"y tu color favorito es : mmmmmmmmmmmmmmmmm dejame pensar ....")
miColorFavorito="Azul";
console.log(`creo que es ${miColorFavorito },le atine? `) // La manera de mesclar textos fijos con el valor actual de las variables se le conoce como: 
// interpolacion y deben iniciar y financiar on un backtic - tilde inversa
console.log("miColorFavorito es del tipo: ", typeof(miColorFavorito));
console.log("miFechaNacimiento es del tipo: ", typeof(miFechaNacimiento));




