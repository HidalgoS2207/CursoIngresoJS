/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
  var dato_001 = document.getElementById('numeroUno').value;
  var dato_002 = document.getElementById('numeroDos').value;
  
  var suma = parseInt(dato_001) +parseInt(dato_002);
  
  alert(suma);
}

