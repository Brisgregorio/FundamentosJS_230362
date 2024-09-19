// objetos

const producto = {
    nombre: "tablet",
    precio: 300,
    disponible:true
}

console.log(producto)
console.table(producto)

console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

// Destructuring

const{nombre, precio, disponible} = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

// Object Literal Enhacoment

const  autenticado2 = true
const usuario2 = "Juan"

const nuevoObjeto ={
    autenticado2: autenticado2,
    usuario2: usuario2
}
console.table(nuevoObjeto)


