var bt1 = document.getElementsByClassName("botao")[0]
bt1.addEventListener("click", somar)
var bt2 = document.getElementsByClassName("botao")[1]
bt2.addEventListener("click", subtrair)
var bt3 = document.getElementsByClassName("botao")[2]
bt3.addEventListener("click", multiplicar)
var bt4 = document.getElementsByClassName("botao")[3]
bt4.addEventListener("click", dividir)
function somar() {
    var num = document.getElementById("num1")
    var num2 = document.getElementById("num2")
    var s = Number(num.value)
    var s2 = Number(num2.value)
    var mostrar = document.getElementById("resultado")
    mostrar.textContent = `${s} + ${s2} = ${s + s2}`
}
function subtrair() {
    var n1 = document.getElementById("num1")
    var n2 = document.getElementById("num2")
    var s = Number(n1.value)
    var s2 = Number(n2.value)
    var mostrar = document.getElementById("resultado")
    mostrar.textContent = `${s} - ${s2} = ${s - s2}`
}
function multiplicar() {
    var n1 = document.getElementById("num1")
    var n2 = document.getElementById("num2")
    var s = Number(n1.value)
    var s2 = Number(n2.value)
    var mostrar = document.getElementById("resultado")
    mostrar.textContent = `${s} x ${s2} = ${s * s2}`
}
function dividir() {
    var n1 = document.getElementById("num1")
    var n2 = document.getElementById("num2")
    var s = Number(n1.value)
    var s2 = Number(n2.value)
    var mostrar = document.getElementById("resultado")
    if (s != 0 && s2 != 0) {
        mostrar.textContent = `${s} / ${s2} = ${s / s2}`
    } else {
        mostrar.textContent = "Não há como dividir por ZERO!"
    }
}