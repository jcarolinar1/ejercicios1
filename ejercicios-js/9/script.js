/*Escribe un programa que responda a un usuario que quiere comprar un
helado en una conocida marca de comida rápida cuánto le costará en
función del topping que elija.
● El helado sin topping cuesta 50 MXN.
● El topping de oreo cuesta 10 MXN.
● El topping de KitKat cuesta 15 MXN.
● El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa
le indicará “no tenemos este topping, lo sentimos.” y a continuación le
informará el precio del helado sin ningún topping.*/

let topping = prompt("¿Qué topping desea para su helado?");

if (topping === "oreo") {
    alert("El helado con topping de oreo cuesta 60 MXN");
} else if (topping === "kitkat") {
    alert("El helado con topping de kitkat cuesta 65 MXN");
} else if (topping === "brownie") {
    alert("El helado con topping de brownie cuesta 70 MXN");
} else {
    alert("No tenemos este topping, lo sentimos. El helado sin ningún topping cuesta 50 MXN");
}