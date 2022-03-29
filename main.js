/* ejemplo de for y while crea un algoritmo que repira un bloque de instrucciones*/


/* Promt*/
let verificacion = parseInt(prompt("¿que edad tienes?"));
if (verificacion >= 21 && verificacion<= 100){
    let yourName = prompt("¿cual es tu nombre?");
    let youLastName = prompt("¿cual es tu apellido?");
    alert(`tu nombre es ${espaciO} ${yourName} ${espaciO} ${youLastName}`);
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