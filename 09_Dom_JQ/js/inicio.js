
//$(document).ready()


$(function () {

    //let js = document.querySelector("#primera")
    //let jq = $("#primera")
    //console.dir(js)
    //console.dir(jq)


    let js = document.querySelectorAll("section")
    let jq = $("section")
    console.dir(js)
    console.dir(jq)


    //$("section").hide()
    $("section").append("<p>Hola, soy tu hijo</p>")
    $("section").prepend("<p>Hola, soy tu hijo</p>")
    $("section").after("<section>Hola, soy tu hermano</section>")
    $("section").before("<section>Hola, soy tu hermano</section>")

})
