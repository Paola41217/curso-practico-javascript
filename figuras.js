// Código del cuadrado 
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}  
function areaCuadrado(lado) {
    return lado * lado;
} 
console.groupEnd();

//Código del triángulo
function perimetroTriangulo(lado1, lado2, base) {
    return parseInt(lado1) + parseInt(lado2) + parseInt(base)
} 
function areaTriangulo(base, altura) {
    return (base * altura) / 2; 
} 
//Código del circulo
console.group("Circulo");
function diametroCirculo(radio) {
    return radio * 2;
}
// dos opcioens de usar pi:
// 1. const PI = 3.1415; 

const PI = Math.PI;
console.log("PI es: " + PI);

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI; 
}
function areaCirculo(radio) {
    return (radio * radio) * PI; 
}
console.groupEnd();

//Aquí interactuamos con HTML 
//CUADRADO
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    document.getElementById("resultadoPerimetroCuadro").innerHTML = perimetro;
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    document.getElementById("resultadoAreaCuadro").innerHTML = area;
}
//TRIANGULO
function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("InputTriangulo1").value;
    const lado2 = document.getElementById("InputTriangulo2").value;
    const base = document.getElementById("InputTrianguloBase").value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    document.getElementById("resultadoPerimetroTriangulo").innerHTML = perimetro;
}
function calcularAreaTriangulo() {
    const altura = document.getElementById("InputTrianguloH").value;
    const base = document.getElementById("InputTrianguloB").value;

    const area = areaTriangulo(base, altura);
    document.getElementById("resultadoAreaTriangulo").innerHTML = area;
}
//CIRCULO
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo")
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    document.getElementById("resultadoPerimetroCirculo").innerHTML = perimetro;
}
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    const area = areaCirculo(value);
    document.getElementById("resultadoAreaCirculo").innerHTML = area;
}
// function calcular() {
//      const calculo = document.getElementById("calculadoraInput").value;

//      document.getElementById("resultado").innerHTML = calculo;
// }