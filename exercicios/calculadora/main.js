let valorPrincipal = 0
let valorSimbolo = null
let valorSecundario = 0

function visor(valorbutton) {
    window.valorNumeros = Number(valorbutton.join(''))
    if (valorPrincipal == 0) {
        window.valorVisor = document.querySelector("#valorVisor");
        valorVisor.innerHTML = valorbutton.join('')
        if (isNaN(valorNumeros)) {
            alert('Número inválido tente novamente')
            valorVisor.innerHTML = 0
            numVal = []
            valorPrincipal = 0
            valorSimbolo = null
            valorSecundario = 0
        }
    } else {
        window.valorVisor = document.querySelector("#valorVisor");
        valorVisor.innerHTML = valorbutton.join('')
        if (isNaN(valorNumeros)) {
            alert('Número inválido tente novamente 2')
            valorVisor.innerHTML = 0
            numVal = []
            valorPrincipal = 0
            valorSimbolo = null
            valorSecundario = 0
        }
        valorSecundario = valorNumeros
    }

}

function numeros() {
    let botoes = document.querySelectorAll(".number")
    //função window antes da variável a torna global
    window.numVal = []    
    botoes.forEach((botao) => {
        botao.addEventListener("click", () => {
            let valorbutton = botao.value
            numVal.push(valorbutton)
            // console.log(numVal)
            visor(numVal)
        })
    });
}

function simbolos() {
    let botoes = document.querySelectorAll(".simbol")
    botoes.forEach((botao) => {
        botao.addEventListener("click", () => {
            let valorSimbol = botao.value
            valorVisor.innerHTML = valorSimbol
            numVal = []
            valorPrincipal = valorNumeros
            if (valorSimbolo == null) {
                valorSimbolo = valorSimbol
            }
        })
    });
}

let contador = 0
let botaoIgual = document.querySelector(".igual")
botaoIgual.addEventListener("click", () => {
        if(contador == 0) {
            let n1 = valorPrincipal
            let s1 = valorSimbolo
            let n2 = valorSecundario
            if(s1 == '+') {
                let res1 = n1+n2
                valorVisor.innerHTML = res1
            } else if(s1 == '-') {
                let res2 = n1-n2
                valorVisor.innerHTML = res2
            } else if(s1 == '÷') {
                let res3 = n1/n2
                valorVisor.innerHTML = res3
            } else if(s1 == 'x') {
                let res4 = n1*n2
                valorVisor.innerHTML = res4
            }
            console.log(`${contador}`)
            contador++
            console.log(`${contador}`)
            console.log(`${valorPrincipal}${valorSimbolo}${valorSecundario}`)
        } else if(contador > 0) {
            valorVisor.innerHTML = 0
            numVal = []
            valorPrincipal = 0
            valorSimbolo = null
            valorSecundario = 0
            contador = 0
        }
    }    
)


numeros();
simbolos();