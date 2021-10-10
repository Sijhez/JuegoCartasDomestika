//window.alert("Bienvenido prro");
console.log("JS CORRIENDO")

//Este archivo debe ejecutarse al iniciar la pagina y verificando console

var mensaje="Hola wey";  
 console.log(mensaje);

 var saludoTranki = "Quihubo man";
 var mensaje = saludoTranki;

 console.log(mensaje);

/*  function myFirstFunction(){
     var saludito = "Quihubole man";
     var antisaludo = "Noestes jodiendo";
     var contento = true;

     if(contento === false){
         //para verificar o comparar datos usamos dos o tres =
         window.alert(saludito);
     }else{
         window.alert(antisaludo);
     }
 }

 myFirstFunction();
*/

 var sistemas = ["Robert", "Diego", "Ulises" ];

 function nuevoMensaje(sistemas){
      console.log("Hola amigo "+ sistemas);
 }  
 sistemas.forEach(function(valor){
     nuevoMensaje(valor);
 });

 //declaracion de objeto

 var coche = {
     marca:"Ford ",
     motor:" Electrico",
     comprarCoche: function(){
         console.log ("Me vende el "+ this.marca + this.motor);
     }
 }
 function alertaCoche(){
     window.alert("Me vende el "+ coche.marca + coche.motor);
 };
 // alertaCoche();
 
 
 //si usamos console y verificamos el objeto coche usando
 //cada objeto del coche como coche.marca, aparecerá en la consola
 // el valor de esa propiedad

 var encabezado = document.querySelector(".tituloh2");

    function cambiarTexto(){
        encabezado.textContent = "Bajale de buebos";
    };

/*function cambiaColorBody(){
    this.addList.toggle(".cambia");
}//NO FUNCIONA :(
document.querySelector("body").addEventListener("click", cambiaColorBody );
*/
var mensaje ="4 cerditos";

console.log(mensaje);

var saludo2 = "Hola, yo me llamo ";
var nombre = "Sinuhé";
var edad = 29;

var mensajito = saludo2 + nombre + " y tengo "+ edad + " años";

console.log(mensajito);

/*FUNCION PARA RECOGID@ DE DATOS*/ 
        
      //Esta funcion muestra el uso de eventListener, 
      //DECLARAMOS EL USO DEL EVENTO CLICK, Y LUEGO LE ASIGNAMOS UN EVENTO 
      // (preventDefault(); ) para que no realice la acción por defecto
function recogeDatos(evento) {
     evento.preventDefault();

    var nombre3 = document.querySelector("#name").value;
    var miFecha = document.querySelector("#date").value;
    var edad2 = 2021 - miFecha;
    var bienvenido = document.querySelector("#mensaje")
     //alteración del DOM con JS
    bienvenido.textContent = "Hola amigo "+ nombre3 + ", tienes "+ edad2 + " años";
}

var miForm = document.querySelector("#myForm")

miForm.addEventListener("submit", recogeDatos);

//incluir otro ejercicio con el DOM alterado usando estilos y el metodo innerHTML


function verificaEdad(eve){
    eve.preventDefault();
    
    var nombreUsuario = document.querySelector("#userName").value;
    var fechaUsuario = document.querySelector("#birthDate").value;
    var edadPajero = 2021 - fechaUsuario;
    var mensajePorno = document.querySelector("#mnsajeBienvenida");
    var mayor18 = "<p class='mensajeporno'>Hola " + nombreUsuario + ".Bienvenido a PornHub, time to have fun!</p>";
    var igual18 = "<p class='mensajeporno'>¿Estas seguro que tienes "+ edadPajero + "años, "+ nombreUsuario +"? Le voy a preguntar a tu mama!</p>";
    var menor18 = "<p class='mensajeporno'>Aún estas muy shabo "+ nombreUsuario +", déjese ahí y vaya a rezar!</p>";
    
    if (edadPajero > 18){
      mensajePorno.innerHTML = mayor18;
    }else if( edadPajero == 18){
      mensajePorno.innerHTML = igual18;
    }else{
        mensajePorno.innerHTML = menor18;
    }
  }
  
  var registroPorno = document.querySelector("#regisPorno");
  registroPorno.addEventListener("submit",verificaEdad);