class Formulario {

	constructor () {

	// Creamos el "modelo" corespondiente a todos los elemetos existentes en el DOM

		this.oDOM = {
			btnSaludar :  document.querySelector("#btnSaludar"),
			pSaludo : document.querySelector("#saludo"),
			
		}; // fin del objeto oDOM

		// AJAX 1 : Instanciamos objeto XMLHttpRequest
		this.oAjax = new XMLHttpRequest();

		// Valores por defencto que actualizan el DOM
	}

	controller () {
		// Definicion de los manejadores de eventos
		this.oDOM.btnSaludar.addEventListener("click",this.pedirAjax.bind(this))

		// AJAX 2a Definis la función de respuesta
		this.oAjax.onreadystatechange = this.actualizarVista.bind(this)
	}
	// AJAX 3: realizar la petición al servidor
	pedirAjax() {

		this.oAjax.open("GET", "http://localhost:8080/Saludos.json");
		this.oAjax.send(null);
	}

	// AJAX 2b Preparar la función de respuesta
	actualizarVista () {
		let oDatos
		let sHtml = "<ul>"
		if(this.oAjax.readyState == 4) {
			if(this.oAjax.status == 200) {

				oDatos = JSON.parse(this.oAjax.responseText)
				console.dir(this.oAjax.responseText)
				console.dir(oDatos)

				for (var key in oDatos) {
					sHtml += "<li>" +key + " : "+ oDatos[key] + "</li>"
				}
				sHtml +=  "</ul>"
				this.oDOM.pSaludo.innerHTML = sHtml;
			} else {
				this.oDOM.pSaludo.innerHTML = 
				this.oAjax.status + " : " + this.oAjax.statusText
			}
		}
	} // Fin de la funcion actualizarVista
} 