function Mostrar()
{
    var numero;
    var counter = 0;

    numero = prompt("Ingrese un Número: ");

    numero = parseFloat(numero);

    for(var i = 1 ; i <= numero ;i++ )
    {
        if((numero % i) == 0)
        {
            document.write("Numero divisor hallado = " + i + "<br>");
            counter++;
        }
    }

    document.write("<br> SE HALLARON " + counter + " NUMEROS DIVISORES de " + numero + ".<br>");

    if(counter == 2)
    {
        document.write("<br> EL NUMERO INGRESADO ES PRIMO <br>");
    }
    else
    {
        document.write("<br> EL NUMERO INGRESADO NO ES PRIMO <br>");
    }
}