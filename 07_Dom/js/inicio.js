
window.onload = function () {

    // // Crear nodo de tipo Element
    // var oParrafo = document.createElement("p");
    // // Crear nodo de tipo Text
    // var oContenido = document.createTextNode("Hola Mundo!");
    // // Añadir el nodo Text como hijo del nodo Element
    // oParrafo.appendChild(oContenido);
    // // Añadir el nodo Element como hijo de la pagina
    // document.querySelectorAll("section")[1].appendChild(oParrafo);

    //document.querySelectorAll("section")[1].innerHTML += "<p>Hola Mundo</p>"

    let aDom = document.querySelectorAll("section")
    for (var i = 5; i < aDom.length-3 ; i++) {
       aDom[i].innerHTML = "<p>Hola Mundo</p>"
       aDom[i].title = "Saludo número "+ i
       //aDom[i].setAttribute("title","Saludo número "+ i)
       //aDom[i].className = "colorRojo"
       //aDom[i].setAttribute("class","colorRojo")       
       aDom[i].classList.toggle("colorRojo")
        
    }
    

}
