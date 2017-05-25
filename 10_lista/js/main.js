		$(function () {

            aReyes = [
                "Alfonso", 
                "Carlos", 
                "Fernando", 
                "Isabel", 
                "Felipe"]
            
            oLista = $('#lista')
            aReyes.sort()
            for (var i = 0; i < aReyes.length; i++) {
                oLista.append("<li>" + aReyes[i] + "</li>");   
            }

			$('#addBtn').click( function () {
                aReyes.push($("#item").val())
                aReyes.sort()
                oLista.html("")
                for (var i = 0; i < aReyes.length; i++) {
                    oLista.append("<li>" + aReyes[i] + "</li>");   
                }
			}) // fin de la funcion anonima y del Evento click
		}) // fin del onload

		//function respondeBoton() {
		//   $('ul#lista').append("<li>" + prompt('Introduce un nuevo valor', '') + "</li>");
		//}

		//$(function () {
		//    $('#addBtn')[0].onclick = respondeBoton;
		//}) // fin del onload



