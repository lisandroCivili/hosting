function desencriptar(texto){

    var textoNuevo = texto.replace(/ai/igm, "a");
    textoNuevo = textoNuevo.replace(/enter/igm, "e");
    textoNuevo = textoNuevo.replace(/imes/igm, "i");
    textoNuevo = textoNuevo.replace(/ober/igm, "o");
    textoNuevo = textoNuevo.replace(/ufat/igm, "u");
    
    
    return textoNuevo;
  
}