const Menu = document.querySelector("#MenuInfo")
const Navegacao = document.querySelector("#NavigationBar")
Menu.addEventListener("click", Alternar)
function Alternar() {
    Navegacao.classList.toggle("Desativado")
    Navegacao.classList.toggle("Ativado")
}