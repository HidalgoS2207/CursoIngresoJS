/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo = document.getElementById('Largo').value;
    var ancho = document.getElementById('Ancho').value;

    var largo_alambre = 3 * ((parseFloat(largo)*2) + (parseFloat(ancho)*2));

    var concatenated = "La cantidad de alambre a utilizar es: " + largo_alambre + " metros";

    alert(concatenated);
}

function Circulo () 
{
	var radio = document.getElementById('Radio').value;

    var largo_alambre = 3 * parseFloat(radio) * 2 * Math.PI;

    var concatenated = "La cantidad de alambre a utilizar es: " + largo_alambre + " metros";

    alert(concatenated);
}

function Materiales () 
{
	var largo = document.getElementById('Largo').value;
    var ancho = document.getElementById('Ancho').value;

    var metros_cuadrados = (parseFloat(largo)) * (parseFloat(ancho));

    var cemento = metros_cuadrados * 2;
    var cal = metros_cuadrados * 3;

    var concatenated = "La cantidad a utilizar es " + cemento + " bolsas de cemento y " + cal + " de cal.";

    alert(concatenated);
}