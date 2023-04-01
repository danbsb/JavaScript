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
    } else {paragrafo.innerHTML = `A soma de ${primeiroNumero.value} + ${segundoNumero.value} é igual a ${Number(primeiroNumero.value) + Number(segundoNumero.value)}!!`
    }
    primeiroNumero.value = ""
    segundoNumero.value = ""
}