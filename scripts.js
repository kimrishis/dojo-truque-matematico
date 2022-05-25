function calcular(){
let ncacado = document.getElementById("ncacado").value
let anoborn = document.getElementById("anoborn").value
let resultado = `${ncacado}00 `-` ${anoborn}`
let final = resultado + 2022
let finalcalcado = final.toString().slice(0,2)
let finalano = final.toString().slice(2,4)
let ehVelho = finalano > 20
let alertavelho = "novin"
if (ehVelho) {
    alertavelho = "seu veio"
}
window.alert(`
    voce calca ${finalcalcado} agora com ${finalano} de idade ... ${alertavelho}
`)
}