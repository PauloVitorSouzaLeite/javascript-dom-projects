let Contador = 0
let DocCorpo = document.querySelector(".FlexContainer")
let Numeros = document.querySelector("#DivNumber")
let BtnAumentar = document.querySelector("#Aumentar")
let BtnDiminuir = document.querySelector("#Diminuir")
let BtnResetar = document.querySelector("#Resetar")
BtnAumentar.addEventListener("click", NumeroAumenta)
BtnDiminuir.addEventListener("click", NumeroDiminue)
BtnResetar.addEventListener("click", Reinicio)
function Atualizar() {
    if (Contador < 0) {DocCorpo.style.backgroundColor = "darkred"} 
    else if (Contador === 0) {DocCorpo.style.backgroundColor = "white"} 
    else {DocCorpo.style.backgroundColor = "lightgreen"}
}
function NumeroAumenta() {
    Contador++
    Numeros.innerHTML = Contador
    Atualizar()
}
function NumeroDiminue() {
    Contador--
    Numeros.innerHTML = Contador
    Atualizar()
}
function Reinicio() {
    if (Contador === 0) {alert("O contador já está em reiniciado!")}
    Contador = 0
    Numeros.innerHTML = 0
    Atualizar()
}