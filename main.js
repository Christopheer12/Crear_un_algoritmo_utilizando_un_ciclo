/* ejemplo de for y while crea un algoritmo que repira un bloque de instrucciones*/

const ESPACIO = (" ");
let verificacion = parseInt(prompt("¿que edad tienes?"));
if (verificacion >= 21 && verificacion<= 100){
    let yourName = prompt("¿cual es tu nombre?");
    let youLastName = prompt("¿cual es tu apellido?");
    let pass = 2903;
    let dato = parseInt(prompt("cual es la contraseña?"));
    while(dato != pass){
        alert("contraseña invalida, vuelve a intentar");
        dato = parseInt(prompt("cual es la contraseña?"));
    }
    alert(`Bienvenido " ${ESPACIO} ${yourName} ${ESPACIO} ${youLastName} " a tu pagina web con Js`);
}
 
else if (verificacion >=18 && verificacion <=20 ){
    alert("CASIIIIIIIIIIIIIIIIIIIIIIIIIIIIII, pero nop");
    for (let i = 1; i<= verificacion; i++){
        alert(`te falta  ${i} para votar`);
        if( i==3){
            break;
        }
        
    }

}
else if (verificacion >=0 && verificacion <=17
     ){
        for (let i = 1; i<= verificacion; i++){
            alert(`Nunca te dije, feliz cumpleaños numero ${i}`);
        }
    
        
    
}