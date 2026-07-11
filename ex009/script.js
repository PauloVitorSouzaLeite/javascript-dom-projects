const TextPage = document.querySelector(".FlexContainer")
const Button = document.querySelector("#Alternar")
Button.addEventListener("click", MudarBackground)
function MudarBackground() {
    Button.classList.toggle("White")
    TextPage.classList.toggle("Dark")
}