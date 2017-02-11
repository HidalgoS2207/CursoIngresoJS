/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
 	//var pos_num = document.getElementById('numero').value;
}

function NumerosPares()
{
	var pos_num = document.getElementById('numero').value;

	var cant_pares = 0;
	var concatenated;

	if(pos_num >= 0 && !isNan(pos_num))
	{
		for(var i = pos_num ; i >= 0 ; i--)
		{
			if(i % 2 == 0)
			{
				cant_pares++;

				concatenated = cant_pares + " - " + i + "<br>";

				document.write(concatenated);
			}
		}
	}
	else
	{
		document.write("<br>ERROR. NON POSITIVE NUMBER");
	}
}

function NumerosImpares()
{
	var pos_num = document.getElementById('numero').value;

	var cant_impares = 0;
	var concatenated;

	if(pos_num >= 0 && !isNan(pos_num))
	{
		for(var i = pos_num ; i >= 0 ; i--)
		{
			if(i % 2 != 0)
			{
				cant_impares++;

				concatenated = cant_impares + " - " + i + "<br>";

				document.write(concatenated);
			}
		}
	}
	else
	{
		document.write("<br>ERROR. NON POSITIVE NUMBER");
	}
}

function NumerosDivisibles()
{
	var div_num = document.getElementById('numero').value;

	var cant_div = 0;
	var concatenated;

	if(div_num >= 0 && !isNan(div_num))
	{
		for(var i = 0 ; i < 101 ; i++)
		{
			if(div_num % i == 0)
			{
				cant_div++;

				concatenated = cant_div + " - " + i + "<br>";

				document.write(concatenated);
			}
		}
	}
	else
	{
		document.write("<br>ERROR. NON POSITIVE NUMBER");
	}
}

function VerificarPrimo()
{
	var num = document.getElementById('numero').value;
	var counter = 0;

	var concatenated;

	if(num >= 0 && !isNan(num))
	{
		for(var i = 0 ; i <= num ; i++)
		{
			if(num % i == 0)
			{
				counter++;

				concatenated = counter + " - " + i + "<br>";

				document.write(concatenated);
			}
		}

		if(counter == 2)
		{
			document.write("<br>NUMERO PRIMO<br>");
		}
		else
		{
			document.write("<br>NO ES NUMERO PRIMO<br>");
		}
	}
	else
	{
		document.write("<br>ERROR. NON POSITIVE NUMBER");
	}
}

function NumerosPrimos()
{
	var num = document.getElementById('numero').value;
	var counter = 0;
	var global_counter = 0;

	var concatenated;

	if(num > 0 && !isNan(num))
	{
		for(var i = num ; i >= 0 ; i--)
		{
			counter = 0;

			for(var j = i ; j >= 1 ; j--)
			{
				if(i % j == 0)
				{
					counter++;
				}
			}

			if(counter == 2)
			{
				concatenated = i + " - NUMERO PRIMO.<br>";

				document.write(concatenated);

				global_counter++;
			}
		}

		concatenated = "<br>SE HALLARON " + global_counter + " NUMEROS PRIMOS";
		document.write(concatenated);
	}
	else
	{
		document.write("<br>ERROR. NON POSITIVE NUMBER");
	}
}