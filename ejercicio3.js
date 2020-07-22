var a=0;
var b=0.21;

var calcularIva=0;

a=parseInt(prompt("Dígite el precio del producto"));
calcularIva= calculoIva (a, b);

function calculoIva(nA, nB){
    const result = (nA * nB);
    Iva=(nA + result);
console.log ("el precio con Iva es:" + Iva)
console.log("El precio sin Iva es:" + nA)
}



