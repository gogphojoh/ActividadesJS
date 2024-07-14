let Resultado = ""
document.getElementById("cal").addEventListener("submit", calcular);
function calcular (event){
    event.preventDefault();
    let calificacion = document.getElementById("cali").value;

    if (calificacion <= 3)
    {
        Resultado = "Muy deficiente";
    }
    else if (calificacion >= 4 && calificacion < 6)
    {
        Resultado = "Insuficiente";
    }
    else if (calificacion >= 6 && calificacion < 8)
    {
        Resultado = "Suficiente";
    }
    else if (calificacion >= 8 && calificacion < 10)
    {
        Resultado = "Notable";
    }
    else if (calificacion == 10)
    {
        Resultado = "Sobresaliente";
    }
    document.getElementById("Resultado").innerHTML = Resultado;
    
}