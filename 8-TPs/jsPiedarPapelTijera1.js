/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina = 4;

function comenzar()
{
  eleccionMaquina = parseInt((Math.random() * 3) + 1);

  alert(eleccionMaquina);
}

function piedra()
{
	if(eleccionMaquina == 1)
    {
        alert("Empate");
    }
    else if(eleccionMaquina == 2)
    {
        alert("Perdió");
    }
    else
    {
        alert("Ganó");
    }
}

function papel()
{
    if(eleccionMaquina == 1)
    {
        alert("Ganó");
    }
    else if(eleccionMaquina == 2)
    {
        alert("Empate");
    }
    else
    {
        alert("Perdió");
    }
}

function tijera()
{
	if(eleccionMaquina == 1)
    {
        alert("Perdió");
    }
    else if(eleccionMaquina == 2)
    {
        alert("Ganó");
    }
    else
    {
        alert("Empate");
    }
}