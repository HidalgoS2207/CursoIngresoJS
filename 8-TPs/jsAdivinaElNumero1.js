/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto = 0.0; 
var contadorIntentos = 0;

function comenzar()
{
  numeroSecreto = parseInt(Math.random() * 100) + 1;
}

function verificar()
{
    var concatenated;

    var numero_ingresado = document.getElementById('numero').value;

    if(numero_ingresado == numeroSecreto)
    {
      concatenated = "Usted es un ganador. Y en solo " + contadorIntentos + " intentos.";

      alert(concatenated);
    }
    else
    {
      contadorIntentos = document.getElementById('intentos').value;

      contadorIntentos++;

      if(numero_ingresado < numeroSecreto)
      {
        alert("El numero ingresado es menor al numero secreto.");
      }
      else
      {
         alert("El numero ingresado es mayor al numero secreto.");
      }
    }

    document.getElementById('intentos').value = contadorIntentos;
}