let bloco = document.querySelector("#resultado")
bloco.innerHTML = 0
let button = document.querySelector("#button")
button.addEventListener("click",executar)
function executar() {
    let num = Number(bloco.innerHTML)
    num++
    bloco.innerHTML = num
}