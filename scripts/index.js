const contadorComentario = document.getElementById("comCont")
const btnSumar = document.getElementById("btnSumarCont")
const btnRestar = document.getElementById("btnRestarCont")
console.log(contadorComentario)

btnRestar.addEventListener("click", restarCont)
btnSumar.addEventListener("click", sumarCont)

var contador = 0
function restarCont()
{
    if(contador > 0)
    {
        contador--;
        contadorComentario.innerText = contador;
    }
}
function sumarCont()
{
    contador++;
    contadorComentario.innerText = contador;
}
