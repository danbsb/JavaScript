//Seleciona a query de input
let nome = document.querySelector("#nome")
let dia = document.querySelector("#dia")
let mes = document.querySelector("#mes")
let ano = document.querySelector("#ano")
//Seleciona o parágrafo
let paragrafo = document.querySelector("p")
//Adiciona um escutador aos eventos do Botão
let botao = document.querySelector("#botao")
botao.addEventListener("click", clicou)


function clicou() {
    paragrafo.innerHTML = `Olá <strong>${nome.value}</strong> é um prazer te conhecer! <br>Você nasceu no dia ${dia.value} do mês ${mes.value} do ano de ${ano.value}`
}