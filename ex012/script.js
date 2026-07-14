const ButtonEnviar = document.querySelector("#SubmitButton")
const CaixaNome = document.querySelector("#Inome")
const CaixaEmail = document.querySelector("#Iemail")
ButtonEnviar.addEventListener("click", Verificacao)
function Verificacao() {
    Avisar(CaixaNome, CaixaEmail)
}
function Avisar(a,b) {
    if (a.value === "") {
        if (a.classList.contains("GreenBorder")) {
            a.classList.replace("GreenBorder","RedBorder")
        } else {a.classList.add("RedBorder")}
    } 
    else {
        if (a.classList.contains("RedBorder")) {
            a.classList.replace("RedBorder","GreenBorder")
        } else {a.classList.add("GreenBorder")}
    }
    if (b.value === "") {
        if (b.classList.contains("GreenBorder")) {
            b.classList.replace("GreenBorder", "RedBorder")
        } else {b.classList.add("RedBorder")}
        }
    else {
        if (b.classList.contains("RedBorder")) {
            b.classList.replace("RedBorder","GreenBorder")
        } else {b.classList.add("GreenBorder")}
    }
}