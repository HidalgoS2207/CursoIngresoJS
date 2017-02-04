function Mostrar()
{
	
	var mesDelAño = document.getElementById('mes').value;
	
	switch(mesDelAño)
	{
		case "Enero":
			alert("Que comiences bien el año!!");
			break;
		case "Marzo":
			alert("a clases!!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!");
			break;
		case "Diciembre":
			alert("Felices Fiestas!!");
			break;
		default:
			alert(mesDelAño);
			break;
	}

}