/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temp = document.getElementById('Temperatura').value;

    temp = parseFloat(temp);

    var celsius = (temp - 32)*(5/9);

    var concatenated = "La temperatura " + temp + " Farenheit en Celsius es: " + celsius +  "º";

    alert(concatenated);
}

function CentigradosFahrenheit () 
{
	var temp = document.getElementById('Temperatura').value;

    temp = parseFloat(temp);

    var far = (temp * (9/5)) + 32;

    var concatenated = "La temperatura "  + temp + " Celsius en Farenheit es: " + far + "º";

    alert(concatenated);
}
