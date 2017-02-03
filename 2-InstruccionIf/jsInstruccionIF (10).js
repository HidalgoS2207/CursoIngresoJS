function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var ran = Math.random();

	ran = ran * 10;
	ran = parseInt(ran);

	var concatenated;

	if(ran >= 9)
	{
		concatenated = "Excelente. Su nota es " + ran;

		alert(concatenated);
	}
	else if(ran > 4)
	{
		concatenated = "Aprobó. Su nota es " + ran;

		alert(concatenated);
	}
	else
	{
		concatenated = "Vamos, la proxima se puede. Su nota es " + ran;

		alert(concatenated);
	}

}//FIN DE LA FUNCIÓN