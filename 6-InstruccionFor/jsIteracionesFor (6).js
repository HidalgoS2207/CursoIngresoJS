function Mostrar()
{
    var numero;
    var counter = 0;

    numero = prompt("Ingrese un Número: ");

    numero = parseFloat(numero);

    for(var i = 1 ; i <= numero ;i++ )
    {
        if((i % 2) == 0)
        {
            document.write("Numero par hallado = " + i + "<br>");
            counter++;
        }
    }

    document.write("<br> SE HALLARON " + counter + " NUMEROS PARES. <br>");
}