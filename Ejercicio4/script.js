const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

document.getElementById("dniForm").addEventListener("submit", calcularLetraDNI);
document.getElementById("cancel").addEventListener("click", cancelarProceso);

function calcularLetraDNI(event) {
    event.preventDefault();
    let dniInput = document.getElementById("dni").value;

    if (dniInput === "" || isNaN(dniInput) || dniInput < 0 || dniInput > 99999999) {
        alert("Por favor, introduzca un número de DNI válido entre 0 y 99999999.");
    } else {
        let dniNumber = parseInt(dniInput);
        let resto = dniNumber % 23;
        let letra = letrasDNI[resto];
        document.getElementById("dniLetter").textContent = letra;
    }
}

function cancelarProceso() {
    document.getElementById("dni").value = "";
    document.getElementById("dniLetter").textContent = "";
}
