const IVA = 1.21
const IMPUESTO_ONLINE= 1.75
let numeroIVA, opcionUsuario, numeroOnline
const CALCULADORA_IVA = (numeroIVA) => numeroIVA * IVA
const CALCULADORA_IMPUESTO_ONLINE = (numeroOnline) => numeroOnline * IMPUESTO_ONLINE
do{
do{
    opcionUsuario = prompt("¿Desea calcular IVA o Impuesto por compras en línea?").toLowerCase()
    if(!(isNaN (opcionUsuario))){
        alert("Por favor escriba una opcion, no utilize números ahora")
    }
}while(!(isNaN(opcionUsuario)))
switch(opcionUsuario){
    case "iva":
        do{
            numeroIVA = parseFloat(prompt("Ingrese un número"))
            if( isNaN (numeroIVA)){
                alert("Por favor, ingrese un número válido")
            }
        }while(isNaN(numeroIVA))
        alert(`El precio final con IVA es de ${CALCULADORA_IVA(numeroIVA)}`)
        break
        case "impuesto por compras en línea":
            do{
                numeroOnline = parseFloat(prompt("Ingrese un número"))
                if( isNaN (numeroOnline)){
                    alert("Por favor, ingrese un número válido")
                }
            }while(isNaN(numeroOnline))
            alert(`El precio final con los Impuestos por compras en línea es de ${CALCULADORA_IMPUESTO_ONLINE(numeroOnline)}`)
            break
            case "impuesto por compras en linea":
                do{
                    numeroOnline = parseFloat(prompt("Ingrese un número"))
                    if( isNaN (numeroOnline)){
                        alert("Por favor, ingrese un número válido")
                    }
                }while(isNaN(numeroOnline))
                alert(`El precio final con los Impuestos por compras en línea es de ${CALCULADORA_IMPUESTO_ONLINE(numeroOnline)}`)
                break
            default: alert("Opción no válida")
}
continuar = prompt("¿Desea realizar otra operación?").toLowerCase()
}while(continuar != "no")
class Usuraio { 
    constructor(id, nombre, email, dineroCuenta){
        this.id = id
        this.nombre = nombre
        this.email = email
        this.dineroCuenta = dineroCuenta
    }
}
const user1 = new Usuraio (1, "Maria", "maria@hotmail.com", 5000)
const user2 = new Usuraio (2, "Matías", "matias@gmail.com", 3000)
const user3 = new Usuraio (3, "Juan", "juan@gmail.com", 8000)
const user4 = new Usuraio (4, "Laura", "laura@outlook.com", 10000)
const usuarios = [user1, user2, user3, user4]
usuarios.forEach(userArray => {
    userArray.dineroCuenta += 1000
})
console.log(usuarios.map(userArray => `${userArray.nombre} - ${userArray.dineroCuenta}`))
const DINERO_CUENTA = usuarios.map(userArray => userArray.dineroCuenta)
const DINERO_TOTAL = DINERO_CUENTA.reduce((prev,act) => prev + act, 0)
console.log(DINERO_TOTAL)
console.log(usuarios.sort((usr11, usr12) => usr12.dineroCuenta - usr11.dineroCuenta))