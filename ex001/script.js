var clique = document.getElementById("botao")
clique.addEventListener("click", verificar_idade)
function verificar_idade() {
    var idade = document.getElementById("idade_verificar")
    var idade_resultado = Number(idade.value)
    var res = document.getElementById("resultado")
    if (idade_resultado <= 0 || idade_resultado > 100) {
        res.style.backgroundColor = "orange"
        res.textContent = "Não aceitamos idades muito baixas ou muito altas"
    } else {
        if (idade_resultado >= 18) {
            res.style.backgroundColor = "lightgreen"
            res.textContent = "Você já é MAIOR DE IDADE."
        } else {
            res.style.backgroundColor = "red"
            res.textContent = "Você é MENOR DE IDADE."
        }
    }
}