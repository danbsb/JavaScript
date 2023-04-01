//Seleciona a query de input
let input = document.querySelector("#input")
//Seleciona o parágrafo
let paragrafo = document.querySelector("p")
//Adiciona um escutador aos eventos do Botão
let botao = document.querySelector("#botao")
botao.addEventListener("click", clicou)


function clicou() {
    paragrafo.innerHTML = `Olá ${input.value} é um prazer te conhecer!`
}