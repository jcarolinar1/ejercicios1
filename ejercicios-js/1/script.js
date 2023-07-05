/*Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en
caso de contestar sí, responder “Ciertamente”, en caso de contestar no,
responder: “No te creo”*/
  
let respuesta = prompt("¿Eres bellisimo/a?");

if (respuesta === "si") {
  alert("Ciertamente");
} else if (respuesta === "no") {
  alert("No te creo");
}
