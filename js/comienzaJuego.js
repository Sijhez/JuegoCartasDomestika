//escribeNiveles();


//reinicio de juego
document.querySelectorAll(".reiniciar").forEach(function (elemento) {
    elemento.addEventListener("click", reiniciar);
  });

  document.querySelector("#normal").addEventListener("click", iniciaJuegoNormal)

  document.querySelector("#relax").addEventListener("click", iniciaModoRelax)

//menu niveles
document.querySelector("#controlNivel").addEventListener("click", mostrarNiveles)


