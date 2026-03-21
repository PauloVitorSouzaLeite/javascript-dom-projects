var clique = document.querySelector("#clicar")
var navegar = document.querySelector("#navegacao")
clique.addEventListener("click", execute) 
function execute() {
    if (clique.textContent == "Abrir") {
        clique.textContent = "Fechar"
    } else if(clique.textContent == "Fechar") {
        clique.textContent = "Abrir"
    }
    navegar.classList.toggle("ativo")
}