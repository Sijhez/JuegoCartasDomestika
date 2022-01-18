escribeNiveles();


//reinicio de juego
document.querySelectorAll(".reiniciar").forEach(function (elemento) {
    elemento.addEventListener("click", reiniciar);
  });

  document.querySelector("#normal").addEventListener("click", iniciaJuegoNormal)

  document.querySelector("#relax").addEventListener("click", iniciaModoRelax)

//menu niveles
document.querySelector("#controlNivel").addEventListener("click", muestraMenuNiveles)

document.querySelectorAll(".nivel").forEach(function(elemento){
  elemento.addEventListener('click', cambiaNivel)
})
//agregamos un listener al body para mandar el menu de nuevo a esconder, usando la funcion clickFueraMenu
document.querySelector("body").addEventListener('click', clickFueraMenu)
