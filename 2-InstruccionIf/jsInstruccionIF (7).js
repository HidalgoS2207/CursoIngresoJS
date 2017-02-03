function Mostrar()
{
//tomo la edad  
	var edad = document.getElementById('edad').value;
	var EC = document.getElementById('estadoCivil').value;

	var concatenated;

	if(edad >= 18)
	{
		concatenated = "Posee " + edad + " años y el estado civil es " + EC;

		alert(concatenated);
	}
	else
	{
		if(EC == "Soltero")
		{
			concatenated = "Posee " + edad + "años y es soltero.";
		}
		else
		{
			concatenated = "Es muy pequeño para NO ser soltero. Posee " + edad + " años.";
		}
		
		alert(concatenated);
	}

}//FIN DE LA FUNCIÓN