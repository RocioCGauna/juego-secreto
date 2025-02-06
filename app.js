let numeroSecreto = 0;
// variable global numeroSecreto
let intentos = 0;
let listaNumeroSorteados= [];
// lista vacia
let numeroMaximo= 10;

console.log(numeroSecreto);
// reutilizo codigo encapsulando 
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos == 1)? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();

    }
    

    return;
}

function limpiarCaja(){
   document.querySelector('#ValorUsuario').value= '';
}


function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
   // si el numero esta incluido en la lista 
   if(listaNumeroSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();// se llama a si misma para generar otro numero 
   }else{
    listaNumeroSorteados.push(numeroGenerado);
    return numeroGenerado;// no existe en la lista e lo agrega 
   }
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos=1;

}
function reiniciarJuego() {
    //limpiar caja 
    limpiarCaja();
    //inidicar mensaje de inicio
    //generar numero aleatorio
    //inicializar el nuemero de intento 
    mensajesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    


}
condicionesIniciales();

