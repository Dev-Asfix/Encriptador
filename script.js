const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// Nuevo sistema de codificación raro basado en PFAV
const codigosMutantes = [
    ["a", "P@bL0_19x!"],
    ["e", "F3r#N_Δz"],
    ["i", "ViCt0|2_rR"],
    ["o", "Al3X-09_Dr"],
    ["u", "U_f*Vk!77"]
];

function btnEncriptar() {
    const textoEncriptado = encriptarPFAV_Raro(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptarPFAV_Raro(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptarPFAV_Raro(texto) {
    texto = texto.toLowerCase();
    for (let [letra, codigo] of codigosMutantes) {
        texto = texto.replaceAll(letra, codigo);
    }
    return texto;
}

function desencriptarPFAV_Raro(texto) {
    texto = texto.toLowerCase();
    for (let [letra, codigo] of codigosMutantes) {
        texto = texto.replaceAll(codigo.toLowerCase(), letra);
    }
    return texto;
}

async function CopiarTexto() {
    try {
        const textAreaCopy = document.getElementById('mensaje-copiar');
        const texto = textAreaCopy.value;

        await navigator.clipboard.writeText(texto);
        alert('Copiado Correctamente.');
    } catch (err) {
        console.error('Error al copiar al portapapeles: ', err);
    }
}

// Eliminar acentos y forzar minúsculas al escribir
textArea.addEventListener("input", function (event) {
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

textArea.addEventListener("keydown", function (event) {
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
