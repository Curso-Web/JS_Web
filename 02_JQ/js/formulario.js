class Formulario {

	constructor (pNombre, pCurso) {

	// Creamos el "modelo" corespondiente a todos los elemetos existentes en el DOM

		this.oDOM = {
			fNombre : $("#fNombre"),
			btnBorrar :  $("#btnBorrar"),
			spanNombre : $("#nombre"),
			spanCurso : $("#curso")
		}; // fin del objeto oDOM

		// Valores por defencto que actualizan el DOM
		this.oDOM.fNombre[0].value = pNombre;
	    this.oDOM.spanNombre[0].innerHTML = this.oDOM.fNombre[0].value; 
	    this.oDOM.spanCurso[0].innerHTML = pCurso;
		console.dir(this.oDOM);	
	}

	controller () {
		// Definicion de los manejadores de eventos

		this.oDOM.fNombre.on("keyup",this.actualizarVista.bind(this));
		//oDOM.btnBorrar.onclick = actualizarVista;
		this.oDOM.btnBorrar.on("click",this.actualizarVista.bind(this))
	}

	actualizarVista (oEvent) {
			
		if (oEvent.currentTarget.id == "btnBorrar") {
			this.oDOM.fNombre[0].value = ''
		} 
		this.oDOM.spanNombre[0].innerHTML = this.oDOM.fNombre[0].value; 

		
		console.log(this.oDOM.fNombre[0].value);

	} // Fin de la funcion actualizarVista

}