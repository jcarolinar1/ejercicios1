/*Un conocido portal de educación en tecnología está ofreciendo
programas para aprender a desarrollar aplicaciones. Escribe un programa
que le indique a la persona interesada cuánto deberá pagar
mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su
costo mensual:
● Course: $4999 MXN
● Carrera $3999 MXN
● Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el
descuento correspondiente al precio final.
● Beca Facebook: 20% de descuento.
● Beca Google: 15% de descuento.
● Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario
cuánto gastaría en total por el curso elegido, tomando en cuenta las
siguientes duraciones:
● Course: 2 meses
● Carrera 6 meses
● Master: 12 meses*/

let costoMensual;
let descuento;
let Final;
let duracion;
let total;

let Programa = prompt("¿Qué programa desea elegir?.Course, Carrera o Master ");

switch (Programa) {
  case "course":
    costoMensual = 4999;
    duracion = 2;
    break;
  case "carrera":
    costoMensual = 3999;
    duracion = 6;
    break;
  case "master":
    costoMensual = 2999;
    duracion = 12;
    break;
  default:
    alert("Opción no válida");
    break;
}

let beca = prompt("¿Cuenta con alguna beca? Facebook, Google o Jesua ");

switch (beca) {
  case "Facebook":
    descuento = 0.2;
    break;
  case "Google":
    descuento = 0.15;
    break;
  case "Jesua":
    descuento = 0.5;
    break;
  default:
    descuento = 0;
    break;
}

Final = costoMensual - (costoMensual * descuento);
total = Final * duracion;

alert("Se debe pagar "+ Final +" MXN mensualmente,El total a pagar es de $ " + total+"MXN" );