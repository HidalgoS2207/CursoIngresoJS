/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;

var resultado_correcto;

function comenzar()
{
	document.getElementById('PrimerNumero').value = parseInt(Math.random() * 10) + 1;
    document.getElementById('SegundoNumero').value = parseInt(Math.random() * 10) + 1;

    var aux_operator = parseInt(Math.random() * 4) + 1; 

    switch(aux_operator)
    {
        case 1:
        document.getElementById('Operador').value =  "+";
        resultado_correcto = parseFloat(document.getElementById('PrimerNumero').value) + parseFloat(document.getElementById('SegundoNumero').value);
        break;
        case 2:
        document.getElementById('Operador').value =  "-";
        resultado_correcto = parseFloat(document.getElementById('PrimerNumero').value) - parseFloat(document.getElementById('SegundoNumero').value);
        break;
        case 3:
        document.getElementById('Operador').value =  "*";
        resultado_correcto = parseFloat(document.getElementById('PrimerNumero').value) * parseFloat(document.getElementById('SegundoNumero').value);
        break;
        case 4:
        document.getElementById('Operador').value =  "/";
        resultado_correcto = parseFloat(document.getElementById('PrimerNumero').value) / parseFloat(document.getElementById('SegundoNumero').value);
        break;
    }

    setTimeout(Responder, 4000);
}


function Responder()
{
    var respuesta = parseFloat(document.getElementById('Respuesta').value);
    var concatenated;

    if(isNaN(respuesta))
    {
        concatenated = "TIEMPO!. La respuesta correcta era: " + resultado_correcto;
        alert(concatenated);
    }
    else if(resultado_correcto != respuesta)
    { 
        concatenated = "Resultado Incorrecto. La respuesta correcta es: " + resultado_correcto;
        alert(concatenated);
    }
    else
    {
        alert("Respuesta correcta.");
    }

    document.getElementById('PrimerNumero').value = 0;
    document.getElementById('SegundoNumero').value = 0;

    comenzar();
}