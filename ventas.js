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

    //recuperamos propiedades de las cajas de txt
    let componenteSueldoBase=document.getElementById("txtSueldoBase");
    let componenteNumeroVentas=document.getElementById("txtVentas");
    let componentePrecio=document.getElementById("txtPrecio");

    //recuperamos el valor de las cajas de texto
    let sueldoBaseStr=componenteSueldoBase.value;
    let numeroVentasStr=componenteNumeroVentas.value;
    let precioProductoStr=componentePrecio.value;
    
    //convertimos el texto a numero
    let sueldoBase=parseFloat(sueldoBaseStr);
    let numeroVentas=parseFloat(numeroVentasStr);
    let precioProducto=parseFloat(precioProductoStr);

    let comision=calcularComision(numeroVentas,precioProducto);

    let total=sueldoBase+comision;

    let spSueldoBase=document.getElementById("spSueldoBase");
    let spComision=document.getElementById("spComision");
    let spTotal=document.getElementById("spTotal");

    spSueldoBase.textContent=sueldoBase;
    spComision.textContent=comision;
    spTotal.textContent=total;
} 