//Seleciona a query de input
let primeiroNumero = document.querySelector("#primeiro")
//Seleciona o parágrafo
let paragrafo = document.querySelector("p")
//Adiciona um escutador aos eventos do Botão
let botao = document.querySelector("#botao")
botao.addEventListener("click", clicou)


function clicou() {
    if (primeiroNumero.value == "") {
        alert("Preencha todos os campos!")
    } else {
        paragrafo.innerHTML = `O antecessor de ${primeiroNumero.value} é ${Number(primeiroNumero.value) - 1} e o sucessor de ${primeiroNumero.value} é ${Number(primeiroNumero.value) + 1}!!`
    }
    primeiroNumero.value = ""
}