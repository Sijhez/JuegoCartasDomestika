
     
  function acierto(lasTarjetas){
    lasTarjetas.forEach(function(elemento){
      elemento.classList.add("Acertada");
    });
      }    

  function error(lasTarjetas){
      //añadimos la animacion por medio de la clase error
    lasTarjetas.forEach(function(elemento){
        elemento.classList.add("error");
    });

    //funcion para retrasar una funcion, controla tiempo
    setTimeout(//funciona con dos parametros, el primero es la funcion a ejecutarse, y el segundo es el tiempo en milisegundos
        function(){//elimina la animacion y la clase descubierta
            lasTarjetas.forEach(function(elemento){
                elemento.classList.remove("descubierta");
                elemento.classList.remove("error");
              });
        }, 1000);//tiempo que tardará en ejecutarse la funcion, en milisegundos
    }      

    
