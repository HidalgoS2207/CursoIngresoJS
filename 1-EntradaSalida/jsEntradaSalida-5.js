/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var edad = document.getElementById('laEdad').value;
	var nombre = document.getElementById('elNombre').value;
	
	var concatenated = "Usted se llama " + nombre + " y tiene " + edad + " años";
	
	alert(concatenated);
}

