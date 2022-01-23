/*Decidimos separar las funciones para mejorar la gestión y administracion
de los scripts: este scrtipt inicia el reparto de tarjetas y asigna el event
listener para voltear las tarjetas*/



function iniciar() {
  music.play()
  movimientos = 0;
  reparteTarjetas(niveles[nivelActual].tarjetas);
  //mandamos llamar el objeto niveles, con la propiedad nivelActual, si el nivel cambia, nos traerá el respectivo array de cartas según el nivel
  document.querySelector("#mov").innerText = "00"; //regresamos el contador de movimientos a cero
  maxContador();
 
  document.querySelector("#aJugar").classList.add('letsPlay');
  setTimeout(function(){
    document.querySelector("#aJugar").classList.add('invisible');
  },1500)
  

  document.querySelector("#endGame").classList.add('invisible');
  document.querySelector("#endGame").classList.remove('modalVisible');
 
  document.querySelector("#gameOver").classList.add('invisible');
  document.querySelector("#gameOver").classList.remove('modalVisible');
  
  document.querySelector("#timeOver").classList.add('invisible');
  document.querySelector("#timeOver").classList.remove('modalVisible');

  document.querySelector("#subeNivel").classList.add('invisible');
  document.querySelector("#subeNivel").classList.remove('modalVisible');

  document.querySelectorAll(".tarjeta").forEach(function (tarjetita) {
    //agrega eeventListener a cada elemento con la clase tarjeta, en función de cuantos elementos tarjetita existen
    tarjetita.addEventListener("click", voltear); //agrega evento click y función voltear
  });
  generarBackground()
  if (!modoRelax) {
    cronometroReversa()
  } else {
    document.querySelector('#cronometro').style.visibility = "hidden";
  }

  //iniciaCronometro();
}

function generarBackground(){ 
  var randomGen = Math.ceil(Math.random()*5)
  var background= `media/back${randomGen}.gif`
  document.querySelector('#background').style.backgroundImage=`url(${background}`
  
}

function reiniciar() {
  bling.play()
  nivelActual = 0;
  actualizaNivel();
  iniciar();
  
}

function iniciaJuegoNormal(){
  bling.play()
  modoRelax = false;
  document.querySelector('#bienvenido').style.visibility = "hidden";
  iniciar();
  //oculta control de cambio de niveles
  document.querySelector("#controlNivel").style.visibility = "hidden"
  
}

function iniciaModoRelax(){
  bling.play()
  modoRelax = true;
  document.querySelector('#bienvenido').style.visibility = "hidden";
  iniciar();
}

// function mostrarNiveles(){
//   const navigator = document.querySelector(".nav")
//    navigator.classList.toggle("openMenu")

// }



document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);
//con el boton de subir subimos el nivel de dificultad
