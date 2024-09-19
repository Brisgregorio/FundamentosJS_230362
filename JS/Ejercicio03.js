// Objetos 

const producto = {
    nombre: "table 9\"",
    marca:"Mac",
    Modelo:"iPad",
    costo_compra:15000.25,
    costo_venta:16516,
    disponible: true,
    SKU: Symbol("Linkin Park"),
Colores: ["Blanco","Negro","Rosa","Azul","Amarillo"]
}
console.warn ("-----------Objetos")
// los objetos ya pueden representarce en formato de tabla
console.log(producto);
console.table(producto);
 
console.warn ("Leyendo las propiedades de un objeto y sus tipos de dato")
console.log(`Nombre del producto: ${producto.nombre} que es el tipo: ${typeof(nombre)}`)




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
