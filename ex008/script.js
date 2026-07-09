const Button = document.getElementById("Alternar")
const BlocoTexto = document.getElementById("TextBox")
Button.addEventListener("click", AlternarDisplay)
function AlternarDisplay() {
    BlocoTexto.classList.toggle("Desativado")
}