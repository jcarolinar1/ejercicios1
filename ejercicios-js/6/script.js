/*Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es
el número mayor. Considerar el caso en que 2 números sean iguales.*/
let num1 = prompt("Ingrese el primer número");
let num2 = prompt("Ingrese el segundo número");
let num3 = prompt("Ingrese el tercer número");

if (num1 > num2 && num1 > num3) {
  alert("El numero mayor es "+ num1);
} else if (num2 > num1 && num2 > num3) {
  alert("El numero mayor es " + num2);
} else if (num3 > num1 && num3 > num2) {
  alert("El numero mayor es "+ num3);
} else {
  alert("numeros iguales");
}