function VerificarBase2(){
	var x;
	var resultado=0;
	var cont=0;
	var temp;
	var multiplicador;
	x=parseInt(document.base.num2.value);
	while(x!=0){
	 temp=x%10;
	 if(temp<2){
     resultado=resultado+temp*Math.pow(2,cont);
	 cont++;
	 x=parseInt(x/10);
	 }else{
	 alert("EL NUMERO NO ESTA EN BASE 2");
	 resultado=0;	 
	 break;
	 }
	}
	document.base.resultado2.value=resultado;
}

function VerificarBase8(){
	var x;
	var resultado=0;
	var cont=0;
	var temp;
	var multiplicador;
	x=parseInt(document.base.num8.value);
	while(x!=0){
	 temp=x%10;
	 if(temp<8){
     resultado=resultado+temp*Math.pow(8,cont);
	 cont++;
	 x=parseInt(x/10);
	 }else{
	 alert("EL NUMERO NO ESTA EN BASE 8");
	 resultado=0;	 	 
	 break;
	 }
	}
	document.base.resultado8.value=resultado;
}
function Piramide(){
	var base = prompt("Ingrese la base");
	var carac = prompt("Ingrese un caracter");
	   for (var i=base; i >=1; i--) {
	   	for(j=base-i; j>=1 ;j--){
			document.write('&nbsp');
			}
		for(var j=2*i-1;j>=1;j--){
			document.write(carac+"\t");
	   }
		   document.write("<br>");

	}
}
function signos() {
	let mes,dia,respuesta; 
	mes=document.ejerc03.getElementById("mes").value;
	dia=document.ejerc03.getElementById("dia").value;
	respuesta=""

	if (mes == 1 && dia >= 20 || mes == 2 && dia <= 18){
        respuesta = ("Acuario");
     	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-aquarius.png'width=20%>";
    }
    else if (mes == 2 && dia >= 19 || mes == 3 && dia <= 20){
       	respuesta = ("Piscis");
       	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-pisces.png'width=20%>";
      	
    }
    else if (mes == 3 && dia >= 21 || mes == 4 && dia <= 19){
       	respuesta = ("Aries");
      	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-aries.png'width=20%>";
     	}
   else if (mes == 4 && dia >= 20|| mes == 5 && dia <= 20){
        respuesta = ("Tauro");
       	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-taurus.png'width=20%>";
       	}
    else if (mes == 5 && dia >= 21 || mes == 6 && dia <= 20){
        respuesta = ("Geminis");
       	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-gemini.png'width=20%>";
      	}
    else if (mes == 6 && dia >= 21 || mes == 7 && dia <= 22){
        respuesta = ("Cancer");
       	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-cancer.png'width=20%>";
      	}
    else if (mes == 7 && dia >= 23 || mes == 8 && dia <= 22){
        respuesta = ("Leo");
       	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-leo.png'width=20%>";
        }
    else if (mes == 8 && dia >= 23 || mes == 9 && dia <= 22){
        respuesta = ("Virgo");
       	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-virgo.png'width=20%>";
        }
    else if (mes == 9 && dia >= 23 || mes == 10 && dia <= 22){
      	respuesta = ("Libra");
       	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-libra.png'width=20%>";
        }
    else if (mes == 10 && dia >= 23|| mes == 11 && dia <= 21){
       	respuesta = ("Escorpio");
       	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-scorpio.png'width=20%>";
        }
    else if (mes == 11 && dia >= 22 || mes == 12 && dia <= 21){
        respuesta = ("Sagitario");
       	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-sagittarius.png'width=20%>";
        }
    else if(mes == 12 && dia >= 22 || mes == 1 && dia <= 19){
        respuesta = ("Capricornio");
     	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-capricorn.png'width=20%>";
     	}
    else{
       alert("Escribir bien la fecha");
    }
 	document.getElementById("resultado").innerHTML= result;
}