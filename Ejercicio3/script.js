let reserva = ""
document.getElementById("form").addEventListener("submit", add);
document.getElementById("form").addEventListener("stop", cancelar);

function add(event) {
    event.preventDefault();
    let texto = document.getElementById("texto").value;
    if (reserva) {
        reserva += "-" + texto;
    } else {
        reserva = texto;
    }
    document.getElementById("Resultado").innerHTML = reserva;
}

function cancelar(event) {
    document.getElementById("Resultado").innerHTML = reserva;
}