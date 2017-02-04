function Mostrar()
{   
    var repeticiones;

    repeticiones = prompt("Defina el número de veces que quiere repetir la frase: ");

    repeticiones = parseInt(repeticiones);

    for(var i = 0 ; i < repeticiones ;i++ )
    {
        document.write( (i + 1)  + " - UTN FRA <br>");
    }
}