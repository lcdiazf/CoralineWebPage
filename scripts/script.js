$(document).ready(function(e) {
	$('img[usemap]').rwdImageMaps();

	$('area').on('click', function() {
		switch($(this).attr('alt')){
			case '1map':
			case '1list':
				document.getElementById("infoImage").src="images/exploration2.png";
				document.getElementById("infoMapText").innerHTML="1. La puerta secreta";
			break;
			case '2map':
			case '2list':
				document.getElementById("infoImage").src="images/bobinskiChrct.png";
				document.getElementById("infoMapText").innerHTML="2. Apartamento del señor Bobinski";
			break;
			case '3map':
			case '3list':
				document.getElementById("infoImage").src="images/editor1.png";
				document.getElementById("infoMapText").innerHTML="3. Mel Jones (Mamá de Coraline)";
			break;
			case '4map':
			case '4list':
				document.getElementById("infoImage").src="images/april_miriamChrct.png";
				document.getElementById("infoMapText").innerHTML="4. April Spink y Miriam Forcible";
			break;
			case '5map':
			case '5list':
				document.getElementById("infoImage").src="images/theOldWell.jpg";
				document.getElementById("infoMapText").innerHTML="5. El viejo poso";
			break;
			case '6map':
			case '6list':
				document.getElementById("infoImage").src="images/performance.png";
				document.getElementById("infoMapText").innerHTML="6. Performance de la Otra Spink y la Otra Forcible";
			break;
			case '7map':
			case '7list':
				document.getElementById("infoImage").src="images/circus.png";
				document.getElementById("infoMapText").innerHTML="7. Show de ratones en el Otro Mundo";
			break;
			case '8map':
			case '8list':
				document.getElementById("infoImage").src="images/scene4.jpg";
				document.getElementById("infoMapText").innerHTML="8. Niños fantasma";
			break;
			case '9map':
			case '9list':
				document.getElementById("infoImage").src="images/otherFather.jpg";
				document.getElementById("infoMapText").innerHTML="9. El otro papá";
			break;
			case '10map':
			case '10list':
				document.getElementById("infoImage").src="images/other_momChrct.png";
				document.getElementById("infoMapText").innerHTML="10. La otra mamá";
			break;
		}
	});
	$('.helpIc').on('click', function(){
		alert("Se puede interactuar con las zonas del mapa y la lista de la parte inferior.");
	});
});