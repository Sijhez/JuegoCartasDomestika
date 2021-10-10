function barajaTarjetas(lasTarjetas){
   var resultado;
  var totalTarjetas = lasTarjetas.concat(lasTarjetas);
    //en esta funcion tomamos un numero al azar con Math.random(), lo multiplicamos por 10 y luego se redondea el resultado hacia abajo con Math.floor(.aqui va la primer operacion..)
    //con este metodo obtenemos siempre un numero entre el uno y el 9, para conseguir al 9, tendriamos que sumar +1
    
    var resultado = totalTarjetas.sort(function(){// el metodo .sort() se encarga de reordenar valores, en este caso reordena el orden del valor del index de cada elemento
      return 0.5 - Math.random();//return sirve para devolver un valor fuera de la función que ha sido citada
    });
   return resultado;
}


//esta función pinta cada tarjeta, recoge la baraja de tarjetas, ahora con el parámetro que se incluyo,
//y recoge el elemento #mesa del DOM, en el pinta cada elemento a través de un inner HTML,
//luego recogemos cada tarjeta barajeada y la pintamos dentro de la var mesa con forEach
function reparteTarjetas(lasTarjetas){
   var tarjetasBarajeadas = barajaTarjetas(lasTarjetas); 
   
   var mesa = document.querySelector("#mesa");
   mesa.innerHTML = "";
   tarjetasBarajeadas.forEach(function (elemento){
    
    var tarjeta = document.createElement("div");//cada tarjeta tiene un div independiente en el que se pinta el resto
    tarjeta.innerHTML = //pintamos el elemento recogido en el forEach de cada elemento del array recogido en esta funcion
    "<div class='tarjeta' data-value="+
    elemento +
    ">" +
    "<div class='tarjeta__contenido'>" +
    elemento +
    "</div>" +
    "</div>"
    ;
    mesa.appendChild(tarjeta);
  });
}
