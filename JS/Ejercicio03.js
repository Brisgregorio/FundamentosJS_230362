// Objetos 

const bg= "linear-gradiet(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; 1.0; font-weight: bold `

console.log("%c1,- Variables Independientes", style_console);
// Declaramos variables independientes relacionadasa un PRODUCTO



let Producto_nombre= "Telefono Gamer \"";
let Producto_marca= "Oppo";
let Producto_modelo= "Reno 12F";
let Producto_precio= 8893.67;
let Producto_Disponibilidad= true;
let Producto_SKU= Symbol("NVFWE9W-E4Y65Y") 
let Producto_Stock= 15;
let Producto_Barcode;
let Producto_categoria= ["Electronicos", "Telefonia", "Gamming", "Promociones de marca", "Porductos mas comprados"];
console.log (`Los datos del producto son: \n
    Nombre: ${Producto_nombre}, Tipo de Dato <${typeof(Producto_nombre)}>
    Marca: ${Producto_marca}, Tipo de dato <${typeof(Producto_marca)}>
    Modelo: ${Producto_modelo}, Tipo de Dato <${typeof(Producto_modelo)}>
    Precio: ${Producto_precio}, Tipo de dato <${typeof(Producto_precio)}>
    Disponibilidad: ${Producto_Disponibilidad}, Tipo de dato <${typeof(Producto_Disponibilidad)}>
    Stock: ${Producto_Stock}, Tipo de dato <${typeof(Producto_Stock)}>
    Barcode: ${Producto_Barcode}, Tipo de dato <${typeof(Producto_Barcode)}>
    categoria: ${Producto_categoria}, Tipo de dato <${typeof(Producto_categoria)}>
`);
console.log(
    "En el caso del SKU al ser Symbol, no se puede concatenara a la cadena de la imprecion anterios "
);

console.log(Producto_SKU);
console.log(typeof Producto_SKU);


// declaracion de objetos
console.log("%c2.- Objeto", style_console);
let Producto = 
{
    Nombre : "Motocicletas", 
    Marca: "Yamaha",
    Modelo: "R 6", 
    Precio: 189990.25,
    Disponibilidad: false,
    Stock: 0,
    SKU: "DZ5485-612",
    Imagen: "",
    Barcode:null,
    Categorias: ["TRANSPORTE", "TODO TIPO DE CLIENTE MAYOR 18"]
}
// Ahora leemos el objeto completo
console.table(Producto)

console.log("Accediendo a propiedades específicas del PRODUCTO")
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)
if(Producto.Disponibilidad == 0)
console.log(`Estatus: Agotado`)
else 
console.log(`Estatus: ${Producto_Stock} unidades disponibles.`);


// Desestructuración de Objetos.

console.log("%c3.- Estructuracion de datos", style_console);

let Producto2 =
{   
    Clave: 111,
    Nombre : "Televisiones", 
    Marca: "Samsung",
    Modelo: "smart tv", 
    Precio: 7995.00,
    Disponibilidad: true,
    Stock: 9,
    SKU: "VGE5-GE5TY",
    Imagen: " ",
    Barcode:  634967967,
    Categorias: ["Entretenimiento", "Hogar", "Familia", "Electronicos"]
}


let Comprador =
{
    Clave: 7854,
    Nombre: "NALLELY",
    Apellidos: "GARCIA GREGORIO",
    Tipo: "Frecuente",
    Correo: "nalle@ly.com",
    PaisOrigen: "México",
    SaldoActual: 14000.00
}

let Pedido= {
    Producto_Clave: 316, 
    Comprador_Clave: 3216,
    Cantidad: 2, 
    Estatus: "Carrito de Compra",
    TipoPago: "Tarjeta de Crédito"
}

// En base  a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con sus saldo a favor

let {Precio: Producto_Precio2 } = Producto2; 
let {Cantidad:Pedido_Cantidad} = Pedido;
let {SaldoActual: Cliente_SaldoActual} = Comprador;
let Costo_Compra= Producto_Precio2 * Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} undidades, con un costo total de: $${Costo_Compra}`);
if(Costo_Compra< Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente.");

// Actualizar el valor de los Objetos

// Los objetos tambien pueden representarse en formato tabala utilizando la funcion consle.table



console.table(Producto)

 // Accder a las propiedades de un objeto
// console.warn("---Leyendo las propiedades de un objeto y sus tipos de dato\n"); del Producto: ${produc.Nombre) que es del tipo: $(typeof(produc.Nombre)}");

// console.log(Nombre console.log("Marca: ${produc.Marca) que es del tipo $(typeof(produc.Marca)}'); 

// console.log("Costo compra: ${produc.costo_compra) que es del tipo $(typeof(produc.costo_compra)}'); console.log(Costoventa: ${produc.costo_venta) que es del tipo $(typeof(produc.costo_venta)}');

// console.log("Disponible: ${produc.disponi) que es del tipo ${typeof(produc.disponi)}");

// console.log("SKU: ${String(produc.sku)} que es del tipo ${typeof(produc.sku)}');

// console.log("Colores: $(produc.colores) que es del tipo $(typeof(produc.colores)}');

// ¿Puedo cambiar no solo el valor, sino el tipo de dato de un Objeto en JavaScri 
console.log('---------------------------------------------------------')

    console.log('El objeto actualmente tiene los siguientes valores')
    
     let tipoDisponibilidad = typeof(Producto2.Disponibilidad)
    
    console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`);
    
     console.log(JSON.stringify(Producto2, null, 2)); // Disponiblidad Booleano
    
    Producto2.Disponibilidad="Si";
    
     let nuevoTipoDisponibilidad = typeof(Producto2.Disponibilidad)
    
     console.log(Producto2);
    
     console.log(`El nuevo tipo de dato de la disponibilidad es: ${nuevoTipoDisponibilidad}`);




     // Agregamos nuevas propiedades a un objeto existente


     console.log("%c5.-Agregacion de propiedades de un objeto", style_console);
 console.log("Objeto antes de ser modificado")

 console.log(JSON.stringify(Comprador));
