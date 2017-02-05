/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;

function comenzar()
{
    document.getElementById('PrimerNumero').value = parseInt(Math.random() * 10) + 1;
    document.getElementById('SegundoNumero').value = parseInt(Math.random() * 10) + 1;

    var aux_operator = parseInt(Math.random() * 4) + 1; 

    switch(aux_operator)
    {
        case 1:
        document.getElementById('Operador').value =  "+";
        break;
        case 2:
        document.getElementById('Operador').value =  "-";
        break;
        case 3:
        document.getElementById('Operador').value =  "*";
        break;
        case 4:
        document.getElementById('Operador').value =  "/";
        break;
    }
}

function Responder()
{
    var respuesta = parseFloat(document.getElementById('Respuesta').value);
    var resultado_correcto;
    var concatenated;

    switch(document.getElementById('Operador').value)
    {
        case "+":
        resultado_correcto = parseFloat(document.getElementById('PrimerNumero').value) + parseFloat(document.getElementById('SegundoNumero').value);
        break;
        case "-":
        resultado_correcto = parseFloat(document.getElementById('PrimerNumero').value) - parseFloat(document.getElementById('SegundoNumero').value);
        break;
        case "*":
        resultado_correcto = parseFloat(document.getElementById('PrimerNumero').value) * parseFloat(document.getElementById('SegundoNumero').value);
        break;
        case "/":
        resultado_correcto = parseFloat(document.getElementById('PrimerNumero').value) / parseFloat(document.getElementById('SegundoNumero').value);
        break;
    }

    if(resultado_correcto != respuesta)
    {
        concatenated = "Resultado Incorrecto. La respuesta correcta es: " + resultado_correcto;
        alert(concatenated);
    }
    else
    { 
        alert("Respuesta correcta.");
    }

    comenzar();
}
