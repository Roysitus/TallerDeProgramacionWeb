//Para el ejercicio01

function validar01() {
	let valor_1;
	valor_1=document.ejerc01.numero.value;

	if (valor_1==0) {
		alert("Es obligatorio rellenar el campo");
		return 0;
	}
	else if (isNaN(valor_1)) {
		alert("Porfavor Ingresar numero, no se permite letras");
		return 0;
	}
	document.ejerc01.submit();
}

function elegirOpcion() {
	let opciones,valor;
	opciones=document.getElementsByName("opcion");
	for(let i=0;i<opciones.length;i++){
		if (opciones[i].checked) {
			valor=opciones[i].value;
		}
	}
}

function validar02(sistema) {
	let opc,nu;
	const binario=Number.parseInt(sistema,2);
	const octal=Number.parseInt(sistema,8)
	opc=document.ejerc02.opcion.value;
	nu=document.ejerc01.numero.value;

	if (opc=='binario' && Number.isNaN(binario)){
		alert("Ingresar solo los numeros 0 y 1");
		return 0;
	}
	else if (opc=='octal' && Number.isNaN(octal)) {
		alert("Ingresar solos los numeros 0 y 7");
		return 0;
	}
	document.ejerc02.submit();
}

function BinarioADecimal(x) {
	if (x.constructor !=String) {
		return null;
	}
	x=x.replace(/[^01]/gi,'');
	return Number.parseInt(x,2);;
}

function BinarioAOctal(y) {
	if (y.constructor !=String) {
		return null;
	}
	y=y.replace(/[^07]/gi,'');
	return Number.parseInt(y,8);;
}

//Para el ejercicio02

function validar03() {
	let numeroF,car;
	numeroF=document.ejercicio02.numero.value;
	caracter=document.ejercicio02.caracter.value;

	if (numeroF==0) {
		alert("Debe ingresar el numero de filas");
		return 0;
	}
	else if (isNaN(numeroF)) {
		alert("Solo ingrese números. No se acepta letras ni otros caracteres");
		return 0;
	}

	if (caracter.length>1) {
		alert("Solo ingrese un caracter");
		return 0;
	}
	document.ejercicio02.submit();
}

function piramide(argument) {
	let tamaño,carac;
	var a=0;
	tamaño=parseInt(document.ejercicio02.numero.value);
	carac=parseInt(document.getElementById("caracter").value);
	//Línea de control externo.
	for (var i =(2*tamaño-1); i >= 1; i-=2) {
	
		for (var j = 0; j < a; j++) {// poner espacion
			document.write('&nbsp');
		}
		
		for (var k = 1; k <= i; k++) {//poner simbolos
			document.write(carac);
		}
		document.write('<br/>');
		a++;
	}
}

