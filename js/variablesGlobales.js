var modoRelax = false;
var cronometro;
var movimientos = 0;
var joe = 'media/joe.jpg'
var clark= 'media/clark.jpg'
var ka='media/k.jpg'
var king='media/king.jpg'
var maxima = 'media/maxima.jpg'
var ralf = 'media/ralf.jpg'
var ryo = 'media/ryo.jpg'
var terry = 'media/terry.jpg'

var music = new Audio('media/music1.mp3')
var aciertoSound = new Audio('media/acierto.mp3')
var cartaSound =  new Audio('media/carta.mp3')
var errorSound =  new Audio('media/error.mp3')
music.volume = 0.1
errorSound.volume = 0.1
cartaSound.volume = 0.2 
aciertoSound.volume = 0.1 

var grupoTarjetas1 = [[joe, clark],[ka, king], [maxima, ralf], [ryo, terry]]

var nivelActual = 0;
var niveles = [//aqui estamos creando el array con objetos niveles,en cada objeto agregamos las caracteristicas por nivel (los niveles para cada uno)
    {   //creamos la propiedad tarjetas con el valor de la posicion dentro del array multidimensional dentro de los corchetes
        tarjetas: grupoTarjetas1[0],//Aqui estamos anidando arrays dentro de otro array, con el método .concat
        movimientosMax: 4,
        tiempoMax:10
    },
    {
        tarjetas: grupoTarjetas1[0].concat(grupoTarjetas1[1]),
        movimientosMax: 10,
        tiempoMax:20
    },
    {
        tarjetas: grupoTarjetas1[0].concat(grupoTarjetas1[1],grupoTarjetas1[2]),
        movimientosMax: 15,
        tiempoMax:35
    },
    {
        tarjetas: grupoTarjetas1[0].concat(grupoTarjetas1[1],grupoTarjetas1[2],grupoTarjetas1[3]),
        movimientosMax:18,
        tiempoMax:50     
    }
];

 