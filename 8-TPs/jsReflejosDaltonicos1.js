/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var init;

function comenzar()
{
    ColorSecreto = (parseInt(Math.random() * 6)) + 1

    //document.getElementById('ColorElejido').value = "Lorem ipsum dolor sit amet";

    switch(ColorSecreto)
    {
        case 1:
        document.getElementById('ColorElejido').style.color = "#0000FF";
        break;
        case 2:
        document.getElementById('ColorElejido').style.color = "#FFFF00";
        break;
        case 3:
        document.getElementById('ColorElejido').style.color = "#800000";
        break;
        case 4:
        document.getElementById('ColorElejido').style.color = "#008000";
        break;
        case 5:
        document.getElementById('ColorElejido').style.color = "#87CEEB";
        break;
        case 6:
        document.getElementById('ColorElejido').style.color = "#FF0000";
        break;
    }

    var color_escrito = (parseInt(Math.random() * 6)) + 1;

    switch(color_escrito)
    {
        case 1:
        document.getElementById('ColorElejido').value = "Azul";
        break;
        case 2:
        document.getElementById('ColorElejido').value = "Amarillo";
        break;
        case 3:
        document.getElementById('ColorElejido').value = "Marrón";
        break;
        case 4:
        document.getElementById('ColorElejido').value = "Verde";
        break;
        case 5:
        document.getElementById('ColorElejido').value = "Celeste";
        break;
        case 6:
        document.getElementById('ColorElejido').value = "Rojo";
        break;
    }
    
    var init_time = new Date();
    init = init_time.getTime();
}

function Responder(colorParametro)
{
    var atributo;
    var concatenated;

    var end = new Date();
    end = end.getTime();

    switch(colorParametro)
    {
        case "azul":
        atributo = 1;
        break;
        case "amarillo":
        atributo = 2;
        break;
        case "marron":
        atributo = 3;
        break;
        case "verde":
        atributo = 4;
        break;
        case "celeste":
        atributo = 5;
        break;
        case "rojo":
        atributo = 6;
        break;
    }

    if(ColorSecreto == atributo)
    {
        var tiempo_medido = parseFloat((end - init)) / 1000;
        concatenated = "Correcto. Su tiempo fue de: " + (tiempo_medido) + " segundos.";

        alert(concatenated);
    }
    else
    {
        alert("Incorrecto.");
    }

    tiempo_medido = 0.0;
    init = 0.0;
    comenzar();
}
