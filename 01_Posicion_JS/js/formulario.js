class Formulario {

	constructor (pNombre, pCurso) {

	// Creamos el "modelo" corespondiente a todos los elemetos existentes en el DOM

		this.oDOM = {
			fNombre : document.querySelector("#fNombre"),
			btnBorrar :  document.querySelector("#btnBorrar"),
			spanNombre : document.querySelector("#nombre"),
			spanCurso : document.querySelector("#curso")
		}; // fin del objeto oDOM

		// Valores por defencto que actualizan el DOM
		this.oDOM.fNombre.value = pNombre;
	    this.oDOM.spanNombre.innerHTML = this.oDOM.fNombre.value; 
	    this.oDOM.spanCurso.innerHTML = pCurso;
		console.dir(this.oDOM);	
	}

	controller () {
		// Definicion de los manejadores de eventos

		this.oDOM.fNombre.addEventListener("keyup",this.actualizarVista.bind(this));
		//oDOM.btnBorrar.onclick = actualizarVista;
		this.oDOM.btnBorrar.addEventListener("click",this.actualizarVista.bind(this))
	}

	actualizarVista (oEvent) {
			
		if (oEvent.currentTarget.id == "btnBorrar") {
			this.oDOM.fNombre.value = ''
		} 
		this.oDOM.spanNombre.innerHTML = this.oDOM.fNombre.value; 

		
		console.log(this.oDOM.fNombre.value);

	} // Fin de la funcion actualizarVista

}