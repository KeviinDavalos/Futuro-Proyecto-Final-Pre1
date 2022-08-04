function mult(num1 = 0, num2 = 0) {
    return num1 * num2
}

function ticket(nomProducto, cantProducto, precioProducto, precioFinal) {
    return (`Tienda: TOUCH MIRROR\n${nomProducto}\n\n Cantidad: ${cantProducto} Total: $${precioProducto}\n\n PRECIO FINAL: $${precioFinal}\n`)
}

class Producto {
    constructor(nomProducto = "") {
        this.nomProducto = nomProducto;
    }
}
alert("Bienvenido a nuestra tienda de ventas de Espejos Led")
const productos = []
let repetir = true
while (repetir) {
    let nomProducto, cantProducto = 0, pregunta, precioProducto = 0, precioFinal = 0

    nomProducto = parseInt(prompt("SELECCIONE EL PRODUCTO QUE DESEA COMPRAR\n 1) Espejo Circular $1000\n 2)Espejo Rectangular $2000\n 3)Espejo Especial $3000\n 4)Espejo Personalizado $4000"))
    cantProducto = parseInt(prompt("Cuantos desea solicitar tenemos stock suficiente"))
    
    switch (nomProducto) {
        case 1:
            nomProducto = "Espejo Circular"
            break;
        case 2:
            nomProducto = "Espejo Restangular"
            break
        case 3:
            nomProducto = "Espejo Especial"
            break
        case 4:
            nomProducto = "Espejo Personalizado"
            break
        default:
            alert("Opcion no valida, por favor intente de nuevo")
            continue
    }
    alert(`El producto es ${nomProducto} con valor de $`)
    const producto = new Producto(nomProducto)
    productos.push(producto)
    
    precioFinal = mult(precioProducto, cantProducto)
    console.log(ticket(nomProducto, cantProducto, precioProducto, precioFinal))
    do {
        pregunta = prompt("Gracias por su pedido! Desea realizar otra? (SI/NO)").toLowerCase()
    } while (pregunta != "si" && pregunta != "no")
    if (pregunta == "no") {
        repetir = false
        alert("Gracias por su Compra, puede revisar su ticket x consola.")
    }
}
console.log(productos)
