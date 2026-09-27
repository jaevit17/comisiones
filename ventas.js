const VENTAS_BASE=5;

function calcularComision(numeroVenta,precioProducto){
    let comision=0;
    
    if(numeroVenta>VENTAS_BASE){
        let ventasExtra= numeroVenta-VENTAS_BASE;
        comision=ventasExtra*precioProducto*0.10;
    }
    return comision;
}
function validarVentas(){
    let numeroVentasStr=recuperarTexto("txtVentas");
    if(numeroVentasStr.length>5){
        alert("Maximo 5 caracteres");
        return false;
    }else{
        return true;
    }
}
function validarCampo(id) {

    let input = document.getElementById(id);
    let error = document.getElementById("error-" + id);
    let valor = input.value.trim();

    error.textContent = "";
    error.classList.remove("visible");
    input.classList.remove("input-error");

    if (valor === "") {
        error.textContent = "Este campo es obligatorio";
    } 
    else if (valor.startsWith("-")) {
        error.textContent = "Coloca un número positivo";
    } 
    else if (!/^\d{1,5}(\.\d{1,2})?$/.test(valor)) {
        error.textContent = "Coloca un número entre 0 y 99999, con máximo 2 decimales Ej. 3.23 ";
    } 
    else {
        let numero = Number(valor);

        if (!Number.isFinite(numero)) {
            error.textContent = "Coloca un número válido";
        } else {
            return true;
        }
    }

    error.classList.add("visible");
    input.classList.add("input-error");

    return false;
}


function validarFormulario() {

    let sueldoValido = validarCampo("txtSueldoBase");
    let ventasValidas = validarCampo("txtVentas");
    let precioValido = validarCampo("txtPrecio");

    return sueldoValido && ventasValidas && precioValido;
}


function calcular() {

    if (!validarFormulario()) {
        return;
    }

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    if (
        !Number.isFinite(sueldoBase) ||
        !Number.isFinite(numeroVentas) ||
        !Number.isFinite(precioProducto)
    ) {
        return;
    }

    let comision = calcularComision(numeroVentas, precioProducto);

    let total = sueldoBase + comision;

    mostrarEnSpan("spSueldoBase", sueldoBase);
    mostrarEnSpan("spComision", comision);
    mostrarEnSpan("spTotal", total);
}

