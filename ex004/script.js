var mostrar = document.getElementById("botao")
mostrar.addEventListener("click", mostrar_frases)
var image = document.getElementById("menu")
image.addEventListener("click", exibir)
function mostrar_frases() {
    var frase = document.getElementById("frases")
    var numeros = Math.floor(Math.random() * 4) + 1  
    console.log(numeros)
    if (frase.style.display == "none") {
        frase.style.display = "block"
    } else {
        frase.style.display = "none"
    }
    switch (numeros) {
        case 1:
            frase.textContent = "Disciplina é fazer o que precisa ser feito, mesmo quando você não quer."
            break
        case 2:
            frase.textContent = "Pequenos progressos todos os dias constroem grandes resultados."
            break
        case 3:
            frase.textContent = "O sucesso é a soma de esforço repetido diariamente."
            break
        case 4:
            frase.textContent = "Seu futuro depende das decisões que você toma hoje."
            break
    }
}
function exibir() {
    var icones = document.getElementById("navegar")
    if (icones.style.display == "none") {
        icones.style.display = "block"
    } else {
        icones.style.display = "none"
    }
}