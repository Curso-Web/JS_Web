
//const oFormulario = new Formulario("Luis", "Desarrollo Web full-stack");
//oFormulario.controller()



//window.onload = function () {
//    new Formulario("Luis", "Desarrollo Web full-stack").controller()
//};


//document.addEventListener("DOMContentLoaded", function () {
//    new Formulario("Luis", "Desarrollo Web full-stack").controller()
//})


document.addEventListener("DOMContentLoaded", main);

function main () {
    let sName = "Luis";
    let sCurso = "Desarrollo Web full-stack";
    new Formulario(sName, sCurso).controller()
}
