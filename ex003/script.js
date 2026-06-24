let main_box = document.querySelector(".Resultado")
let iniciar = document.querySelector("#start")
let deletar = document.querySelector("#stop")
deletar.addEventListener("click", AtivarFuncao)
iniciar.addEventListener("click", MostrarNumeros)
function MostrarNumeros() {
    AtivarContainer(main_box)
    let box = document.createElement("div")
    for (let numero = 0; numero <= 100; numero++) {box.textContent += numero + " ";}
    main_box.appendChild(box)
}
function AtivarContainer(caixa) {
    caixa.innerHTML = ""
    caixa.style.display = "flex"
}
function DesativarContainer(caixa="") {caixa.style.display = "none"}
function AtivarFuncao() {return DesativarContainer(main_box)}