function Mostrar()
{
	var suma = 0.0;
	var promedio = 0.0;
	var counter = 0;

	var numero = prompt("Ingrese número" , "");
	suma = suma + parseInt(numero);

	while(counter != 4)
	{
		var concatenated = "Ingrese siguiente número. Counter " + counter; 

		numero = prompt( concatenated, "");

		suma = suma + parseInt(numero);

		counter++;
	}

	promedio = suma / 5;

	document.getElementById('suma').value = suma;
	document.getElementById('promedio').value = promedio;
}