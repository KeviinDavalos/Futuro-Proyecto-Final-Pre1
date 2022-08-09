function mult(num1, num2){
    return num1 * num2
}

function mostrarTicket(nomProducto, cantProducto, precioProducto, precioTotal){
    return (`Tienda: TOUCH MIRROR\n Producto:${nomProducto}\n Cantidad:${cantProducto}\n Precio:${precioProducto}\n TOTAL:${precioTotal}`)
}

class Producto{
    constructor(nomProducto, precio){
        this.nomProducto = nomProducto;
        this.precio = precio;
    }
}

const producto1 = new Producto("Espejo Circular", 1000);
const producto2 = new Producto("Espejo Rectangular", 2000);
const producto3 = new Producto("Espejo Especial", 3000);
const producto4 = new Producto("Espejo Personalizado", 4000);

const productos = [producto1,producto2,producto3,producto4];

alert("Bienvenido a nuestra tienda de ventas de Espejos Led");

let opcion = true;
while (opcion){
    let nomProducto, cantProducto, respuesta, precioProducto = 0, precioTotal = 0
    nomProducto = parseInt(prompt("Seleccione el producto que desea comprar\n 1) Espejo Circular $1000\n 2) Espejo Rectangular $2000\n 3) Espejo Especial $3000\n 4) Espejo Personalizado $4000"))
    cantProducto = parseInt(prompt("Cuantos desea solicitar tenemos stock suficiente"))
    switch (nomProducto) {
        case 1:
            nomProducto = "Espejo Circular"
            precioProducto = 1000
            break;
        case 2:
            nomProducto = "Espejo Resctangular"
            precioProducto = 2000
            break;
        case 3:
            nomProducto = "Espejo Especial"
            precioProducto = 3000
            break;
        case 4:
            nomProducto = "Espejo Personalizado"
            precioProducto = 4000
            break;
        default:
            alert("Opcion Invalida, intente de nuevo")
            continue;
    }
    alert(`El producto es ${nomProducto} con valor de $${precioProducto}`)

    precioTotal = mult(precioProducto, cantProducto)
    console.log(mostrarTicket(nomProducto,cantProducto,precioProducto,precioTotal))
    do{
        respuesta = prompt("Gracias x su pedido! Desea realizar otra?").toLowerCase()
    }while (respuesta != "si" && respuesta != "no")
    if (respuesta == "no") {
        opcion = false;
        alert("Gracias x su compra ticket x consola")
    }
}

// Aplicando DOM
const divProductos = document.getElementById("productos")
productos.forEach(producto => {
    divProductos.innerHTML += `
        <div>
            <h5>${producto.nomProducto}</h5>
            <p>$${producto.precio}</p>
            <button>Agregar al carrito</button>
        </div>
    `
})