class Producto{
    constructor(codigoPrincipal,
                codAlternativo,
                marca,
                descripcion,
                precioLista,
                iva,
                descuento,
                unidadDeVenta,
                unidadDeCompra
                ){
    this.codigoPrincipal = codigoPrincipal;
    this.codAlternativo = codAlternativo;
    this.marca = marca;
    this.descripcion = descripcion;
    this.precioLista = precioLista;
    this.iva = iva;
    this.descuento = descuento;
    this.precioCompra = precioLista * (1 - (descuento/100));
    this.markup = 21.26; // Valor fijo de acuerdo a cada empresa
    this.precioVentaNeto = (this.precioCompra/(1-(this.markup/100))).toFixed(2); // Precio sin IVA
    this.unidadDeVenta = unidadDeVenta;
    this.unidadDeCompra = unidadDeCompra;
    }
    modificarPrecios =(nuevoPrecioLista,
                        nuevoDescuento) => {
        this.precioLista = nuevoPrecioLista;
        this.descuento = nuevoDescuento;
        this.precioCompra = nuevoPrecioLista * (1 - (nuevoDescuento/100));
        this.precioVentaNeto = (this.precioCompra/(1-(this.markup/100))).toFixed(2);
                        }
    modificarTexto = (  nuevoCod,
                        nuevoCodAlt,
                        nuevoMarca,
                        nuevoDesc) => {
        this.codigoPrincipal = nuevoCod;
        this.codAlternativo = nuevoCodAlt;
        this.descripcion = nuevoDesc;
        this.marca = nuevoMarca;
    }
    mostrarProducto = () => {
        console.log("Codigo Principal: " + this.codigoPrincipal);
        console.log("Codigo Alternativo: " + this.codAlternativo);
        console.log("Marca: " + this.marca);
        console.log("Descripcion: " + this.descripcion);
        console.log("Unidad Compra: " + this.unidadDeCompra);
        console.log("Precio Compra: " + this.precioCompra);
        console.log("Unidad Venta: " + this.unidadDeVenta);
        console.log("Precio Venta: " + this.precioVentaNeto);
    }

}