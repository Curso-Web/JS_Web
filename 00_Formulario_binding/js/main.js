(app = function () {

	// Creamos el "modelo" corespondiente a todos los elemetos existentes en el DOM

		var oDOM = {
			fNombre : document.querySelector("#fNombre"),
			btnBorrar :  document.querySelector("#btnBorrar"),
			spanNombre : document.querySelector("#nombre"),
			spanCurso : document.querySelector("#curso")
		}; // fin del objeto oDOM


		function controller () {

			// Valores por defencto que actualizan el DOM

			oDOM.fNombre.value = 'Pepe'
	        oDOM.spanNombre.innerHTML = oDOM.fNombre.value; 
	        oDOM.spanCurso.innerHTML = "Desarrollo Web Front-End";
			console.dir(oDOM);

			// Definicion de los manejadores de eventos

			oDOM.fNombre.addEventListener("keyup",actualizarVista);
			oDOM.btnBorrar.addEventListener("click",actualizarVista)
		}

		function actualizarVista (oEvent) {
			
			if (oEvent.currentTarget.id == "btnBorrar") {
				oDOM.fNombre.value = ''
			}	
			oDOM.spanNombre.innerHTML = oDOM.fNombre.value; 
			console.log(oDOM.fNombre.value);

		} // Fin de la funcion actualizarVista


 
return controller;

}())(); // Fin del clorure autoejecutado

//app();