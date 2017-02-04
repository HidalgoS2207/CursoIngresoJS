function Mostrar()
{
	var numero = prompt("Ingrese número del 1 al 10." , "");

	while(numero > 9 || numero < 0)
	{
		numero = prompt("Fuera de rango. Ingrese número del 1 al 10." , "");
	}

	document.getElementById('Numero').value = numero;
}