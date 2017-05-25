function mouseHandler(oE) {
    // Invertimos la clases aplicadas correspondientes a los colores
    let domDiv = oE.currentTarget;                    
    domDiv.classList.toggle("colorRed");
    domDiv.classList.toggle("colorYellow");
}

function main () {
    // creamos un array con los divs del documento
    let domDivs = document.querySelectorAll('div');
    // les adignamos a todos los manejadores adecuados
    for (var i = 0; i < domDivs.length; i++) {
        domDivs[i].addEventListener("mouseover", mouseHandler, false);
        domDivs[i].addEventListener("mouseout", mouseHandler, false);
    }
}; // fin de main()	

document.addEventListener("DOMContentLoaded", main, false);
