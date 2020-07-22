var a=0;
var b=0;

var calcularMultiplicacion=0;

a=prompt("Dígite un número a");
b=prompt("Dígite un número b");
calcularMultiplicacion = multiplicacion(a,b);

function multiplicacion(nA, nB){
    const result = nA*nB;
    console.log ("El resultado de la multiplicación es: " + result);
}