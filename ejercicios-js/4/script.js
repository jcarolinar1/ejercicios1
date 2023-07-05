/*Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir
"Ganaste un premio", en caso contrario mostrar el número y el mensaje
“Lo sentimos, sigue participando”.*/
let numCliente = prompt("Ingresa numero de cliente");
if (numCliente == 1000) {
  alert(" = Ganaste un premio ");
} else {
  alert(numCliente  + " = Lo sentimos, sigue participando");
}
