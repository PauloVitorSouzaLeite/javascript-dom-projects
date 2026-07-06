let BlocoHoras = document.querySelector(".Hours")
let BlocoMinutos = document.querySelector(".Minutes")
let BlocoSegundos = document.querySelector(".Seconds")
function AtualizarHorario() {
    let Horarios = new Date()
    let Horas = Horarios.getHours()
    let Minutos = Horarios.getMinutes()
    let Segundos = Horarios.getSeconds()
    if (Horas < 10) {
        BlocoHoras.textContent = "0" + Horas
    } else {BlocoHoras.textContent = Horas}
    if (Minutos < 10) {
        BlocoMinutos.textContent = "0" + Minutos
    } else {BlocoMinutos.textContent = Minutos}
    if (Segundos < 10) {
        BlocoSegundos.textContent = "0" + Segundos
    } else {BlocoSegundos.textContent = Segundos}
}
AtualizarHorario()
setInterval(AtualizarHorario, 1000)