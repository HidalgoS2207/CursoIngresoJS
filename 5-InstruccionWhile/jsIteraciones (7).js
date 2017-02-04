function Mostrar()
{
	var suma = 0.0;
	var promedio = 0.0;
	var counter = 0;

	var numero = prompt("Ingrese número: " , "");
	counter++;
	if(numero >= 0)
	{
		suma = parseInt(numero);

		while(numero != (-1))
		{
			var numero = prompt("Ingrese siguiente número: " , "");

			if(numero >= 0)
			{
				suma = suma + parseInt(numero);

				counter++;
			}
		}	
	}

	promedio = suma / counter;

	document.getElementById('suma').value = suma;
	document.getElementById('promedio').value = promedio;
}