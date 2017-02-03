function Mostrar()
{
//tomo la edad  

	var edad = document.getElementById('edad').value;

	var concatenated;

	if(edad > 12 && edad < 18)
	{
		concatenated = "Adolescente. Posee " + edad + " años";

		alert(concatenated);
	}
	else
	{
		concatenated = "Posee " + edad + " años";

		alert(concatenated);
	}

}//FIN DE LA FUNCIÓN