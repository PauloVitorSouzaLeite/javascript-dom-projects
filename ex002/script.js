let conteiner = document.querySelector("#resultado")
let informacao = document.querySelector("#verificador")
informacao.addEventListener("click", Desaparecer)
function Desaparecer() {
    conteiner.style.display = "none"
}
let clicar = document.querySelector("#botao")
clicar.addEventListener("click", CalcularIdade)
function CalcularIdade() {
    let item = document.querySelector("#bloco")
    let imagem = document.createElement("img")
    if (conteiner.style.display == "flex") {item.innerHTML = ""}
    if (informacao.value === "") {
        imagem.setAttribute("src","imagens/inter.webp")
        conteiner.style.display = "flex"
        item.textContent = "Ocorreu um erro. Nada foi digitado."
    } else {
        let idade = Number(informacao.value)
        if (idade < 0 || idade > 100) {
            imagem.setAttribute("src","imagens/inter.webp")
            item.textContent = "Ocorreu um erro. Idade inválida."
        } else {
            item.textContent = `${idade} anos de idade. `
            if (idade >= 0 && idade < 5) {
                imagem.setAttribute("src","imagens/recem-nascido.jpg")
                item.textContent += "Um recém nascido!"
            }
            else if (idade >= 5 && idade <= 12) {
                imagem.setAttribute("src","imagens/criança.jpg")
                item.textContent += `Uma criança!`
            } else if (idade > 12 && idade <= 18) {
                imagem.setAttribute("src","imagens/adolescente.jpg")
                item.textContent += `Um(a) adolescente!`
            } else if (idade > 18 && idade < 60) {
                imagem.setAttribute("src","imagens/adulto.jpg")
                item.textContent += `Um(a) adulto(a)!`
            } else {
                imagem.setAttribute("src","imagens/idoso.jpg")
                item.textContent += "Um(a) idoso(a)"
            }
        } 
    conteiner.style.display = "flex"
    informacao.value = ""
    item.appendChild(imagem)
    }
}
