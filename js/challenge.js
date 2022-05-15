var btnEncriptar = document.querySelector("#encriptar");
var btnDesencriptar = document.querySelector("#desencriptar");

btnDesencriptar.addEventListener("click", function(){
    var input = document.querySelector("#input");
    var texto = input.value;
    var textoLower = texto.toLowerCase();
    
    
    var resultado = document.querySelector("#textoFinal");

    resultado.innerHTML = desencriptar(textoLower);
    esconder(resultado);

});


btnEncriptar.addEventListener("click", function(){
   
    var input = document.querySelector("#input");
    var texto = input.value;
    var textoLower = texto.toLowerCase();

    
    var resultado = document.querySelector("#textoFinal");
    resultado.innerHTML =encriptar(textoLower);

    console.log(resultado.value.length);
    esconder(resultado);

});

function esconder(resultado){

    var muneco = document.querySelector("#img");
    var noText = document.getElementById("noTexto");
    var aviso = document.getElementById("aviso");
    var copiar = document.getElementById("btnCopiar");
    var textArea = document.querySelector("#textoFinal");


    if (resultado.value.length > 0) {
        muneco.classList.add("hide");
        noText.classList.add("hide");
        aviso.classList.add("hide");
        copiar.classList.remove("hide");
        textArea.classList.remove("hide")
    }else{
        muneco.classList.remove("hide");
        noText.classList.remove("hide");
        aviso.classList.remove("hide");
        copiar.classList.add("copiar");
    }

}

