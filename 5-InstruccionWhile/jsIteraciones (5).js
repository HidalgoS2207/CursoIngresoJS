function Mostrar()
{
    var sexo = prompt("Ingrese su género (m ó f): " , "");

    while(sexo != "m" && sexo != "f")
    {
        sexo = prompt("Error. Sólo existen dos géneros. Ingrese m ó f");
    }

    if(sexo == "m")
    {
        document.getElementById('Sexo').value = "Masculino";
    }
    else
    {
        document.getElementById('Sexo').value = "Femenino";
    }
}