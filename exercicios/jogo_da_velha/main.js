let numeros = document.querySelectorAll('.n')
let div = document.querySelectorAll('.sqr')
let contador = 0

function simbolo(valor) {
    if (valor % 2 == 0) {
        contador++
        return 'O'
    } else if (valor % 2 == 1){
        contador++
        return 'X'
    }
    contador++
}

function marcar() {
    for (let item of div) {
        item.addEventListener('click', () => {
            let confirma = document.getElementById(`${item.id}`)
            //verifica se dentro da DIV tem FILHOS
            //evita 2 marcações na mesma caixinha
            if (confirma.hasChildNodes()) {
                alert('Opção já marcada')
            } else {
                var paragrafo = document.createElement('p');
                let simbol = simbolo(contador)
                paragrafo.setAttribute("class", "novo-elemento")
                paragrafo.innerHTML = simbol;
                item.appendChild(paragrafo)
                vez(simbol)
                analisar(item.id, simbol)
                // console.log(item.id, simbol)
            }
        })    
    }  
}

let jogador = document.querySelector('#vez1')
function vez(valor) {
    if (valor == 'X') {
        jogador.innerHTML = 'O'
    } else if (valor == 'O') {
        jogador.innerHTML = 'X'
    }
}

let linha1 = []
let linha2 = []
let linha3 = []
let coluna1 = []
let coluna2 = []
let coluna3 = []
let diag1 = []
let diag2 = []
function analisar(id, simbolo) {
    switch(id) {
        case '1':
            linha1.push(simbolo)
            diag1.push(simbolo)
            coluna1.push(simbolo)
            break
        case '2':
            linha1.push(simbolo)
            coluna2.push(simbolo)
            break
        case '3':
            linha1.push(simbolo)
            coluna3.push(simbolo)
            diag2.push(simbolo)
            break
        case '4':
            linha2.push(simbolo)
            coluna1.push(simbolo)
            break
        case '5':
            linha2.push(simbolo)
            coluna2.push(simbolo)
            diag1.push(simbolo)
            diag2.push(simbolo)
            break
        case '6':
            linha2.push(simbolo)
            coluna3.push(simbolo)
            break
        case '7':
            linha3.push(simbolo)
            diag2.push(simbolo)
            coluna1.push(simbolo)
            break
        case '8':
            linha3.push(simbolo)
            coluna2.push(simbolo)
            break
        case '9':
            linha3.push(simbolo)
            coluna3.push(simbolo)
            diag1.push(simbolo)
    }
    lerLinhas()
}

