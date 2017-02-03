function Mostrar()
{
//tomo la edad  

	var edad = document.getElementById('edad').value;

	if(edad == 15)
	{
		alert("Niña Bonita");
	}
	else
	{
		var concatenated = "La edad ingresada es " + edad;

		alert(concatenated);
	}

}//FIN DE LA FUNCIÓN