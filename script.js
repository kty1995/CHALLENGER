const texArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(texArea.value)
    mensaje.value = textoEncriptado
    texArea.value = "";
    mensaje.style.backgroundImage = "none"
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"],];
stringEncriptada = stringEncriptada.toLowerCase()

for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(texArea.value)
    mensaje.value = textoEncriptado
    texArea.value = "";
    

    }



function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"],];
stringDesencriptada = stringDesencriptada.toLowerCase()

for(let i = 0; i < matrizCodigo.length; i++){
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
    
    }

    // Funcionalidad para el botón de copiar
const btnCopiar = document.querySelector(".copiar");

btnCopiar.addEventListener("click", function() {
    navigator.clipboard.writeText(mensaje.value)
    .then(() => {
        alert("Texto copiado al portapapeles");
    })
    .catch(err => {
        console.error('Error al copiar al portapapeles: ', err);
    });
});