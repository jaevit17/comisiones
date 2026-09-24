const VENTAS_BASE=5;

function calcularComision(numeroVenta,precioProducto){
    let comision=0;
    
    if(numeroVenta>VENTAS_BASE){
        let ventasExtra= numeroVenta-VENTAS_BASE;
        comision=ventasExtra*precioProducto*0.10;
    }
    return comision;
}
function calcular(){

    let sueldoBase=recuperarFloat("txtSueldoBase");
    let numeroVentas=recuperarFloat("txtVentas");
    let precioProducto=recuperarFloat("txtPrecio");

    let comision=calcularComision(numeroVentas,precioProducto);

    let total=sueldoBase+comision;

    mostrarEnSpan("spSueldoBase",sueldoBase);
    mostrarEnSpan("spComision",comision);
    mostrarEnSpan("spTotal",total);

} 