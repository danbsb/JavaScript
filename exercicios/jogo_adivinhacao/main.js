// Gera um número aleatório de 1 a 100
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Inicializa o número de tentativas
let tentativas = 0;

// Função para adivinhar o número
function adivinhar() {
    // Obtém o número digitado pelo jogador
    let numero = document.getElementById("numero").value;

    // Verifica se o número é válido
    if (numero < 1 || numero > 100) {
        alert("Por favor, escolha um número de 1 a 100.");
        document.getElementById("numero").value = ""
        return;
    }
    // Incrementa o número de tentativas
    tentativas++;

    // Verifica se o jogador acertou
    if (numero == numeroAleatorio) {
        document.getElementById("resultado").innerHTML = `Parabéns! Você acertou o número em ${tentativas} tentativas.`;
    } else if (numero < numeroAleatorio) {
        document.getElementById("resultado").innerHTML = "O número é maior.";
    } else {
        document.getElementById("resultado").innerHTML = "O número é menor.";
    }
}