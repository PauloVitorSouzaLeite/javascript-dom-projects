var clicar = document.querySelector("#gerar")
clicar.addEventListener("click", execute)
function execute() {
    let info = document.querySelector("#num")
    let rs = document.querySelector("#resultado")
    let p = document.querySelector("#paragrafo")
    let num = Number(info.value)
    if (info.value.length == 0) {
        p.innerHTML = "Ocorreu um erro inesperado"
        rs.innerHTML = ""
        alert("Digite algum valor.")
    } else {
        p.innerHTML = `Tabuada do número ${num}`
        rs.innerHTML = ""
        rs.style.lineHeight = "1.3"
        for (let c = 1; c <= 10; c++) {
            rs.innerHTML += `${num} x ${c} = ${num * c}`
            rs.innerHTML += "<br>"
        }
    }
}