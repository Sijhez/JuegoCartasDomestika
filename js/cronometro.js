//CRONOMETRO HACIA ADELANTE
function iniciaCronometro(){
  var segundos = 0;
  var minutos = 0;
  var segundosTexto;
  var minutosTexto;

  function actualizaContador(){
  segundos = segundos + 1;
    if(segundos > 59){
        segundos = 00;
        minutos = minutos + 1;
    }
    segundosTexto = segundos;
    minutosTexto = minutos;
    if(segundos < 10){
        segundosTexto = '0' + segundos;
    }
    if(minutos < 10){
        minutosTexto = '0' + minutos;
    }


    document.querySelector('#minutos').innerText = minutosTexto;
    document.querySelector('#segundos').innerText = segundosTexto;

  }
   

   setInterval(actualizaContador,1000); //actualiza la funcion

    
}
//CRONOMETRO HACIA ATRAS
function cronometroReversa(){
  var segundos = niveles[nivelActual].tiempoMax;
  var minutos = 0;
  var segundosTexto;
  var minutosTexto;
 // var cronometrobb;


  function actualizaContador(){
    ticToc.play()
  segundos--;
    if(segundos < 0){
        segundos = 59;
        minutos--;
    }
    if (minutos < 0){
      segundos = 0;
      minutos = 0;
      clearInterval(cronometro);//detiene la cuenta regresiva despues del cero
      timeOver();
    }
    segundosTexto = segundos;
    minutosTexto = minutos;
    if(segundos < 10){
        segundosTexto = '0' +segundos;
    }
    if(minutos < 10){
        minutosTexto = '0' + minutos;
    }


    document.querySelector('#minutos').innerText = minutosTexto;
    document.querySelector('#segundos').innerText = segundosTexto;
    
  }
   

  cronometro = setInterval(actualizaContador,1000); //actualiza la funcion
  
  
    
}
