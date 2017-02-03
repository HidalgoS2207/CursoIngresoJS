function Mostrar()
{
//tomo la edad  

	var edad = document.getElementById('edad').value;

	var concatenated;

	if(edad >= 18)
	{
		concatenated = "Mayor de edad. Posee " + edad + " años";

		alert(concatenated);
	}
	else
	{
		concatenated = "Menor de edad.Posee " + edad + " años";

		alert(concatenated);
	}
}//FIN DE LA FUNCIÓN