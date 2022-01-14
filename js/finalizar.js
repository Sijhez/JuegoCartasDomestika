function finalizar(){
  if (nivelActual < niveles.length-1) {
    clearInterval(cronometro)
    document.querySelector("#subeNivel").style.visibility="visible";
    

  }else{
    clearInterval(cronometro)
 document.querySelector("#endGame").style.visibility="visible";

  }
    
}

