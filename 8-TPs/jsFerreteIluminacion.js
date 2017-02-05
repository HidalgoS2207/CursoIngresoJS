/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad = document.getElementById('Cantidad').value;
    var marca = document.getElementById('Marca').value;

    cantidad = parseInt(cantidad);

    var totalSinDescuento = cantidad * 35;
    var totalConDescuento = 0.0;

    var IIBB = 0.0;

    var concatenated;

    if(cantidad >= 6)
    {
        totalConDescuento = totalSinDescuento * 0.5;
    }
    else if(cantidad == 5)
    {
        if(marca == "ArgentinaLuz")
        {
            totalConDescuento = totalSinDescuento * 0.6;
        }
        else
        {
            totalConDescuento = totalSinDescuento * 0.7;
        }
    }
    else if(cantidad == 4)
    {
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
        {
            totalConDescuento = totalSinDescuento * 0.75;
        }
        else
        {
            totalConDescuento = totalSinDescuento * 0.8;
        }
    }
    else if(cantidad == 3)
    {
        if(marca == "ArgentinaLuz")
        {
            totalConDescuento = totalSinDescuento * 0.85;
        }
        else if(marca == "FelipeLamparas")
        {
            totalConDescuento = totalSinDescuento * 0.9;
        }
        else
        {
            totalConDescuento = totalSinDescuento * 0.95;
        }
    }
    else
    {
        totalConDescuento = totalSinDescuento;
    }

    if(totalConDescuento > 120)
    {
        totalConDescuento = totalConDescuento * 1.1;
        IIBB = totalConDescuento*0.1;
    }

    document.getElementById('precioDescuento').value = totalConDescuento;

    if(IIBB != 0)
    {
        concatenated = "IIBB usted pagó " + IIBB + ".";

        alert(concatenated);
    }
}
