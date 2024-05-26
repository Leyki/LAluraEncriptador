// Encript / Decript
const Normal = [
    "i",
    "e",
    "a",
    "o",
    "u"
];
const Encriptado = [
    "imes",  // i
    "enter", // e - imes
    "ai",    // a
    "ober",  // o
    "ufat"   // u
];
// i - we can form imes with enter and ai so imes must be parsed before enter or ai must be parsed before imes

function encriptarCaracter(char, de, a) {
    for (i in de) {
        if (val == de[i]) return a[i];
    }
    return char;
}
function encriptar(texto) {
    let resultado = "";
    for (val of texto) {
        resultado += encriptarCaracter(val, Normal, Encriptado);
    }
    return resultado;
}

function desencriptar(texto) {
    for (let i = 0; i < Encriptado.length; i++) {
        texto = texto.replaceAll(Encriptado[i], Normal[i]);
    }
    return texto;
}


function encriptarManipulador() {
    if (textoAreaDesencriptado.value == "" || textoAreaDesencriptado.value == null) return;
    textoAreaDesencriptado.value = textoAreaDesencriptado.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    textoAreaEncriptado.value = encriptar(textoAreaDesencriptado.value);
}
function desencriptarManipulador() {
    if (textoAreaEncriptado.value == "" || textoAreaEncriptado.value == null) return;

    textoAreaEncriptado.value = textoAreaEncriptado.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    textoAreaDesencriptado.value = desencriptar(textoAreaEncriptado.value);
}

function copiarDesencriptado() {
    navigator.clipboard.writeText(textoAreaDesencriptado.value);
}
function copiarEncriptado() {
    navigator.clipboard.writeText(textoAreaEncriptado.value);
}

let textoAreaDesencriptado = document.getElementById("unencrypted-text-input");
let encryptBtn = document.getElementById("encrypt-btn").addEventListener("click", encriptarManipulador);

let textoAreaEncriptado = document.getElementById("encrypted-text-input");
let decryptBtn = document.getElementById("decrypt-btn").addEventListener("click", desencriptarManipulador);

let decryptCopyBtn = document.getElementById("decrypt-copy").addEventListener("click", copiarEncriptado);
let encryptCopyBtn = document.getElementById("encrypt-copy").addEventListener("click", copiarDesencriptado);
