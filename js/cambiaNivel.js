function subeNivel(){
    nivelActual++;//aumenta de nivel mas uno partiendo de nivel actual que es cero
    bling.play()
}

function actualizaNivel(){//cambia el nivel en el marcador del nivel dentro del DOM
    var nivelTexto = nivelActual + 1;
    if(nivelTexto < 10){
        nivelTexto = "0"+ nivelTexto;
    }
   document.querySelector("#nivel").innerText=nivelTexto;
}

function cargaNuevoNivel(){
    subeNivel();
    actualizaNivel();
    iniciar();
}