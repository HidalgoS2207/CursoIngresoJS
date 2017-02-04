function Mostrar()
{
	var suma = 0.0;
	var mult = 0.0;
	var numero = 0;

	numero = prompt("Ingrese numero real (0 para salir): " , "");
	numero = parseFloat(numero);
	alert(numero);

	while(numero != 0.0)
	{
		if(numero > 0)
		{
			suma = suma + numero;
		}
		else
		{
			if(mult == 0.0)
			{
				mult = 1.0;
			}
			
			mult = mult * numero;
		}

		numero = prompt("Ingrese siguiente numero real (0 para salir): " , "");
		numero = parseFloat(numero);
	}

	document.getElementById('suma').value = suma;
	if(mult != 0)
	{
		document.getElementById('producto').value = mult;
	}
	else
	{
		document.getElementById('producto').value = 0;
	}
}