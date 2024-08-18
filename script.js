const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    console.table(matrizCodigo)
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i< matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada= stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada

}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";mensaje.style.backgroundImage = "none";
   
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    console.table(matrizCodigo)
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0; i< matrizCodigo.length;i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada= stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada

}

async function CopiarTexto(){
    try{
        const textAreaCopy = document.getElementById('mensaje-copiar');
        const texto = textAreaCopy.value;

        await navigator.clipboard.writeText(texto);

        alert('Copiado Correctamente.')
    } catch(err){
        console.error('Error al copiar al portapapeles: ', err)
    }
}

textArea.addEventListener("input", function(event) {
    const value = event.target.value;
    const acentos = ['á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú'];
    let nuevoValor = '';

    for (let i = 0; i < value.length; i++) {
        const char = value[i];
        if (acentos.includes(char)) {
           
            continue;
        }
       
        nuevoValor += char.toLowerCase();
    }

    event.target.value = nuevoValor;
});

textArea.addEventListener("keydown", function(event) {
    const key = event.key;
    const acentos = ['á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú'];

    if (acentos.includes(key)) {
        event.preventDefault();
    }

    if (key === key.toUpperCase() && key !== key.toLowerCase()) {
        event.preventDefault();
        textArea.value += key.toLowerCase();
    }
});

