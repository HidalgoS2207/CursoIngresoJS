function Mostrar()
{
	var mesDelAño = document.getElementById('mes').value;
	
	switch(mesDelAño)
	{
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frío. Hace calor!");
			break;
		case "Julio":
		case "Agosto"
			alert("Abrigate que hace frìo.");
			break;
		default:
			alert("Falta para el invierno.");
			break;
	}
}