function zodiaco() {
	let mescumple,diacumple,result; 
	mescumple=document.ejerc03.getElementById("mes").value;
	diacumple=document.ejerc03.getElementById("dia").value;
	result="nada hasta que ingreses una fecha."

	if (mescumple == 1 && diacumple >= 20 || mescumple == 2 && diacumple <= 18){
        result = ("Acuario");
     	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-aquarius.png'width=20%>";
   		document.getElementById("caracteristica").innerHTML="Los Acuario son extremadamente vulnerables y sensibles.Los Acuarianos a menudo se asocian con clubes, organizaciones y foros y participan con entusiasmo en discusiones intelectuales. Los Acuarianos son grandes comunicadores siempre y cuando estén dentro de su reino mental.";
    }
    else if (mescumple == 2 && diacumple >= 19 || mescumple == 3 && diacumple <= 20){
       	result = ("Piscis");
       	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-pisces.png'width=20%>";
      	document.getElementById("caracteristica").innerHTML="Los piscianos viven en su mundo imaginario que apenas tiene conexión con la realidad. Les encanta mirar el mundo a través de una ventana rosada. Cuando la realidad los desafía, los piscianos tienden a retirarse a su mundo de imaginación.";
    }
    else if (mescumple == 3 && diacumple >= 21 || mescumple == 4 && diacumple <= 19){
       	result = ("Aries");
      	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-aries.png'width=20%>";
     	document.getElementById("caracteristica").innerHTML="Aries demuestra una fuerte personalidad. Tienen fuertes cualidades de liderazgo y son honestos y directos. Aries a menudo tiene una fuerte determinación y no puede ser disuadido por los fracasos. Aries siempre está ansioso por la acción. Asumen el liderazgo espontáneamente. Pero no juzgan los pros y los contras de una situación antes de actuar. Esto también los hace vulnerables.";
   	}
   else if (mescumple == 4 && diacumple >= 20|| mescumple == 5 && diacumple <= 20){
        result = ("Tauro");
       	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-taurus.png'width=20%>";
       	document.getElementById("caracteristica").innerHTML="Los Tauro se destacan por su determinación y celo. No es fácil distraer a un taurino de su objetivo una vez que ha fijado su objetivo. Se mantendría enfocado en su objetivo y se esforzaría continuamente para lograrlo. Los Tauro otorgan un gran valor a la simplicidad y la funcionalidad. A menudo viven una vida sencilla y sin lujos."; 
    }
    else if (mescumple == 5 && diacumple >= 21 || mescumple == 6 && diacumple <= 20){
        result = ("Geminis");
       	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-gemini.png'width=20%>";
      	document.getElementById("caracteristica").innerHTML="Los Géminis están llenos de dualidad. Siempre ven una situación desde una perspectiva dual. Los Géminis se caracterizan por la inconstancia y la naturaleza dual. Por lo tanto, Géminis siempre permanece confundido acerca de sus sentimientos. Sin embargo, los Géminis son buenos comunicadores y expresan un buen control sobre el lenguaje. A menudo se encuentra que tienen conocimiento de varios idiomas.";
    }
    else if (mescumple == 6 && diacumple >= 21 || mescumple == 7 && diacumple <= 22){
        result = ("Cancer");
       	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-cancer.png'width=20%>";
      	document.getElementById("caracteristica").innerHTML="Los Cáncer son emocionales. Sus vidas a menudo se ven afectadas por cambios de humor. Puedes encontrar a un Cáncer en diferentes estados de ánimo incluso durante el día. Sin embargo, la verdadera emoción de Cáncer se esconde detrás de su compostura. Pero son personas blandas y pueden herirse fácilmente con palabras desagradables. Las personas del signo zodiacal Cáncer pueden ser propensas a la depresión y otros problemas mentales. Sin embargo, los cánceres son excelentes personas familiares y disfrutan de grandes familias a su alrededor.";
    }
    else if (mescumple == 7 && diacumple >= 23 || mescumple == 8 && diacumple <= 22){
        result = ("Leo");
       	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-leo.png'width=20%>";
        document.getElementById("caracteristica").innerHTML="Los Leo son de espíritu cálido. Están llenos de energía y siempre ansiosos por entrar en acción. Los Leo anhelan el reconocimiento y la admiración. A los Leo siempre les encanta estar en el centro de atracción. Se esfuerzan por llegar a la cima en todo lo que hacen. A los Leo siempre les encanta estar rodeados de una gran multitud y admiradores. Sin embargo, a menudo no son amables con las críticas y no toman las palabras de los críticos a la ligera. Los Leo son muy ambiciosos y eligen a sus conocidos con cuidado. Aspiran al reconocimiento social.";
    }
    else if (mescumple == 8 && diacumple >= 23 || mescumple == 9 && diacumple <= 22){
        result = ("Virgo");
       	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-virgo.png'width=20%>";
        document.getElementById("caracteristica").innerHTML="Los Virgos tienen un agudo sentido del bien y del mal y por eso son muy discriminatorios. Tienen un sentido intuitivo para identificar motivos erróneos en las personas. De ahí que los Virgos extreman la cautela en lo que hacen. La virgen define la pureza y por ello están dotados de la capacidad de distinguir lo bueno de lo malo. Por lo tanto, los Virgos también son fanáticos de la limpieza. A pesar de su inteligencia, los Virgos a menudo permanecen confundidos acerca de las decisiones que toman en su vida. Además, no encontrarás a Virgos llenos de actividades.";
    }
    else if (mescumple == 9 && diacumple >= 23 || mescumple == 10 && diacumple <= 22){
      	result = ("Libra");
       	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-libra.png'width=20%>";
        document.getElementById("caracteristica").innerHTML="Libra es un signo activo y los miembros nacidos bajo el signo están dotados de mucha energía. Pero los Libra también tienden a quedarse sin energía pronto. Libra es el equilibrio y los miembros de este signo tienen una mente muy equilibrada. Se pueden encontrar en la resolución de disputas a menudo. Los Libra siempre tratan de mantener la armonía y el equilibrio. También son muy sensatos y tienen un agudo sentido de la justicia. Por lo tanto, sus sugerencias a menudo son muy buscadas por sus amigos y parientes. Los Libra son personajes de dos facetas. Ambos tienen la alegría y la oscuridad en ellos. Los Libra tienen fases de actividades intensas, pero también pueden caer fácilmente en fases de completa inactividad y apatía.";
    }
    else if (mescumple == 10 && diacumple >= 23|| mescumple == 11 && diacumple <= 21){
       	result = ("Escorpio");
       	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-scorpio.png'width=20%>";
        document.getElementById("caracteristica").innerHTML="Los Escorpio son de naturaleza muy diversa. Los Escorpio guardan rencor y esperarían pacientemente el momento adecuado para atacar. No es probable que olviden ningún acto de traición. Para los Escorpio, lo que está implícito es más fascinante que lo obvio. Los Escorpio a menudo se describen como egoístas. Sin embargo, algunos de los rasgos positivos de Escorpio son la diplomacia, la intuición, la inteligencia, la participación, la determinación, la espiritualidad y la sensibilidad.";
    }
    else if (mescumple == 11 && diacumple >= 22 || mescumple == 12 && diacumple <= 21){
        result = ("Sagitario");
       	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-sagittarius.png'width=20%>";
        document.getElementById("caracteristica").innerHTML="Los Sagitario son muy optimistas. Siempre están mirando el lado positivo de las cosas. Su optimismo no puede verse afectado por las dificultades o los resultados negativos. Los Sagitario a menudo son personas al aire libre. Se interesarán por todo tipo de deportes y actividades al aire libre. También se interesan en aventuras en la naturaleza. Aunque son fieles a sus defectos, también pueden volverse completamente sordos a las críticas y rechazar sugerencias.";
    }
    else if(mescumple == 12 && diacumple >= 22 || mescumple == 1 && diacumple <= 19){
        result = ("Capricornio");
     	document.getElementById("foto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-capricorn.png'width=20%>";
     	document.getElementById("caracteristica").innerHTML="Los miembros de este signo tienen un deseo insaciable de escalar más alto y durante este curso también pueden volverse egoístas y no dudar en sacrificar los intereses de los demás para cumplir sus objetivos. Los capricornianos pueden parecer reacios al riesgo, pero en realidad planean cuidadosamente todos sus movimientos con anticipación y ensayan a la perfección.";
    }
    else{
       alert("Ingrese una fecha correcta !");
    }
 	document.getElementById("resultado").innerHTML= result;
}