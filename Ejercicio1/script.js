let resu = "";
document.getElementById("comp").addEventListener("submit", comprobar);
function comprobar (event){
    event.preventDefault();
    let edad = document.getElementById("edad").value;
    if(edad > 18)
    {
        resu = "Ya puedes conducir";
    }
    else{
        resu = "NO puedes conducir";
    }
    document.getElementById("Resultado").innerHTML = resu;
}