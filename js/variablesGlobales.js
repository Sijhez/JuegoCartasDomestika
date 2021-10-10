var movimientos = 0;
var grupoTarjetas1 =[ ["🦄", "🍦"], ["🌈", "👽"], ["👾", "🤖"]]

var nivelActual = 0;
var niveles = [//aqui estamos creando el objeto niveles, y dentro de cada uno es una propiedad del objeto(los niveles para cada uno)
    {   //creamos la propiedad tarjetas con el valor de la posicion dentro del array multidimensional dentro de los corchetes
        tarjetas: grupoTarjetas1[0]//Aqui estamos anidando arrays dentro de otro array, con el método .concat
    },
    {
        tarjetas: grupoTarjetas1[0].concat(grupoTarjetas1[1])
    },
    {
        tarjetas: grupoTarjetas1[0].concat(grupoTarjetas1[1],grupoTarjetas1[2])
    }
];

 