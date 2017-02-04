function Mostrar()
{
		var max = 0.0;
		var min = 0.0;

		min = Number.MAX_VALUE;
		max = Number.MAX_VALUE * (-1);

		var number_retrieved;

		number_retrieved = prompt("Ingrese numero: (escriba 'salir' para terminar)");

		while(number_retrieved != "salir")
		{
			number_retrieved = parseFloat(number_retrieved);

			if(number_retrieved > max)
			{
				max = number_retrieved;
			}
			
			if(number_retrieved < min)
			{
				min = number_retrieved;
			}

			number_retrieved = prompt("Ingrese siguiente número: (escriba 'salir' para terminar)");
		}

		document.getElementById('maximo').value = max;
		document.getElementById('minimo').value = min;
}