let vencedor = document.querySelector('#win1')
function lerLinhas() {
    if (linha1.length == 3 && (linha1[0] === linha1[1] && linha1[1] === linha1[2])) {
        alert('Fim de Jogo!!')
        vencedor.innerHTML = linha1[0]
        jogador.innerHTML = ''
        //muda a cor do CSS pra linha ganhadora
        let pintar = document.querySelectorAll('.e1, .e2, .e3')
        for (let item of pintar) {
            let pElements = item.querySelectorAll('p');
            for (let p of pElements) {
               p.style.color = 'yellow'
            }
        }

    } else if (linha2.length == 3 && (linha2[0] === linha2[1] && linha2[1] === linha2[2])) {
        alert('Fim de Jogo!!')
        vencedor.innerHTML = linha2[0]
        jogador.innerHTML = ''
        //muda a cor do CSS pra linha ganhadora
        let pintar = document.querySelectorAll('.e4, .e5, .e6')
        for (let item of pintar) {
            let pElements = item.querySelectorAll('p');
            for (let p of pElements) {
               p.style.color = 'yellow'
            }
        }

    } else if (linha3.length == 3 && (linha3[0] === linha3[1] && linha3[1] === linha3[2])) {
        alert('Fim de Jogo!!')
        vencedor.innerHTML = linha3[0]
        jogador.innerHTML = ''
        //muda a cor do CSS pra linha ganhadora
        let pintar = document.querySelectorAll('.e7, .e8, .e9')
        for (let item of pintar) {
            let pElements = item.querySelectorAll('p');
            for (let p of pElements) {
               p.style.color = 'yellow'
            }
        }

    } else if (coluna1.length == 3 && (coluna1[0] === coluna1[1] && coluna1[1] === coluna1[2])) {
        alert('Fim de Jogo!!')
        vencedor.innerHTML = coluna1[0]
        jogador.innerHTML = ''
        //muda a cor do CSS pra coluna ganhadora
        let pintar = document.querySelectorAll('.e1, .e4, .e7')
        for (let item of pintar) {
            let pElements = item.querySelectorAll('p');
            for (let p of pElements) {
               p.style.color = 'yellow'
            }
        }

    } else if (coluna2.length == 3 && (coluna2[0] === coluna2[1] && coluna2[1] === coluna2[2])) {
        alert('Fim de Jogo!!')
        vencedor.innerHTML = coluna2[0]
        jogador.innerHTML = ''
        //muda a cor do CSS pra coluna ganhadora
        let pintar = document.querySelectorAll('.e2, .e5, .e8')
        for (let item of pintar) {
            let pElements = item.querySelectorAll('p');
            for (let p of pElements) {
               p.style.color = 'yellow'
            }
        }

    } else if (coluna3.length == 3 && (coluna3[0] === coluna3[1] && coluna3[1] === coluna3[2])) {
        alert('Fim de Jogo!!')
        vencedor.innerHTML = coluna3[0]
        jogador.innerHTML = ''
        //muda a cor do CSS pra coluna ganhadora
        let pintar = document.querySelectorAll('.e3, .e6, .e9')
        for (let item of pintar) {
            let pElements = item.querySelectorAll('p');
            for (let p of pElements) {
               p.style.color = 'yellow'
            }
        }

    } else if (diag1.length == 3 && (diag1[0] === diag1[1] && diag1[1] === diag1[2])) {
        alert('Fim de Jogo!!')
        vencedor.innerHTML = diag1[0]
        jogador.innerHTML = ''
        //muda a cor do CSS pra diagonal ganhadora
        let pintar = document.querySelectorAll('.e1, .e5, .e9')
        for (let item of pintar) {
            let pElements = item.querySelectorAll('p');
            for (let p of pElements) {
               p.style.color = 'yellow'
            }
        }

    } else if (diag2.length == 3 && (diag2[0] === diag2[1] && diag2[1] === diag2[2])) {
        alert('Fim de Jogo!!')
        vencedor.innerHTML = diag2[0]
        jogador.innerHTML = ''
        //muda a cor do CSS pra diagonal ganhadora
        let pintar = document.querySelectorAll('.e3, .e5, .e7')
        for (let item of pintar) {
            let pElements = item.querySelectorAll('p');
            for (let p of pElements) {
               p.style.color = 'yellow'
            }
        }
    } else if (linha1.concat(linha2, linha3).length == 9) {
        vencedor.innerHTML = 'Empatado!'
        jogador.innerHTML = ''
        //muda a cor do CSS pra diagonal ganhadora
        for (let item of div) {
            let pElements = item.querySelectorAll('p');
            for (let p of pElements) {
                p.style.color = 'yellow'
            }
        }
    }
}

let botao = document.querySelector('#botao')
botao.addEventListener('click', limpar = () => {
    linha1 = []
    linha2 = []
    linha3 = []
    coluna1 = []
    coluna2 = []
    coluna3 = []
    diag1 = []
    diag2 = []
    vencedor.innerHTML = ''
    jogador.innerHTML = ''

    //pega todas as DIV e motra 1 por 1, cada uma é um ITEM
    for (let item of div) {
        //pega o elemento <p> de cada Div (item)
        let pElements = item.querySelectorAll('p');
        //vai remover cada <p> achado no conjunto dos <p>
        //vai falar que para cada item da DIV vai remover o P
        for (let p of pElements) {
            item.removeChild(p);
        }
    }
})

marcar()
