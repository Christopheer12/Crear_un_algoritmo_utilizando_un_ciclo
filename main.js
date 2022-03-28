/* ejemplo de for y while crea un algoritmo que repira un bloque de instrucciones*/
alert("hola");
const espaciO = " ";
let numeroA = 1;
let numeroB = 2;
let numeroC = numeroA + numeroB;
console.log(numeroC);

let palabraA = "Coder";
let palabrab ="house";
let palabraC = palabraA + espaciO + palabrab ;
console.log(palabraC);

/* Promt*/
let verificacion = prompt("¿que edad tienes?")


if (verificacion >= 18){
    let yourName = prompt("¿cual es tu nombre?");
    let youLastName = prompt("¿cual es tu apellido?");
    alert(`tu nombre es ${espaciO} ${yourName} ${espaciO} ${youLastName}`);
}
else{
    alert("jajaja !BEBE, TU NO PUEDES PASAR!");

}
