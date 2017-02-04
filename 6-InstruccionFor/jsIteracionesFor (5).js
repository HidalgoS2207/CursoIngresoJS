function Mostrar()
{
    var numero;

    numero = prompt("Ingrese un Número: ");

    numero = parseFloat(numero);

    for(var i = 0 ;  ;i++ )
    {
        if(numero == 9)
        {
            break;
        }

        document.write( (i + 1) + " Se ingreso el número " + numero + "<br>");

        numero = prompt("Ingrese un Número: ");

        numero = parseFloat(numero);
    }
}