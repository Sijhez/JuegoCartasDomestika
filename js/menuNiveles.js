function escribeNiveles(){
    var menuNiveles = document.querySelector(".nav ul")
    niveles.forEach(function(elemento, index){
        var controlNivel = document.createElement('li');
        controlNivel.innerHTML = 
        " <button class='nivel' data-nivel="
        +index+"> Nivel "+(index + 1)+"</button>";
        menuNiveles.appendChild(controlNivel)
    })
}

function cambiaNivel(){
   var nivel = parseInt(this.dataset.nivel);//recogemos valor textual y lo convertimos en numero
   nivelActual = nivel;
   actualizaNivel();
   iniciar();
}

function muestraMenuNiveles(evento){
    evento.stopPropagation();//evita que el click se propague fuera del elemento seleccionado
    document.querySelector(".nav").classList.toggle("openMenu")
}
function ocultaMenu(evento){
    document.querySelector(".nav").classList.remove("openMenu")
}

function clickFueraMenu(evento){
    //.closest() verifica que tan cercano esta el target del evento en el que se esta haciendo click, o el evento que se recibe
    if(evento.target.closest(".nav")){
        return
    }

    document.querySelector(".nav").classList.remove("openMenu")
}