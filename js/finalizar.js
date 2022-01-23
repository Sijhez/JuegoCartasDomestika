function finalizar(){
  if (nivelActual < niveles.length-1) {
    clearInterval(cronometro)
    document.querySelector("#subeNivel").classList.add('modalVisible');
    ticToc.pause()

  }else{
    clearInterval(cronometro)
    ticToc.pause()
  document.querySelector("#endGame").classList.add('modalVisible');
    document.querySelector('#inicio').addEventListener('click',function(){
      window.location.reload();
    })
  }
    
}

