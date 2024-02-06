// Función para copiar texto

function copiar() {
    navigator.clipboard.writeText(
        document.getElementById("encrypted-text").value
    );
}
document.querySelector("#boton-copiar").addEventListener("click", copiar);

var boton = document.querySelector("#boton-copiar");
boton.onclick = function () {
	alert("¡Texto copiado!")
}


//Encriptamos según instrucciones
// La letra "e" -> "enter"
// La letra "i" -> "imes"
// La letra "a" -> "ai"
// La letra "o" -> "ober"
// La letra "u" -> "ufat"

function encriptar() {
    var texto = document.getElementById("input-text").value;
    texto = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    document.getElementById("encrypted-text").value = texto;
}

// Uso Regex para solo permitir letras desde la a a la z, minusculas, el resto queda prohibido
var boton = document.getElementById("boton-encriptar");
boton.onclick = function () {    
    if(document.getElementById("input-text").value.match(/^[a-z ]*$/)) {
        encriptar();
    } else {
        alert("Solo letras minúsculas, sin caracteres especiales.")
    }
};


// Desencripto todo lo anterior
function desencriptar() {
    var texto = document.querySelector("#input-text").value;
    texto = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    document.getElementById("encrypted-text").value = texto;
}

var boton = document.getElementById("boton-desencriptar");
boton.onclick = function () {
    if(document.getElementById("input-text").value.match(/^[a-z ]*$/)) {
        desencriptar();
    } else {
        alert("Solo letras minúsculas, sin caracteres especiales.")
    }
};