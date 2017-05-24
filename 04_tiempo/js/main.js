
function muestraMensaje() {
	alert("Han transcurrido 3 segundos desde que me 	programaron");
}

function pideDatos(pFuncion) {
    let nombre
    nombre = prompt("Dime tu nombre")
    pFuncion(nombre);
}

            function escribe (pNombre) {
                console.log("El nombre es : " + pNombre)
            }


let id = window.setTimeout(function() {
    pideDatos(escribe);
}, 3000)






