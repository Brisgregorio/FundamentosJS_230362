// // Tipos de datos js
// // 1. Unidefined
// console.warn("-------------------- TIPO DE DATO UNIDEFINED-------------")


// let cliente;
// console.log(`El cliente es: ${cliente}`);
// console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
// cliente= "Juan Romero"
// console.log(`El cliente es: ${cliente}`);
// console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

// cliente= 41654
// console.log(`El cliente es: ${cliente}`);
// console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

// // Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas

// // 2.BOOLEAN
// console.warn("-------------------- TIPO DE DATO BOOLEAN (Boleano - true or false)")


// let esPremium = "No lo se";
// console.log(`¿Es el cliente Premium? : ${esPremium}`);

// // antes de definir sale que es de tipo string
// console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
// console.log("Asignando el valor true a la variable ")
// esPremium=true
// // despues de definir ya aparece que es de tipo boolean ya que se definio como true o verdadero
// console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

// // en caso de no tener el premium la variable se iguala a 0 para poder decir que el usuario no tiene premium

// esPremium=0
// console.log(`¿Es el cliente Premium? : ${esPremium}`);
// if(esPremium)
// console.log("El clientre pagó por usar el servicio");
// else
// console.log("El clientre es un usuario que recibe los servicios gratuitos");

// // 3. Number

// var cantidad;
// const costo_producto = 10.50
// let saldo_cuenta = -2500.40
// let monto_transaccion;
// console.warn("------------------ Tipo de Dato -Number (Numeros, positivos, negativod, decimales y flotantes)");
// console.log(`Tu saldo al dia de hoy es de: ${saldo_cuenta}, (tipo de dato= ${typeof(saldo_cuenta)})`)
// console.log(`El producto que has seleccionado cuesta: ${costo_producto}`)
// cantidad=8;
// console.log(`Has elegido comprar: ${cantidad} de productos.`)
// console.log(`El importe total de la compra es: ${cantidad*costo_producto}`)
// saldo_cuenta=saldo_cuenta- (cantidad*costo_producto);
// console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);
// // El cliente realiza un abono de 1500
// monto_transaccion=1500;
// console.log(`Tu abono de: ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${saldo_cuenta+monto_transaccion}`);

// // // String o cadenas de texto
// // const alumno = "Juan";
// // let producto = "Monitor 20 pulgadas";

// // const numero = "30";
// // nost numero2 =30;
// // console.log (type numero);
// // console.log(typeof numero2);

// //Bignit
// // const numeroGrande = BigInt (769696969646875987);
// // console.log(typeof numeroGrande);

// // const numero = 10;
// // const numero2 =20;
// // console.log( numero= Number(numeroGrande));


// //Symbolo
// // const primerSymbol = Symbol(30)
// // const segundoSymbol = Symbol(30)
// // console.log(primerSymbolo === segundoSymbol)
// // console.log(primerSymbol.valueOf())
// // console.log(segundoSymbol.valueOf())

// // const descuento =null;
// // console.log(typeof descuento);



// // para definir el tipo de dato BigInt debemos inbocar la funcion de BigIn o usar una letra "n" al final del numero en la asignacion del valor


// // hay que conciderar que los tipos de datos declarados como bigin no son operables con los tipos de dato number 
// //físicos o espaciales donde se requiere de una excelente precisión numérica.

//  console.warn("--- Tipo de Dato BIGINT (Número Ampplio");

//  const numeroGrande= 1234567890

//  const numeroGrande2 =12345678901234567898



// const numeroGrande3= 12345678901234567890123456789



// const numeroGrande4 =123456789012345678901234567891234567890

//  console.log('El primero experimento de un numero grandre es: ${numeroGrande}, que si es soportado por NUMBER,y su tipo de dato es: ${typeof(numeroGrande)}');

//  console.log('El primero experimento de un numero grandre es: ${numeroGrande}, que si es soportado por NUMBER,y su tipo de dato es: ${typeof(numeroGrande)}');

//  console.log('El primero experimento de un numero grandre es: ${numeroGrande}, que si es soportado por NUMBER,y su tipo de dato es: ${typeof(numeroGrande)}');

//  console.log('El primero experimento de un numero grandre es: ${numeroGrande}, que si es soportado por NUMBER,y su tipo de dato es: ${typeof(numeroGrande)}');



