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

// function clickFueraMenu(evento){
//     if(evento.target.closest(".nav")){
//         return
//     }
//     const navigator = document.querySelector(".nav")
//     navigator.classList.toggle("openMenu")
//     // document.querySelector(".nav").style.visibility="hidden"
// }