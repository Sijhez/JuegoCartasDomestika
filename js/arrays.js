var grupoTarjetas1 = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];
//var grupoTarjetas2 = ["😻", "💋", "💦", "🧠", "🧔", "😎", "🙉", "💣"];
//var grupoTarjetas3 = ["🎅", "😈", "💀", "💩", "🤡", "🦷", "🐶", "🦍" ];

//var totalTarjetas = grupoTarjetas1.concat(grupoTarjetas2, grupoTarjetas3);
//var nuevoTotalTarjetas = totalTarjetas.push("🐺");

//console.log(totalTarjetas);//AGREGA CON .push OTRO ELEMENTO AL ARRAY COMPLETO
 //array anidado

 /*var arrayAnidado = [["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"],
 ["😻", "💋", "💦", "🧠", "🧔", "😎", "🙉", "💣"],
 ["🎅", "😈", "💀", "💩", "🤡", "🦷", "🐶", "🦍" ]
 ];

 console.log(arrayAnidado);
 console.log(arrayAnidado[1]);
 console.log(arrayAnidado[2][6])*/

 console.log(grupoTarjetas1);
//forEach sirve para replicar la funcion que se declare tantas veces como número de elementos en el array declarado
 grupoTarjetas1.forEach(function(elemento, indice){
  //tomamos como parametro el elemento del array solicitado, y nos imprime cada elemento, si agregamos otro paramentro como indice, nos muestra el lugar que ocupa cada elemento
  console.log(elemento, indice);
 });

 function reparteTarjetas (){
var mesa = document.querySelector("#mesa");


   mesa.innerHTML = "";
   

   grupoTarjetas1.forEach(function (elemento){
     
     var tarjeta = document.createElement("div");//usamos este metodo para crear un elemento dentro de esta variable
     tarjeta.innerHTML = elemento;//por cada elemento dentro del array se imprime la variable con el elemento dentro
     mesa.appendChild(tarjeta);//agregamos con .appendChild un nuevo nodo al elemento declarado mesa
   });
 }

 reparteTarjetas();