// // // Para definir el tipo de dato BigInt debemos invocar la función Bigint o usar un la letra "s" al final del número en la asignación de valor.

// // console.log("Declaramos los valores númericos gran tamaño...")

// //  numeroGrande3 BigInt(12345678901234567890123456789); numeroGrande4 123456789012345678901234567891234567890n;

// PHILIPS
// console.log("Declaramos valores numericos gran tamaño")
// numero


// let numero= 238;
// console.log(`el resultado de la operacion de: numeroGrande4/ numero es = a: ${numeroGrande4/BigInt(numero)}`);


// 6. SYMBOL
const numero1=2;
const numero2=2.0;
const numero3="2";
const numero4="2.0";
const numero5= Symbol(2);
const numero6= Symbol(2.0);
const numero7= Symbol("2");
const numero8= Symbol("2.0");
const numero9= Symbol("2");


//---------------------------    Prueba de compulacion 1---------------------------------
if(numero1== numero2)
{
    console.log(`Se han comparado los valores de nuestros numero1 y numero2, y confirmado que tiene el mismo valor ,`)
}
else
{
    console.log(`Se an comparado los valores de nuestros numero1 y numero2, y confirmado que No tiene el mismo valor ,`)

}

//---------------------------    Prueba de compulacion 2  ---------------------------------
if(numero1== numero3)
    {
        console.log(`Se han comparado los valores de nuestros numero1 y numero3, y confirmado que tiene el mismo valor ,`)
    }
    else
    {
        console.log(`Se an comparado los valores de nuestros numero1 y numero3, y confirmado que No tiene el mismo valor ,`)
    
    }

    //---------------------------    Prueba de compulacion 3---------------------------------
if(numero1=== numero3)
    {
        console.log(`Se han comparado los valores de nuestros numero1 y numero3, y confirmado que tiene el mismo valor ,`)
    }
    else
    {
        console.log(`Se an comparado los valores de nuestros numero1 y numero3, y confirmado que No tiene el mismo valor ,`)
    
    }

    //---------------------------    Prueba de compulacion 4---------------------------------
    console.log("prueba de comparacion 4: ¿es 2 = \"2\"?")
    if(numero1=== numero4)
        {
            console.log(`Se han comparado los valores de nuestros numero1 y numero4, y confirmado que tiene el mismo valor ,`)
        }
        else
        {
            console.log(`Se an comparado los valores de nuestros numero1 y numero4, y confirmado que No tiene el mismo valor ,`)
        
        }
    

         //---------------------------    Prueba de compulacion 5---------------------------------
    console.log("prueba de comparacion 6: ¿es 2 = \"2\"?")
    if(numero1=== numero5)
        {
            console.log(`Se han comparado los valores de nuestros numero1 y numero5, y confirmado que tiene el mismo valor ,`)
        }
        else
        {
            console.log(`Se an comparado los valores de nuestros numero1 y numero5, y confirmado que No tiene el mismo valor ,`)
        
        }
 
             //---------------------------    Prueba de compulacion 6---------------------------------
    console.log("prueba de comparacion 6: ¿es 2 = \"2\"?")
    if(numero2=== numero4)
        {
            console.log(`Se han comparado los valores de nuestros numero2 y numero4, y confirmado que tiene el mismo valor ,`)
        }
        else
        {
            console.log(`Se an comparado los valores de nuestros numero2 y numero4, y confirmado que No tiene el mismo valor ,`)
        
        }


        
             //---------------------------    Prueba de compulacion 7---------------------------------
    console.log("prueba de comparacion 7: ¿es Symbol(2)= Symbol (\"2\)")
    if(numero5=== numero7)
        {
            console.log(`Se han comparado los valores de nuestros numero5 y numero7, y confirmado que tiene el mismo valor ,`)
        }
        else
        {
            console.log(`Se an comparado los valores de nuestros numero5 y numero7, y confirmado que No tiene el mismo valor ,`)
        
        }


             
             //---------------------------    Prueba de compulacion 8---------------------------------
    console.log("prueba de comparacion 8: ¿es Symbol(2)=Symbol(2)? ")
    if(numero5=== numero9)
        {
            console.log(`Se han comparado los valores de nuestros numero5 y numero9, y confirmado que tiene el mismo valor ,`)
        }
        else
        {
            console.log(`Se an comparado los valores de nuestros numero5 y numero9, y confirmado que No tiene el mismo valor ,`)
        
        }


        

    



