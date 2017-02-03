/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	  var dato_001 = document.getElementById('numeroUno').value;
 	 var dato_002 = document.getElementById('numeroDos').value;
  
 	 var suma = parseInt(dato_001) +parseInt(dato_002);
  
  	alert(suma);
}

function restar()
{
	  var dato_001 = document.getElementById('numeroUno').value;
  var dato_002 = document.getElementById('numeroDos').value;
  
  var resta = dato_001 - dato_002;
  
  alert(resta);
}

function multiplicar()
{ 
		  var dato_001 = document.getElementById('numeroUno').value;
  var dato_002 = document.getElementById('numeroDos').value;
  
  var mult = dato_001 * dato_002;
  
  alert(mult);
}

function dividir()
{
		  var dato_001 = document.getElementById('numeroUno').value;
  var dato_002 = document.getElementById('numeroDos').value;
  
  var division = dato_001 / dato_002;
  
  alert(division);
}

