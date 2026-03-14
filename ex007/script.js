var clicar = document.getElementsByName("jogos")
var resultado = document.querySelector("#saida")
let imp = clicar[0]
let tab = clicar[1]
let nums = clicar[2]
imp.addEventListener("click", imps)
tab.addEventListener("click", tabuada)
nums.addEventListener("click", numeros)
function imps() {
    resultado.innerHTML = ""
    resultado.textContent = "Digite algum número"

    let digitar = document.createElement("input")
    let botao = document.createElement("button")

    digitar.setAttribute("type","number")
    botao.textContent = "Enviar"

    resultado.appendChild(digitar)
    resultado.appendChild(botao)

    botao.addEventListener("click", execute)
    function execute() {
        if (digitar.value == "") {
            alert("Ocorreu um erro. Tente novamente!")
        } else {
            let num = Number(digitar.value)
            if (num % 2 == 0) {
                resultado.innerHTML += "Este número é PAR!"
            } else {
                resultado.innerHTML += "Este número é ÍMPAR!"
            }
        }
    }
}
function tabuada() {
    resultado.innerHTML = ""
    resultado.textContent = "Digite um número para a tabuada"

    let perg = document.createElement("input")
    let btn = document.createElement("button")

    perg.setAttribute("type","number")

    resultado.appendChild(perg)
    resultado.appendChild(btn)

    btn.textContent = "Enviar"
    btn.addEventListener("click", execute)
    function execute() {
        if (perg.value == "") {
            alert("Ocorreu um erro. Tente novamente!")
        } else {
            let num = Number(perg.value) 
            for (var c = 1 ; c <= 10; c++) {
                resultado.innerHTML += `${num} x ${c} = ${num * c}`
                resultado.innerHTML += " | "
            }
        }
    }
}
function numeros() {
    resultado.innerHTML = ""
    resultado.textContent = "1 - Início | 2 - Até | 3 - Pulando de "

    let inicio = document.createElement("input")
    let final = document.createElement("input")
    let pulo = document.createElement("input")
    let clique = document.createElement("button")

    inicio.setAttribute("type","number")
    final.setAttribute("type","number")
    pulo.setAttribute("type","number")

    clique.textContent = "Enviar"

    resultado.appendChild(inicio)
    resultado.appendChild(final)
    resultado.appendChild(pulo)
    resultado.appendChild(clique)

    clique.addEventListener("click", execute)
    function execute() {
        if (inicio.value == "" || final.value == "" || pulo.value == ""){
            alert("Ocorreu um erro. Tente novamente!")
        } else {
            let i = Number(inicio.value)
            let f = Number(final.value)
            let p = Number(pulo.value)
            if (p <= 0) {
                p = 1
            } 
            if (i < f) {
                for (let c = i; c <= f; c += p) {
                    resultado.innerHTML += c + " "
                } 
            } else if (i > f) {
                for (let c = i; c >= f; c -= p) {
                    resultado.innerHTML += c + " "
                }
            }
        }
    }
}