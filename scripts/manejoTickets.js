//constructor(id, fechaDeCreacion, plazoDeResolucion, tipoDeTicket)
Date.prototype.addDays = function(days){
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
let date = new Date();

const crearProducto = () => {
    let codigoPrincipal = prompt("Codigo principal: ");
    let codigoAlternativo = prompt("Codigo alternativo: ");
    let marca = prompt("Marca: ");
    let descripcion = prompt("Descripcion: ");
    let descuento = parseFloat(prompt("Descuento (%): "));
    let precioLista = parseFloat(prompt("Precio Lista: "));
    let iva = parseFloat(prompt("IVA (%): "));
    let unidadDeVenta = parseInt(prompt("Unidad de venta: "));
    let unidadDeCompra = parseInt(prompt("Unidad de compra: "));
    // Enviamos los datos a la class Producto
    let nuevoProducto = new Producto(   codigoPrincipal,
                                        codigoAlternativo,
                                        marca,
                                        descripcion,
                                        precioLista,
                                        iva,
                                        descuento,
                                        unidadDeVenta,
                                        unidadDeCompra
                                        );
    return nuevoProducto;
}

let seleccion = parseInt(prompt("Que desea hacer: "));
let producto;
while(seleccion != 4){
    switch(seleccion){
        case 1: producto = crearProducto();
                producto.mostrarProducto();
            break;
        case 2: 
                let nuevoPrecioLista = parseFloat(prompt("Nuevo precio de lista: "));
                let nuevoDescuento = parseFloat(prompt("Nuevo descuento: "));
                producto.modificarPrecios(nuevoPrecioLista, nuevoDescuento);
                producto.mostrarProducto();
            break;
        case 3: 
            break;
        default:
            alert("Opcion ingresada incorrecta.")
    }
    seleccion = parseInt(prompt("Que desea hacer: "));
}