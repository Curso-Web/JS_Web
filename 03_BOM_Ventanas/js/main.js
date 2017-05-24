
  		function recuperarTamaño() {
  			if (oVentanaImg) {
  				oVentanaImg.moveTo(1, 1);
  				oVentanaImg.resizeTo(oVentanaImg.iAncho, oVentanaImg.iAlto);
			}
  		}

  		function ajustarTamaño() {
            //Ajusta la ventana al tamaño de la pantalla
  		    oVentanaImg.iAncho = window.innerWidth;
  		    oVentanaImg.iAlto = window.innerHeight;
			oVentanaImg.moveTo(1, 1);
			oVentanaImg.resizeTo(screen.availWidth, screen.availHeight);
		}

		function ajustarImagen_old() {
            // Ajusta la ventana al tamaño de la imagen
  			if (oVentanaImg) {
				var xAncho = imagenFichero.width + 
				(window.outerWidth - window.innerWidth)
				// 710 + 16 (en Chrome)
				var yAlto = imagenFichero.height +
				(window.outerHeight - window.innerHeight)
				 // 570 + 69 (en Chrome)
				oVentanaImg.resizeTo(xAncho,yAlto);
			}
		}

		function ajustarImagen() {
		    // Ajusta la ventana al tamaño de la imagen
		    if (oVentanaImg) {
		        oVentanaImg.iAncho = imagenFichero.width +
				(window.outerWidth - window.innerWidth)
		        // 710 + 16 (en Chrome)
		        oVentanaImg.iAlto = imagenFichero.height +
				(window.outerHeight - window.innerHeight)
		        // 570 + 69 (en Chrome)
		        oVentanaImg.resizeTo(oVentanaImg.iAncho, oVentanaImg.iAlto);
		    }
		}

		function cargarImagen() {
		    if (!oVentanaImg) {
		        oVentanaImg = window.open(imagenFichero.src, "", "top=200, left=300");
		        //width=300, height=400, status=yes, menubar=yes"
		        oVentanaImg.iAncho = window.innerWidth;
		        oVentanaImg.iAlto = window.innerHeight;
		    }
  		}

  		function cerrarVentana () {
  		    if (this.id == "btn_2" && oVentana) {
  		        oVentana.close();
  		        oVentana = null;
			}
			if (this.id == "btn_4b" && oVentanaImg) {
			    oVentanaImg.close();
			    oVentanaImg = null;
			}
  		}

  		function abrirVentana() {
  		    if (!oVentana) {
  		        oVentana = window.open("", "", "top=200, left=300, width=300, height=400, status=yes, menubar=yes scrollbars=yes");
  		        // el segundo parámetro es _blank (único valor con sentido)
  		        // status=yes, menubar=yes ¿sin efecto en Chrome?
  		        // resizable=yes solo IE 
  		        // toolbar=yes solo IE y Firefos 
  		        oVentana.document.write("<p>Mensaje emergente en una ventana</p>");
  		    }
  		
  		}

		function main () {
			document.getElementById("btn_1").onclick = abrirVentana;
			document.getElementById("btn_2").onclick = cerrarVentana;
			document.getElementById("btn_3").onclick = cargarImagen;
			document.getElementById("btn_4").onclick = ajustarImagen;
			document.getElementById("btn_4b").onclick = cerrarVentana;
			document.getElementById("btn_5").onclick = ajustarTamaño;
			document.getElementById("btn_6").onclick = recuperarTamaño;
		}  	

		var oVentana, oVentanaImg, iRepeat = 0;

		var imagenFichero = new Image();
		imagenFichero.src = "images/33.jpg";

		//window.addEventListener("load", main, false);
	  	document.addEventListener("DOMContentLoaded", main, false);	
		// metodo de DOM nivel 2  que indica al agente de usuario que permanezca atento:
		// evento: en este caso la carga completa de la página
		// función a lanzar: en este caso main
		// orden del flujo de eventos: false salta la fase de captura
		// el equivalente del DOM nivel 1 sería
		// window.onload = main
