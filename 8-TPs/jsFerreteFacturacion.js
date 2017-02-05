/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio001 = document.getElementById('PrecioUno').value;
    var precio002 = document.getElementById('PrecioDos').value;
    var precio003 = document.getElementById('PrecioTres').value;

    precio001 = parseFloat(precio001);
    precio002 = parseFloat(precio002);
    precio003 = parseFloat(precio003);

    var suma = precio001 + precio002 + precio003;

    var concatenated = "La suma de los precios ingresados es: " + suma;

    alert(concatenated);
}

function Promedio () 
{
	var precio001 = document.getElementById('PrecioUno').value;
    var precio002 = document.getElementById('PrecioDos').value;
    var precio003 = document.getElementById('PrecioTres').value;

    precio001 = parseFloat(precio001);
    precio002 = parseFloat(precio002);
    precio003 = parseFloat(precio003);

    var promedio = (precio001 + precio002 + precio003) / 3;

    var concatenated = "El promedio de los precios ingresados es: " + promedio;

    alert(concatenated);
}

function PrecioFinal () 
{
	var precio001 = document.getElementById('PrecioUno').value;
    var precio002 = document.getElementById('PrecioDos').value;
    var precio003 = document.getElementById('PrecioTres').value;

    precio001 = parseFloat(precio001);
    precio002 = parseFloat(precio002);
    precio003 = parseFloat(precio003);

    var IVA = (precio001 + precio002 + precio003)*1.21;

    var concatenated = "El precio final al respecto de los precios ingresados es: " + IVA;

    alert(concatenated);
}