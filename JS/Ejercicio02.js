// Tipos de datos js
// 1. Unidefined
console.warn("-------------------- TIPO DE DATO UNIDEFINED-------------")


let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
cliente= "Juan Romero"
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente= 41654
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

// Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas

// 2.BOOLEAN
console.warn("-------------------- TIPO DE DATO BOOLEAN (Boleano - true or false)")


let esPremium = "No lo se";
console.log(`¿Es el cliente Premium? : ${esPremium}`);

// antes de definir sale que es de tipo string
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log("Asignando el valor true a la variable ")
esPremium=true
// despues de definir ya aparece que es de tipo boolean ya que se definio como true o verdadero
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

// en caso de no tener el premium la variable se iguala a 0 para poder decir que el usuario no tiene premium

esPremium=0
console.log(`¿Es el cliente Premium? : ${esPremium}`);
if(esPremium)
console.log("El clientre pagó por usar el servicio");
else
console.log("El clientre es un usuario que recibe los servicios gratuitos");

// 3. Number

var cantidad;
const costo_producto = 10.50
let saldo_cuenta = -2500.40
let monto_transaccion;
console.warn("------------------ Tipo de Dato -Number (Numeros, positivos, negativod, decimales y flotantes)");
console.log(`Tu saldo al dia de hoy es de: ${saldo_cuenta}, (tipo de dato= ${typeof(saldo_cuenta)})`)
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`)
cantidad=8;
console.log(`Has elegido comprar: ${cantidad} de productos.`)
console.log(`El importe total de la compra es: ${cantidad*costo_producto}`)
saldo_cuenta=saldo_cuenta- (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);
// El cliente realiza un abono de 1500
monto_transaccion=1500;
console.log(`Tu abono de: ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${saldo_cuenta+monto_transaccion}`);







