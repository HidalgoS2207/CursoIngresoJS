function Mostrar()
{
//tomo la edad  
	var edad = document.getElementById('edad').value;
	var EC = document.getElementById('estadoCivil').value;

	var concatenated;

	if(edad >= 18)
	{
		concatenated = "Tiene " + edad + " años y el estado civil es " + EC + ".";

		if(EC == "Soltero")
		{
			concatenated = "Es soltero y no es menor. Tiene " + edad + "años.";
		}
		else
		{
			concatenated = "Tiene " + edad + " años y es " + EC + ".";
		}

		alert(concatenated);
	}
	else
	{
		concatenated = "Es menor, tiene " + edad + " años y es " + EC  + ".";

		alert(concatenated);
	}
}//FIN DE LA FUNCIÓN