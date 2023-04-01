//Seleciona a query de input
let primeiroNumero = document.querySelector("#primeiro")
let segundoNumero = document.querySelector("#segundo")
//Seleciona o parágrafo
let paragrafo = document.querySelector("p")
//Adiciona um escutador aos eventos do Botão
let botao = document.querySelector("#botao")
botao.addEventListener("click", clicou)


function clicou() {
    if (primeiroNumero.value == "" || segundoNumero.value == "") {
        alert("Preencha todos os campos!")
    } else {
        for (let v = 0; v <= Number(segundoNumero.value); v++) {
            paragrafo.innerHTML += `A tabuada de <strong>${primeiroNumero.value} x ${v}</strong> é igual a <strong>${Number(primeiroNumero.value) * v}</strong><br> <hr>`
        }
    }
    primeiroNumero.value = ""
    segundoNumero.value = ""
}
