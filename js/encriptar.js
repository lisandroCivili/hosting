function encriptar(texto){

    var textoNuevo = texto.replace(/e/igm, "enter");
    textoNuevo = textoNuevo.replace(/o/igm, "ober");
    textoNuevo = textoNuevo.replace(/i/igm, "imes");
    textoNuevo= textoNuevo.replace(/a/igm, "ai");
    textoNuevo = textoNuevo.replace(/u/igm, "ufat");

 
    return textoNuevo;


}