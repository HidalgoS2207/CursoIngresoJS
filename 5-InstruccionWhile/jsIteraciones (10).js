function Mostrar()
{
	var suma_neg = 0.0;
	var suma_pos = 0.0;
	var pos_counter = 0.0;
	var neg_counter = 0.0;
	var ceros_counter = 0.0;
	var pares_counter = 0.0;
	var pos_promedio = 0.0;
	var neg_promedio = 0.0;
	var dif = 0.0;

	var numero = prompt("Ingrese numero (escriba 'salir' para terminar)");

	while(numero != "salir")
	{
		numero = parseFloat(numero);

		if(numero == 0)
		{
			ceros_counter++;
		}
		else
		{
			if(numero > 0)
			{
				pos_counter++;

				suma_pos = suma_pos + numero;
			}
			else
			{
				neg_counter++;

				suma_neg = suma_neg + numero;

				numero = numero * (-1);
			}

			if((numero % 2) == 0)
			{
				pares_counter++;
			}
		}

		numero = prompt("Ingrese siguiente numero (escriba 'salir' para terminar)");
	}

	if(pos_counter != 0)
	{
		pos_promedio = suma_pos / pos_counter;
	}

	if(neg_counter != 0)
	{
		neg_promedio = suma_neg / neg_counter;
	}

	dif = suma_pos + suma_neg;

	//presentacion de los resultados:

	var concatenated;

	concatenated = "La cantidad de ceros es = " + ceros_counter + "<br><br>";
	document.write(concatenated);

	concatenated = "La suma de los números negativos es = " + suma_neg + "<br>";
	document.write(concatenated);

	concatenated = "La cantidad de números negativos es = " + neg_counter+ "<br>";
	document.write(concatenated);

	concatenated = "El promedio de los números negativos es = " + neg_promedio + "<br><br>";
	document.write(concatenated);

	concatenated = "La suma de los números positivos es = " + suma_pos+ "<br>";
	document.write(concatenated);

	concatenated = "La cantidad de números positivos es = " + pos_counter+ "<br>";
	document.write(concatenated);

	concatenated = "El promedio de los números positivos es = " + pos_promedio + "<br><br>";
	document.write(concatenated);

	concatenated = "La cantidad de números pares es = " + pares_counter+ "<br><br>";
	document.write(concatenated);

	concatenated = "La diferencia entre la suma de números positivos y negativos es = " + dif;
	document.write(concatenated);
}