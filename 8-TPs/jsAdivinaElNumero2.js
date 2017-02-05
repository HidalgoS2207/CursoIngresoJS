/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto = 0; 
var contadorIntentos;

function comenzar()
{
  numeroSecreto = parseInt(Math.random() * 100) + 1;
}

function verificar()
{
	contadorIntentos = document.getElementById('intentos').value;
	contadorIntentos++;

	var concatenated;

    var numero_ingresado = document.getElementById('numero').value;

    if(numero_ingresado == numeroSecreto)
    {
		switch(contadorIntentos)
		{
			case 1:
				concatenated = "Usted es un ganador. Lo logró con un solo intento.";
				break;
			case 2:
				concatenated = "Excelente percepción. Lo logró en dos intentos.";
				break;
			case 3:
				concatenated = "Esto es suerte. Lo logró en tres intentos.";
				break;
			case 4:
				concatenated = "Excelente técnica. Lo logró en cuatro intentos.";
				break;
			case 5:
				concatenated = "Usted está en la media. Lo logró en cinco intentos.";
				break;
		}

		if(contadorIntentos >= 6 && contadorIntentos <= 10)
		{
			concatenated = "Falta técnica. Lo logró en " + contadorIntentos + " intentos.";
		}
		else if(contadorIntentos > 10)
		{
			concatenated = "Afortunado en el amor. Lo logró en " + contadorIntentos + " intentos.";
		}

        alert(concatenated);
    }
    else
    {
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