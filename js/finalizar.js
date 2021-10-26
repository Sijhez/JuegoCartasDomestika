function finalizar(){
  if (nivelActual < niveles.length-1) {
    document.querySelector("#subeNivel").style.visibility="visible";

  }else{
 document.querySelector("#endGame").style.visibility="visible";

  }
    
}

