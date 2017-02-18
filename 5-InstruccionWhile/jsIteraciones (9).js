function Mostrar()
{
		var max = 0;
		var min = 99;

		var nota_min = 11;

		var nota_counter = 0;

		var nombre = "nom";

		var hombre_des = 0;
		var mujer_des = 0;

		var suma_notas = 0.0;
		var notas_counter = 0;
		var promedio_notas = 0.0;

		var mujeres_counter = 0;
		var suma_edad_mujeres = 0;
		var promedio_edad_mujeres = 0.0;

		var mujeres_par_menor_edad = 0;

		var primer_diez = false;

		var nombre_diez = "nombre_diez";
		var edad_diez = 0;
		var sexo_diez = "nada";

		//min = Number.MAX_VALUE;
		//max = Number.MAX_VALUE * (-1);

		var edad;
		var nombre_aux = "nom";
		var sexo = "sexo";
		var sexo_aux = "sexo";

		nombre = prompt("Por favor ingrese nombre:");
		edad = prompt("Ingrese edad: (escriba 'salir' para terminar)");
		edad = parseFloat(edad);
		while(edad > 99 || edad < 0)
		{
			edad = prompt("Fuera de rango. Ingrese edad nuevamente");
			edad = parseFloat(edad);
		}
		sexo = prompt("Ingrese sexo de la persona (m | f)");
		while(sexo != "m" && sexo != "f")
		{
			sexo = prompt("Ingrese nuevamente sexo de la persona (m | f)");
		}
		nota = prompt("Ingrese nota obtenida ");
		nota = parseFloat(nota);
		while(nota < 0 || nota > 10)
		{
			nota = prompt("Ingrese nota obtenida nuevamnente");
			nota = parseFloat(nota);
		}

		if(nota >= 4)
		{
			nota_counter++;
		}

					//mujeres y hombres desarpobados

		if(nota < 4 && edad != "salir")
		{
			switch(sexo)
			{
				case "m":
				hombre_des++;
				break;
				case "f":
				mujer_des++;
				break;
			}
		}

		//promedio
		notas_counter++;
		suma_notas = suma_notas + parseFloat(nota);

		//la edad promedio de las mujeres

		if(sexo == "f")
		{
			mujeres_counter++;
			suma_edad_mujeres = suma_edad_mujeres + edad;
		}

		if(edad < 18 && sexo == "f")
		{
			if(nota % 2 == 0 && nota >= 4)
			{
				mujeres_par_menor_edad++;
			}
		}

		if(nota == 10 && !primer_diez)
		{
			primer_diez = true;

			var nombre_diez = nombre;
			var edad_diez = 0;
			var sexo_diez = sexo;
		}

		//bucle principal

		while(edad != "salir")
		{
			edad = parseFloat(edad);

			if(edad > max)
			{
				nombre_aux = nombre;
				max = edad;
			}
			
			if(edad < min)
			{
				min = edad;
			}
			
			if(nota < nota_min)
			{
				nota_min = nota;
				sexo_aux = sexo;
			}

			nombre = prompt("Por favor ingrese nombre: (nada si terminó)");
			edad = prompt("Ingrese edad: (escriba 'salir' para terminar)");
			if(edad != "salir")
			{
				while(edad > 99 || edad < 0)
				{
					edad = prompt("Fuera de rango. Ingrese edad nuevamente");
					edad = parseFloat(edad);
				}
			}

			if(edad != "salir")
			{
				sexo = prompt("Ingrese sexo de la persona (m | f)");
				while(sexo != "m" && sexo != "f")
				{
					sexo = prompt("Ingrese nuevamente sexo de la persona (m | f)");
				}
				nota = prompt("Ingrese nota obtenida ");
				while(nota < 0 || nota > 10)
				{
					nota = prompt("Ingrese nota obtenida nuevamnente");
					nota = parseFloat(nota);
				}
			}


			//cantidad de personas aprobadas
			if(nota >= 4 && edad != "salir")
			{
				nota_counter++;
			}
			

			//mujeres y hombres desarpobados

			if(nota < 4 && edad != "salir")
			{
				switch(sexo)
				{
					case "m":
					hombre_des++;
					break;
					case "f":
					mujer_des++;
					break;
				}
			}

			//promedio
			notas_counter++;
			suma_notas = suma_notas + parseFloat(nota);

			//la edad promedio de las mujeres

			if(sexo == "f")
			{
				mujeres_counter++;
				suma_edad_mujeres = suma_edad_mujeres + edad;
			}

			//cantidad mujeres aprobadas con nota par  y menores de edad

			if(edad < 18 && sexo == "f")
			{
				if(nota % 2 == 0 && nota >= 4)
				{
					mujeres_par_menor_edad++;
				}
			}

			//

			if(nota == 10 && !primer_diez)
			{
				primer_diez = true;

				var nombre_diez = nombre;
				var edad_diez = 0;
				var sexo_diez = sexo;
			}

		}//bluce principal end

		promedio_notas = suma_notas / notas_counter;
		promedio_edad_mujeres = suma_edad_mujeres / mujeres_counter;

		var concatenated = "La persona mas vieja es " + nombre_aux;
		alert(concatenated);
		concatenated  = "la nota minima es " + nota_min + " y el sexo de la persona es " + sexo_aux;
		alert(concatenated);
		concatenated = "Hubo " + nota_counter + " aprobados.";
		alert(concatenated);
		concatenated = "Hubo " + hombre_des + " Hombres desaprobados y " + mujer_des + " mujeres desaprobadas.";
		alert(concatenated);
		concatenated = "Promedio notas = " + promedio_notas;
		alert(concatenated);
		concatenated = "Promedio mujeres edad = " + promedio_edad_mujeres;
		alert(concatenated);
		concatenated = "Cantidad mujeres nota par menores de edad = " + mujeres_par_menor_edad;
		alert(concatenated);
		concatenated = "El primer 10 se lo sacó " + nombre_diez + " cuya edad es " + edad_diez + " y su sexo es " + sexo_diez;
		alert(concatenated);
		document.getElementById('maximo').value = max;
		document.getElementById('minimo').value = min;
}