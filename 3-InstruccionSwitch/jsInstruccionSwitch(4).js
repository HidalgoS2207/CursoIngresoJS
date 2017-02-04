function Mostrar()
{  
	var mesDelAño = document.getElementById('mes').value;
	
	var diasEnElMes;
	
	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes tiene 28 días.")
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Mes de 30 días");
			break;
		default:
			alert("Mes de 31 días");
			break;
	}
}