// Tipos de datos en JavaScript
// 1. Undefined
console.warn("-------------------- TIPO DE DATO UNDEFINED-------------");

let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
cliente = "Juan Romero";
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente = 41654;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

// Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas

// 2. Boolean
console.warn("-------------------- TIPO DE DATO BOOLEAN (Boleano - true or false)");

let esPremium = "No lo sé";
console.log(`¿Es el cliente Premium? : ${esPremium}`);

// Antes de definir, es de tipo string
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log("Asignando el valor true a la variable ");
esPremium = true;
// Después de definir ya aparece que es de tipo boolean, ya que se definió como true o verdadero
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

// En caso de no tener premium, la variable se iguala a 0 para indicar que el usuario no tiene premium
esPremium = 0;
console.log(`¿Es el cliente Premium? : ${esPremium}`);
if (esPremium)
    console.log("El cliente pagó por usar el servicio");
else
    console.log("El cliente es un usuario que recibe los servicios gratuitos");

// 3. Number
var cantidad;
const costo_producto = 10.50;
let saldo_cuenta = -2500.40;
let monto_transaccion;
console.warn("------------------ Tipo de Dato -Number (Números: positivos, negativos, decimales y flotantes)");
console.log(`Tu saldo al día de hoy es de: ${saldo_cuenta}, (tipo de dato= ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`);
cantidad = 8;
console.log(`Has elegido comprar: ${cantidad} productos.`);
console.log(`El importe total de la compra es: ${cantidad * costo_producto}`);
saldo_cuenta = saldo_cuenta - (cantidad * costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);

// El cliente realiza un abono de 1500
monto_transaccion = 1500;
console.log(`Tu abono de: ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${saldo_cuenta + monto_transaccion}`);

// BigInt
console.warn("--- Tipo de Dato BIGINT (Números Amplios)");

const numeroGrande = 1234567890;
const numeroGrande2 = 12345678901234567898n;
const numeroGrande3 = 12345678901234567890123456789n;
const numeroGrande4 = 123456789012345678901234567891234567890n;

console.log(`El primer experimento de un número grande es: ${numeroGrande}, soportado por Number, y su tipo de dato es: ${typeof(numeroGrande)}`);
console.log(`El primer experimento de un número grande2 es: ${numeroGrande2}, que es de tipo: ${typeof(numeroGrande2)}`);

let numero = 238;
console.log(`El resultado de la operación de: numeroGrande4 / numero es = ${numeroGrande4 / BigInt(numero)}`);

// 6. SYMBOL
const numero1 = 2;
const numero2 = 2.0;
const numero3 = "2";
const numero4 = "2.0";
const numero5 = Symbol(2);
const numero6 = Symbol(2.0);
const numero7 = Symbol("2");
const numero8 = Symbol("2.0");
const numero9 = Symbol("2");

// Pruebas de comparación
if (numero1 == numero2)
    console.log("Se han comparado los valores de numero1 y numero2, y confirmado que tienen el mismo valor.");
else
    console.log("Se han comparado los valores de numero1 y numero2, y confirmado que no tienen el mismo valor.");

if (numero1 == numero3)
    console.log("Se han comparado los valores de numero1 y numero3, y confirmado que tienen el mismo valor.");
else
    console.log("Se han comparado los valores de numero1 y numero3, y confirmado que no tienen el mismo valor.");

if (numero1 === numero3)
    console.log("Se han comparado los valores de numero1 y numero3, y confirmado que tienen el mismo valor.");
else
    console.log("Se han comparado los valores de numero1 y numero3, y confirmado que no tienen el mismo valor.");

// Comparación de Symbols
console.log("Comparación de Symbol(2) con Symbol('2')");
if (numero5 === numero7)
    console.log("Se han comparado los valores de numero5 y numero7, y confirmado que tienen el mismo valor.");
else
    console.log("Se han comparado los valores de numero5 y numero7, y confirmado que no tienen el mismo valor.");

// NULL
console.warn("---Tipo de dato: NULL (nulo o vacío)");

let nombrUsuario = null;
let passUsuario = null;
let generoUsuario = null;
let estatusRelacionSentimental = null;
let fecha_ultimaHost = null;

nombrUsuario = "Brisa230362@gmail.com";
passUsuario = "Brisa230362";
console.log(`El usuario ${nombrUsuario} está intentando iniciar sesión con la contraseña ${passUsuario}.`);

generoUsuario = "M";
console.log(`El usuario ${nombrUsuario} se ha logueado correctamente, su género es ${generoUsuario} y su estado de relación es ${estatusRelacionSentimental}. Última publicación: ${fecha_ultimaHost}.`);

// Comparación de NULL vs undefined
console.log("Comparación de igualdad entre undefined y null");
(fecha_ultimaHost == estatusRelacionSentimental) ?
    console.log("Ambas variables tienen el mismo valor") :
    console.log("Las variables no tienen el mismo valor");

console.log("Comparación de identidad entre undefined y null");
(fecha_ultimaHost === estatusRelacionSentimental) ?
    console.log("Ambas variables tienen el mismo valor y tipo de dato") :
    console.log("Las variables tienen el mismo valor pero no el mismo tipo de dato");

// FUNCTION (Función)
console.warn("---Tipo de dato: Function (Función)");

const saludar = function (nombre) { return `¡Hola, ${nombre}!`; };
console.log(saludar('Brisa'));
console.log(`El tipo de dato de la constante saludar es: ${typeof(saludar)}`);

    



