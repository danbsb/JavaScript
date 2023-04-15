// const valorVisor = document.querySelector("#valorVisor");
// let valorPrincipal = 0;
// let valorSimbolo = null;
// let valorSecundario = 0;
// let numVal = [];

// function atualizarVisor() {
//   valorVisor.innerHTML = numVal.join("");
// }

// function verificarNumero(valor) {
//   if (isNaN(valor)) {
//     alert("Número inválido. Tente novamente.");
//     resetarCalculadora();
//     return false;
//   }
//   return true;
// }

// function adicionarNumero(valor) {
//   numVal.push(valor);
//   atualizarVisor();
// }

// function adicionarSimbolo(valor) {
//   valorVisor.innerHTML = valor;
//   valorPrincipal = Number(numVal.join(""));
//   valorSimbolo = valor;
//   numVal = [];
// }

// function calcularResultado() {
//   const n1 = valorPrincipal;
//   const s1 = valorSimbolo;
//   const n2 = Number(numVal.join(""));
//   let resultado;
//   if (s1 === "+") {
//     resultado = n1 + n2;
//   } else if (s1 === "-") {
//     resultado = n1 - n2;
//   } else if (s1 === "÷") {
//     resultado = n1 / n2;
//   } else if (s1 === "x") {
//     resultado = n1 * n2;
//   }
//   valorVisor.innerHTML = resultado;
//   resetarCalculadora();
// }

// function resetarCalculadora() {
//   numVal = [];
//   valorPrincipal = 0;
//   valorSimbolo = null;
//   valorSecundario = 0;
// }

// function adicionarEventoNumeros() {
//   const botoes = document.querySelectorAll(".number");
//   botoes.forEach((botao) => {
//     botao.addEventListener("click", () => {
//       const valorButton = botao.value;
//       if (verificarNumero(valorButton)) {
//         adicionarNumero(valorButton);
//       }
//     });
//   });
// }

// function adicionarEventoSimbolos() {
//   const botoes = document.querySelectorAll(".simbol");
//   botoes.forEach((botao) => {
//     botao.addEventListener("click", () => {
//       const valorSimbolo = botao.value;
//       adicionarSimbolo(valorSimbolo);
//     });
//   });
// }

// adicionarEventoNumeros();
// adicionarEventoSimbolos();