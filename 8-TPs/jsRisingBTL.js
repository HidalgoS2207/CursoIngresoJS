/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() 
{
    var edad = Number.MAX_VALUE;
    var sexo = "Undefined"; 
    var EC = Number.MAX_VALUE; 
    var SB = Number.MIN_VALUE; 
    var NL = Number.MAX_VALUE; 
    var nac = "Undefined";

    while(edad > 90 || edad < 18 || isNaN(edad))
    {
        edad = prompt("Ingrese edad de la persona: " , "Entre 18 y 90 años");
        edad = parseInt(edad);

        if(edad > 90 || edad < 18 || isNaN(edad))
        {
            alert("Fuera de rango. Ingrese edad de la persona nuevamente.");
        }
    }

    while(sexo != "M" && sexo != "F")
    {
        sexo = prompt("Ingrese sexo de la persona: " , "M ó F");

        if(sexo != "M" && sexo != "F")
        {
            alert("Error en el ingreso de datos. Ingrese sexo de la persona nuevamente.");
        }
    }

    while(EC < 1 || EC > 4 || isNaN(EC))
    {
        EC = prompt("Ingrese Estado Civil de la persona: " , "1 - S | 2 - C | 3 - D | 4 - V");
        EC = parseInt(EC);

        if(EC > 4 || EC < 1 || isNaN(EC))
        {
            alert("Fuera de rango. Ingrese estado civil de la persona nuevamente.");
        }
    }

    while(SB < 8000 || isNaN(SB))
    {
        SB = prompt("Ingrese sueldo bruto de la persona: " , "Mayor a $8000");
        SB = parseInt(SB);

        if(SB < 8000 || isNaN(SB))
        {
            alert("Sueldo inferior a $8000 no válido. Ingrese sueldo bruto de la persona nuevamente.");
        }
    }

    while(NL > 9999 || NL < 1000 || isNaN(NL))
    {
        NL = prompt("Ingrese número de legajo de la persona: " , "XXXX");
        NL = parseInt(NL);

        if(NL > 9999 || NL < 1000 || isNaN(NL))
        {
            alert("Fuera de rango. Ingrese número de legajo de la persona nuevamente.");
        }
    }

    while(nac != "A" && nac != "E" && nac != "N")
    {
        nac = prompt("Ingrese nacionalidad de la persona: " , "A - Arg | E - Ext | N - Nac");

        if(nac != "A" && nac != "E" && nac != "N")
        {
            alert("Error en el ingreso de datos. Ingrese nacionalidad de la persona nuevamente.");
        }
    }
    
    document.getElementById('Edad').value = edad;
    document.getElementById('Sexo').value = sexo;
    document.getElementById('EstadoCivil').value = EC;
    document.getElementById('Sueldo').value = SB;
    document.getElementById('Legajo').value = NL;
    document.getElementById('Nacionalidad').value = nac;
}
