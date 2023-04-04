let operacao = 0;

let valor = document.querySelector("#valorVisor");



let botoes = document.querySelectorAll(".botao")
botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        let contador = 0
        let valorbutton = botao.value
        if (valorbutton == "C") {
            valor.innerHTML = 0;
            console.log(operacao)
        } else {
            valor.innerHTML = valorbutton
        }
    })
});
