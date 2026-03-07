var botao = document.getElementById("cliques")
botao.addEventListener("click", executar)
function executar() {
    var bloco = document.getElementById("resultado")
    if (bloco.style.backgroundColor == "white") {
        bloco.style.backgroundColor = "red"    
    } else {
        bloco.style.backgroundColor = "white"
    }
}