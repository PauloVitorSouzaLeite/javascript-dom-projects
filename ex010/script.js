const Title = document.querySelector("#SectionTitle")
const TextBox = document.querySelector("#TextBox")
let Contador = 0
Title.addEventListener("click", Alternar)
function Alternar() {
    Contador++
    if (Contador % 2 === 1) {
        Title.textContent = "Clique aqui para fechar"
        TextBox.classList.remove("Desativado")
        TextBox.classList.add("Ativado")
    } else {
        Title.textContent = "Clique aqui para abrir"
        TextBox.classList.remove("Ativado")
        TextBox.classList.add("Desativado")
    }
}