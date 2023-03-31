//Seleciona a query de input
let input = document.querySelector("#input")
//Seleciona a query de lista
let lista = document.querySelector("#lista")


//Adiciona um escutador aos eventos do INPUT
//Escuta o evento "keyup" e direciona para a função apertou()
//Se o evento de teclado "keyup" for acionado
let enter = input.addEventListener("keyup", soltou)

//Como precisa de uma tecla, tem que definir um parâmetro na função
//A pessoa vai digitar o valor do input e depois vai apertar enter
function soltou (t) {
    // pega o parâmetro e analisa com a .key pra saber se é um enter
    if (t.key == 'Enter') {
    //Sendo um enter ele vai criar um item <li>
    let tarefas = document.createElement('li')
    //vai pegar o valor escrito antes do enter adicionar ao item
    //pega o value de input e adiciona ao tarefas pelo innerHTML
    tarefas.innerHTML = input.value
    //pega o item  com o value e faz um append na lista
    lista.append(tarefas)
    //depois de fazer o append ele vai zerar o que tá escrito no input
    input.value = ""
    }
}