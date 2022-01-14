function voltear(){
   var tarjetasPendientes;
    var volteadas;
    var totalDescubiertas = document.querySelectorAll(".descubierta:not(.Acertada)");

    if (totalDescubiertas.length > 1) {
       return;//comprobamos que se voltearon dos tarjetas indice 0 y 1, así evitamos que se volteen mas
    }  
    
    this.classList.add("descubierta");
    document.querySelector("#sonidoCarta").cloneNode().play();   
    volteadas = document.querySelectorAll(".descubierta:not(.Acertada)"); //creamos esta variable para identificar cuantas tarjetas se "voltean"
    if(volteadas.length < 2){
      return;//aquí la funcion se detiene o retorna al comprobar que existen dos elementos con clase descubierta que serán comparados
    }//al agregar .length aseguramos que no pasamos de dos elementos o dos nodos que estarán comparandose posteriormente, aquí es donde la función adquiere sentido

 comparar(volteadas);//argumento de la variable local volteadas
 actualizaContador();//por cada vez que compara las tarjetas volteadas actualiza el contador de movimientos
 tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.Acertada)");//ubicamos tarjetas que no han sido acertadas aún
  if(tarjetasPendientes.length === 0){
    setTimeout(finalizar, 1000); //al detectar que la longitud de tarjetas pendientes es cero, entra la function finalizar despues de 1seg
  }
}

function comparar(tarjetasAComparar){ //conectamos esta funcion con la anterior cuando mandamos llamarla, e incluímos los parametros declarados
      //ahora vamos a comparar los valores de las cartas para emitir un mensaje
   if(tarjetasAComparar[0].dataset.value === tarjetasAComparar[1].dataset.value) {
   acierto(tarjetasAComparar);//mandamos llamar las funciones que existen en el archivo aciertoError.js y le pasamos los parametros para que haga las comparaciones
  }else{
   error(tarjetasAComparar)
  }
  }