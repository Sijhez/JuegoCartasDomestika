/*Decidimos separar las funciones para mejorar la gestión y administracion
de los scripts: este scrtipt inicia el reparto de tarjetas y asigna el event
listener para voltear las tarjetas*/

function iniciar() {
  movimientos = 0;
  reparteTarjetas(niveles[nivelActual].tarjetas);
  //mandamos llamar el objeto niveles, con la propiedad nivelActual, si el nivel cambia, nos traerá el respectivo array de cartas según el nivel
  document.querySelector("#mov").innerText = "00"; //regresamos el contador de movimientos a cero
  maxContador();
  document.querySelector("#endGame").style.visibility = "hidden";
  document.querySelector("#gameOver").style.visibility = "hidden";
  document.querySelector("#subeNivel").style.visibility = "hidden";

  document.querySelectorAll(".tarjeta").forEach(function (tarjetita) {
    //agrega eeventListener a cada elemento con la clase tarjeta, en función de cuantos elementos tarjetita existen
    tarjetita.addEventListener("click", voltear); //agrega evento click y función voltear
  });

  //iniciaCronometro();
}

function reiniciar() {
  nivelActual = 0;
  actualizaNivel();
  iniciar();
}

iniciar();
document.querySelectorAll(".reiniciar").forEach(function (elemento) {
  elemento.addEventListener("click", reiniciar);
});

document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);
//con el boton de subir subimos el nivel de dificultad
