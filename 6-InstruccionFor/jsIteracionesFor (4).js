function Mostrar()
{
    var aleatorio =  (Math.random()*1000) + 1;

    aleatorio = parseInt(aleatorio);

    for(var i = 0 ; ; i++ )
    {
        document.write( (i + 1)  + " - UTN FRA <br>");

        if(i == aleatorio)
        {
            break;
        }
    }
}