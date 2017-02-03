/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var dataToShow = prompt("Ingrese dato a mostrar: ");
	
	document.GetElementById('elNombre').value = dataToShow;
}

