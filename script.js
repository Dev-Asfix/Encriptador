const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const codigosMutantes = [
    ["a", "0@0L0_19x!"],
    ["A", "Ax#0A!_Pf1"],
    ["e", "F3r#N_Δz"],
    ["E", "Ez!_R03#P"],
    ["i", "$iCt0|2_rR"],
    ["I", "I_7r#S3x!"],
    ["o", "?l3X-09_Dr"],
    ["O", "Ox@_0Lm9?"],
    ["u", "U_f*Vk!77"],
    ["U", "U_U77*Pf$"]
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
    for (let [letra, codigo] of codigosMutantes) {
        texto = texto.replaceAll(letra, codigo);
    }
    return texto;
}

function desencriptarPFAV_Raro(texto) {
    for (let [letra, codigo] of codigosMutantes) {
        texto = texto.replaceAll(codigo, letra);
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

// Ya no forzamos a minúsculas ni bloqueamos mayúsculas
textArea.addEventListener("input", function (event) {
    const value = event.target.value;
    const acentos = ['á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú'];
    let nuevoValor = '';

    for (let i = 0; i < value.length; i++) {
        const char = value[i];
        if (!acentos.includes(char)) {
            nuevoValor += char;
        }
    }

    event.target.value = nuevoValor;
});
