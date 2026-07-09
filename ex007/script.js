const Button = document.getElementById("ButtonColor")
const MainText = document.getElementById("SecaoTexto")
Button.addEventListener("click", TirarCor)
function TirarCor() {
    MainText.classList.remove("Escuro")
}