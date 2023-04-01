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
        paragrafo.innerHTML = `O dobro de ${primeiroNumero.value} é igual a ${Number(primeiroNumero.value)*2}!! <br>O triplo de ${primeiroNumero.value} é igual a ${Number(primeiroNumero.value)*3}!! <br>A raiz quadrada de ${primeiroNumero.value} é igual a ${Number(primeiroNumero.value)*Number(primeiroNumero.value)}!!`
    }
    primeiroNumero.value = ""
}