// Agregando propiedades 
 Comprador['Direccion']= "Av. 05 de mayo #15, interior 4A, Xicotepec de Jurez, Puebla, Mexico "
 Comprador['Tipo']="Premium"
Comprador['Estatus']="Inactivo"   
 Comprador['TotalCompras']= 50000.00
 console.log("objeto despues de ser modificado")
 console.table(Comprador)

// Eliminamos propiedades del objeto exitente
console.log("%c6.-Eliminamos la propiedad de un objeto mutacion", style_console);
console.log ("Antes de ser modificado")
delete Pedido.TipoPago;
console.log("Despues de ser modificado")

console.table(Pedido)

console.log("%c7.- Metodos para controlar la mutabvilidad de los objetos, Congelados(FREEZE))", style_console)
// SI DESEAMOS NO PERMITIR QUE LOS OBJETOS SEAN NO MODIFICADOS NI EN ESTRUCTUR,  NI VALOR, UTILIZAREMOS EL METODO FREEZE (congelar)
console.log('la estructura actual de nuestro objeto comprador es: ')
console.table(Comprador)
Object.freeze(Comprador)
// intentamos agregar, modificar valores de sus propiedades
Comprador.FechaUltimaCompra="05/09/2024 10:15:25"
delete Comprador.Tipo;
Comprador.Direccion="calle 16 de septiembre #102, col. Manantiales, huahuchinango, puebla, mexico";
console.log('verificamos si se actualizaron los camvios')
console.table(Comprador)


console.log("%c7.- Metodos para controlar la mutabilidad de los objetos (SEAL))", style_console)

// sin en bargo en el caso de poder modificar los valores de las propiedades del objeto por su estructura usaremos seal
Object.seal(Pedido)

Pedido['Fechapedido'] = "25,09,2024 11:25:25" 
delete Pedido ['Cantidad']
console.log('Verificamos que si se actualizaran los cambios')
console.table(Pedido)
Pedido.Cantidad=5
console.log('verificamos si se realizaron los acambios en el objto'
)
console.table(Pedido)


// Dsestructuracion de 2 o mas objetos
console.log("%c9.- Desestructuracion de 2 o mas objetos", style_console);



// siempre va declarado con el nombre que tiene en el objeto y luego el nuevo nombre
let{Precio: productoPrecio, SKU: productoSKU, Marca: productoMarca}=Producto
let{Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo, Tipo: clienteTipo}=Comprador


// transformar valores cuantitativos en cualitativos

if(productoPrecio>2000)
    productoPrecio="CARO"
else productoPrecio="Barato"
if (clienteSaldo>0)
    clienteSaldo="A favor"
else if(clienteSaldo<0)
clienteSaldo="En contra"
else
clienteSaldo="Sin deuda"



// transformar valores cualitativos a cuantitativos
let clienteNivel;
if(clienteTipo="Premium")
    clienteNivel=1
if(clienteTipo=="Freemium")
    clienteNivel=2
if(clienteTipo=="No identificado")
clienteNivel=3

// transformar o clasificar al cliente por su pais de origen
if(clientePais== "Mexico")
 clientePais="Nacional"
else
clientePais="Extrangero"

// ole -
let datosClientePromociones={clienteCorreo, clientePais, clienteNivel, clienteSaldo, productoMarca, productoPrecio}
// el nuevo objeto que creamos seria un objeto de la informacion que enviariamos al area de marketing para la difucion de productos

console.log("datos del cliente y sus datos a comprar")
console.table(datosClientePromociones)







// operaciones sobre objetos 

// union de objetos 

console.log("%c10.- ", style_console);





















// const producto = {
//     nombre: "table 9\"",
//     marca:"Mac",
//     Modelo:"iPad",
//     costo_compra:15000.25,
//     costo_venta:16516,
//     disponible: true,
//     SKU: Symbol("Linkin Park"),
// Colores: ["Blanco","Negro","Rosa","Azul","Amarillo"]
// }
// console.warn ("-----------Objetos")
// // los objetos ya pueden representarce en formato de tabla
// console.log(producto);
// console.table(producto);
 
// console.warn ("Leyendo las propiedades de un objeto y sus tipos de dato")
// console.log(`Nombre del producto: ${producto.nombre} que es el tipo: ${typeof(nombre)}`)




// console.log(producto.nombre);
// console.log(producto.precio);
// console.log(producto.disponible);

// // Destructuring
// const { nombre,precio,disponible} =  producto;
// console.log(nombre);
// console.log(precio);
// console.log(disponible);

// // Object literal enhacenect
// const autenticado =true;
// const usuario = "juan";

// const nuevoObjeto = {
//     autenticado: autenticado,
//     usuario:usuario
// }
// console.table(nuevoObjeto)
