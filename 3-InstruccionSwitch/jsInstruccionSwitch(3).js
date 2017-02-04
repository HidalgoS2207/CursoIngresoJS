function Mostrar()
{
	var mesDelAño = document.getElementById('mes').value;
	
	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes no tiene mas de 29 días.")
			break;
		default:
			alert("Mes de 30 o 31 días.")
			break;
	}
}