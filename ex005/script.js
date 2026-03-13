var botao = document.querySelector("#botao")
botao.addEventListener("click", executar)
function executar() {
    var titulo = document.querySelector("#info")
    var texto = document.querySelector("#texto")
    var resposta = document.querySelector("#pergunta")
    var temp = Number(resposta.value)
    var foto = document.querySelector("#area")
    var imagem = document.createElement("img")
    titulo.textContent = `Temperatura de ${resposta.value} °C`
    if (temp <= 15) {
        document.body.style.backgroundColor = '#6CA6D8'
        texto.textContent = "Está frio ❄️!"
        imagem.setAttribute('src', 'imagens/frio.jpg')
    } else {
        if(temp > 15 && temp <= 25) {
            document.body.style.backgroundColor = "wheat"
            texto.textContent = "Clima agradável ⛅!"
            imagem.setAttribute('src', 'imagens/normal.jpg')
        }
        else if(temp > 25) {
            document.body.style.backgroundColor = "orange"
            texto.textContent = "Está quente ☀️!"
            imagem.setAttribute('src','imagens/quente.jpg')
        }
    } 
    foto.innerHTML = ""
    foto.appendChild(imagem)
}
