//Gerar Senha
let botaoGerarSenha = document.querySelector("#botaoGerar");
let senhas = [] 
botaoGerarSenha.addEventListener("click", gerarNumero);

function gerarNumero() {
    let numero;
    do {
        numero = Math.floor(Math.random() * 500);
    } while (senhas.includes(numero));
    senhas.push(numero);
    let senhaCadastro = document.querySelector("#textoSenha");
    senhaCadastro.innerHTML = `<strong>${numero}</strong>`;
    //Zera a Lista se chegar a 499 pessoas
    if (senhas.length == 499) {
        senhas = []
    }
    let proximaSenha = document.querySelector("#proximaSenha");
    proximaSenha.innerHTML = `<strong>${senhas[0]}</strong>`;

    let senhasGeradas = document.querySelector(".senhasGeradas");
    senhasGeradas.innerHTML = `Foram geradas <strong>${senhas.length}</strong> senhas!`;
    let senhasGeradas2 = document.querySelector(".senhasGeradas2");
    senhasGeradas2.innerHTML = `Foram geradas <strong>${senhas.length}</strong> senhas!`;
    console.log(senhas);
}

let botaoChamarSenha = document.querySelector("#botaoChamar");
botaoChamarSenha.addEventListener("click", chamarPessoas);

function chamarPessoas() {
    let proximaSenha = document.querySelector("#proximaSenha");
    proximaSenha.innerHTML = `<strong>${senhas[0]}</strong>`;
    senhas.shift();
    console.log(senhas);
    visor();
}

function visor(){
    //Senhas
    let numero = document.querySelector("#numero");
    numero.innerHTML = senhas[senhas.length - 1];

    //Ultimas Senhas
    if (senhas.length == 1) {
        let ultimasSenhas0 = document.querySelector("#li1");
        ultimasSenhas0.innerHTML = senhas[senhas.length - 1];
    } else if (senhas.length == 2) {
        let ultimasSenhas1 = document.querySelector("#li2");
        ultimasSenhas1.innerHTML = senhas[senhas.length - 1];
    }else if (senhas.length == 3) {
        let ultimasSenhas2 = document.querySelector("#li3");
        ultimasSenhas2.innerHTML = senhas[senhas.length - 1];
    } else if (senhas.length == 4) {
        let ultimasSenhas3 = document.querySelector("#li4");
        ultimasSenhas3.innerHTML = senhas[senhas.length - 1];
    } else if (senhas.length >= 5) {
        let ultimasSenhas0 = document.querySelector("#li1");
        let ultimasSenhas1 = document.querySelector("#li2");
        let ultimasSenhas2 = document.querySelector("#li3");
        let ultimasSenhas3 = document.querySelector("#li4");
        ultimasSenhas0.innerHTML = senhas[senhas.length - 1];
        ultimasSenhas1.innerHTML = senhas[senhas.length - 2];
        ultimasSenhas2.innerHTML = senhas[senhas.length - 3];
        ultimasSenhas3.innerHTML = senhas[senhas.length - 4];
    }

}
console.log(senhas);
