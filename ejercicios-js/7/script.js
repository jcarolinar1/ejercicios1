/*Requerir al usuario que ingrese un día de la semana e imprimir un
mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje
diferente si es sábado o domingo. Si el día ingresado no es ninguno de
esos, imprimir otro mensaje.*/


let day = prompt("Ingrese un día de la semana");

if (day === "lunes") {
  alert("inicio de semana");
} else if (day === "viernes") {
  alert("Es viernes y el cuerpo lo sabe");
} else if (day === "sabado" || day === "domingo") {
  alert("fin de semanaa!!");
} else {
  alert("El dia de la semana ingresado no esta en las opciones");
}