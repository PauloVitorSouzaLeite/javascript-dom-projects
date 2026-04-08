let bloco = document.querySelector("#number-block")
let aumentar = document.querySelector("#more-button")
let diminuir = document.querySelector("#less-button")
let resetar = document.querySelector("#restart-button")
aumentar.addEventListener("click", adicionar)
diminuir.addEventListener("click", subtrair)
resetar.addEventListener("click", restart) 
bloco.innerHTML = "0"
let num = Number(bloco.innerHTML)
function adicionar() {
    num++
    bloco.innerHTML = num
}
function subtrair() {
    num--
    bloco.innerHTML = num
}
function restart() {
    num = 0
    bloco.innerHTML = num
}