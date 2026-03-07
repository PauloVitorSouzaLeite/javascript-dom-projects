var botao = document.getElementById("botao")
botao.addEventListener("click", verificar)
function verificar() {
    var idade = document.getElementById("verificador")
    var bloco = document.getElementById("bloco")
    bloco.style.textAlign = "center"
    var resultado = Number(idade.value)
    bloco.style.display = "block"
    if (resultado < 0 || resultado > 10) {
        bloco.style.backgroundColor = "red"
        bloco.style.color = "white"
        bloco.textContent = "Não aceitamos idade menor que 0 ou maior que 100!"
    } else {
        bloco.textContent = `Idade digitada: ${resultado} anos.`
        bloco.style.color = "black"
        if (resultado <= 12) {
            bloco.textContent += " Você é uma criança!"
            bloco.innerHTML += "<img src='imagens/crianca.png' alt='Uma imagem representando uma criança.'>"
        }
        else if (resultado < 18) {
            bloco.textContent += " Você é um(a) adolescente!"
            bloco.innerHTML += "<img src='imagens/adolescente.avif' alt='Uma imagem representando uma pessoa na fase da adolescência'>"
        }
        else if (resultado < 60) {
            bloco.textContent += " Você é um adulto!"
            bloco.innerHTML += "<img src='imagens/adulto.png' alt='Uma imagem representando uma pessoa adulta.'>"
        }
        else {
            bloco.textContent += " Você é um(a) idoso(a)!"
            bloco.innerHTML += "<img src='imagens/idoso.avif' alt='Uma imagem representando um idoso.'>"
        }
    }
}