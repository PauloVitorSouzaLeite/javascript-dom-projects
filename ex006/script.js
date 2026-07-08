const ColorButton = document.getElementById("ColorButton")
const TextBlock = document.getElementById("TextBlock")
ColorButton.addEventListener("click", MudarCor)
function MudarCor() {
    TextBlock.classList.add("ColorRed")
}