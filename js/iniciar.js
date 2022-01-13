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
  document.querySelector("#timeOver").style.visibility = "hidden";
  document.querySelector("#subeNivel").style.visibility = "hidden";

  document.querySelectorAll(".tarjeta").forEach(function (tarjetita) {
    //agrega eeventListener a cada elemento con la clase tarjeta, en función de cuantos elementos tarjetita existen
    tarjetita.addEventListener("click", voltear); //agrega evento click y función voltear
  });

  if (!modoRelax) {
    cronometroReversa()
  } else {
    document.querySelector('#cronometro').style.visibility = "hidden";
  }

  //iniciaCronometro();
}



function reiniciar() {
  nivelActual = 0;
  actualizaNivel();
  iniciar();
}

function iniciaJuegoNormal(){
  modoRelax = false;
  document.querySelector('#bienvenido').style.visibility = "hidden";
  iniciar();
  //oculta control de cambio de niveles
  document.querySelector("#controlNivel").style.visibility = "hidden"
  
}

function iniciaModoRelax(){
  modoRelax = true;
  document.querySelector('#bienvenido').style.visibility = "hidden";
  iniciar();
}

function mostrarNiveles(){
  const navigator = document.querySelector(".nav")
   navigator.classList.toggle("openMenu")

}



document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);
//con el boton de subir subimos el nivel de dificultad
