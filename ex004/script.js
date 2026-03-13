function exibir() {
    var frase = document.querySelector("#frase")
    frase.style.fontSize = "1.2em"
    var titulo = document.querySelector("h1")
    var horario = new Date()
    var horas = horario.getHours()
    frase.textContent = `Agora são ${horas} horas.`
    var corpo = document.querySelector("body")
    var imagens = document.querySelector("#imag")
    if (horas >= 5 && horas < 12) {
        titulo.textContent = "Bom Dia!"
        corpo.style.backgroundColor = '#FFCE9A'
        imagens.innerHTML = "<img src='imagens/manha.jpg' alt='imagem de manhã'>"
    } else {
        if (horas >= 12 && horas < 18) {
            titulo.textContent = "Boa Tarde!"
            corpo.style.backgroundColor = '#FAA269'
            imagens.innerHTML = "<img src='imagens/tarde.jpg' alt='imagem à tarde'>"
        }
        else {
            titulo.textContent = "Boa Noite!"
            corpo.style.backgroundColor = "#000203"
            imagens.innerHTML = "<img src='imagens/noite.jpg' alt='imagem à noite'>"
        }
    }
}