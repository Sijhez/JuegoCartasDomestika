music.volume = 0.3
errorSound.volume = 0.1
cartaSound.volume = 0.2 
aciertoSound.volume = 0.0 



     
  function acierto(lasTarjetas){
   
    lasTarjetas.forEach(function(elemento){
      elemento.classList.add("Acertada");    //clona el nodo del sonido
      
      
      switch(elemento.dataset.value){
        case clark:
          clarkAudio.play();
          break;
          case ralf:
            ralfAudio.play();
            break;
            case ka:
            kAudio.play();
            break;
            case joe:
            joeAudio.play();
            break;
            case king:
            kingAudio.play();
            break;
            case maxima:
            maximaAudio.play();
            break;
            case ryo:
            ryoAudio.play();
            break;
            case terry:
            terryAudio.play();
            break;
         default:
          aciertoSound.cloneNode().play();
          
      }

      // if(elemento.dataset.value === 'media/clark.jpg'){
      //   ralfAudio.play()
      //     }
    });
      }    

  function error(lasTarjetas){
      //añadimos la animacion por medio de la clase error
    lasTarjetas.forEach(function(elemento){

        elemento.classList.add("error");
        errorSound.cloneNode().play()
    });

    //funcion para retrasar una funcion, controla tiempo
    setTimeout(//funciona con dos parametros, el primero es la funcion a ejecutarse, y el segundo es el tiempo en milisegundos
        function(){//elimina la animacion y la clase descubierta
            lasTarjetas.forEach(function(elemento){
                elemento.classList.remove("descubierta");
                elemento.classList.remove("error");
              });
        }, 1500);//tiempo que tardará en ejecutarse la funcion, en milisegundos
    }      

    
