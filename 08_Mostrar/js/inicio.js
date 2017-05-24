
window.onload = function () {

    let aParrafos = document.querySelectorAll(".dinamico")

    let oBoton = document.querySelector("#btn1")    
    oBoton.innerHTML = "Ver más"
    oBoton.addEventListener("click", camviarVista)
    
    function camviarVista () {
        for (var i = 0; i < aParrafos.length ; i++) {        
            aParrafos[i].classList.toggle("oculto")
        }
        oBoton.innerHTML = oBoton.innerHTML=="Ver más" ? "Ver menos" : "Ver más";

        //if (oBoton.innerHTML=="Ver más") {
        //    oBoton.innerHTML = "Ver menos"
        //} else {
        //    oBoton.innerHTML = "Ver más";
        //}

    }

}
