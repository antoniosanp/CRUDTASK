//store.js
const API_URL = "http://localhost:3000/"

export const store = {
    users : {
        endpoint : `${API_URL}users`,
        data : []
    },
     productos : {
        endpoint : `${API_URL}productos`,
        data : []
    },
     ordenes : {
        endpoint : `${API_URL}ordenes`,
        data : []
    },
    
    current_user : null
}

export class User{
    constructor(nombre, email, password){
        this.nombre = nombre,
        this.email= email,
        this.password = password,
        this.rol = "visitante"
    }
}

export class Producto{
    constructor(nombre,precio, categoria){
        this.nombre = nombre,
        this.precio = precio,
        this.categoria = categoria
    }
}

export class Item{
    constructor(producto, cantidad){
        this.producto = producto,
        this.cantidad = cantidad
    }
}

export class Orden{
    constructor(userId, items){
        this.userId = userId,
        this.items = items,
        this.estado = "pendiente"
        this.total = this.calcularTotal()
    }
    calcularTotal(){
        let total = 0;
        for (const item of this.items.values()){
            total += (item.producto.precio * item.cantidad)
        }
        return total
    }
}

//-------------------------------------------------------------------------

