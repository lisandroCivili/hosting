var btnCopiar = document.querySelector("#btnCopiar");

btnCopiar.addEventListener("click", function(){

    var texto = document.querySelector("#textoFinal");
    texto.select();
    document.execCommand("copy");

});