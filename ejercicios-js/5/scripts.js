/*Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es
menor. No considerar el caso en que ambos números son iguales.*/

let num1 = prompt("Ingrese el primer número");
let num2 = prompt("Ingrese el segundo número");

if (num1 < num2) {
  alert("El número: " + num1 + ",es menor que el número: " + num2 );
} 
else {
  alert("El número: " + num2 + ",es menor que el número: " +  num1 );
}