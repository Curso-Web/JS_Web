function mouseHandlerOld(oE) {
    var oEvent = oE || window.event
    var _this = oEvent.target || oEvent.srcElement
    var aClases = _this.className.split(" "); //this.className
    if (oEvent.type == "mouseover") {
        for (var i = 0; i < aClases.length; i++) {
            if (aClases[i] == "colorRed") {
                aClases[i] = 'colorYellow';
                break; // sale del for
            }
        } // fin del for
        _this.className = aClases.join(" ");
    } // fin del if
    else { // oEvento.type == "mouseout"
        for (var i = 0; i < aClases.length; i++) {
            if (aClases[i] == "colorYellow") {
                aClases[i] = 'colorRed';
                break; // sale del for
            }
        } // fin del for
        _this.className = aClases.join(" ");
    } // fin del else
} // fin de la función mouseHandler


function mouseHandler(oE) {
    var oEvent = oE || window.event
    domDiv = oEvent.currentTarget;                    
    domDiv.classList.toggle("colorRed");
    domDiv.classList.toggle("colorYellow");
}

function main () {
    var domDivs
    if (document.querySelectorAll("div")
        && document.querySelectorAll("div")[0].classList) {
        // válido para estándaares, IE10, IE9
        domDivs = document.querySelectorAll('div');
        for (var i = 0; i < domDivs.length; i++) {
            domDivs[i].addEventListener("mouseover", mouseHandler, false);
            domDivs[i].addEventListener("mouseout", mouseHandler, false);
        };
    }
    else {
        // válido para IE8
        domDivs = document.getElementsByTagName('div');
        for (var i = 0; i < domDivs.length; i++) {
            domDivs[i].onmouseover = mouseHandlerOld;
            domDivs[i].onmouseout = mouseHandlerOld;
        };
    }

}; // fin de main()	

if (document.addEventListener()) {
    document.addEventListener("DOMContentLoaded", main, false);
} else {
    window.onload = main;
 }