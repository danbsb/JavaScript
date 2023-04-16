//função de reproduzir o som de acordo com o botão CLICADO
function reproduzir(botao) {
    let audio = ''
    switch (botao) {
        case "Q":
            audio = "sounds/keyq.wav"
            break;
        case "W":
            audio = "sounds/keyw.wav"
            break;
        case "E":
            audio = "sounds/keye.wav"
            break;
        case "A":
            audio = "sounds/keya.wav"
            break;
        case "S":
            audio = "sounds/keys.wav"
            break;
        case "D":
            audio = "sounds/keyd.wav"
            break;
        case "Z":
            audio = "sounds/keyz.wav"
            break;
        case "X":
            audio = "sounds/keyx.wav"
            break;
        case "C":
            audio = "sounds/keyc.wav"
    }
    //criado esse IF para que botões fora do Switch
    //não apresente erro no console
    if (audio != '') {
        let meuAudio = new Audio(audio)
        meuAudio.play()
    }    
}

//pega o array de ".botao" na "querySelectorAll"
// e para cada item do array add um addEventListener
//e no evento de clic chama uma função que chama outra função de reprodução
let tomClicado = document.querySelectorAll(".botao");
for (let item of tomClicado) {
    item.addEventListener("click", () => {
        reproduzir(item.innerHTML)
    })
}

//pega a tecla APERTADA na página, por isso naõ precisa de "querySelector"
//por meio de um escutador, e pega a chave do escutador e passa pro switch
let tomApertado = document.addEventListener("keyup", (event) => {
    let chave = ''
    //console.log(event.code)
    switch (event.code) {
        case "KeyQ":
            chave = "Q"
            //este é um toggle para quando APERTAR ele mudar a cor
            //do botão e da borda, pra ficar visível que foi apertado
            let tecladoQ = document.querySelector(".Q");
            tecladoQ.classList.toggle("botao-toggle");
            break;
        case "KeyW":
            chave = "W"
            let tecladoW = document.querySelector(".W");
            tecladoW.classList.toggle("botao-toggle"); 
            break;
        case "KeyE":
            chave = "E"
            let tecladoE = document.querySelector(".E");
            tecladoE.classList.toggle("botao-toggle");  
            break;
        case "KeyA":
            chave = "A"
            let tecladoA = document.querySelector(".A");
            tecladoA.classList.toggle("botao-toggle");  
            break;
        case "KeyS":
            chave = "S"
            let tecladoS = document.querySelector(".S");
            tecladoS.classList.toggle("botao-toggle"); 
            break;
        case "KeyD":
            chave = "D"
            let tecladoD = document.querySelector(".D");
            tecladoD.classList.toggle("botao-toggle");
            break;
        case "KeyZ":
            chave = "Z"
            let tecladoZ = document.querySelector(".Z");
            tecladoZ.classList.toggle("botao-toggle");
            break;
        case "KeyX":
            chave = "X"
            let tecladoX = document.querySelector(".X");
            tecladoX.classList.toggle("botao-toggle");
            break;
        case "KeyC":
            chave = "C"
            let tecladoC = document.querySelector(".C");
            tecladoC.classList.toggle("botao-toggle");
            break    
        case "Space":
            console.log("Space OK")  
            break 
        case "Backspace":
            console.log("Backspace OK")  
            break
        case "Enter":
            alert('Clique em TOCAR')
            break 
        case "NumpadEnter":
            alert('Clique em TOCAR') 
            break
        default:
            alert('Tecla inválida')         
    }     
    reproduzir(chave)
})

//pega a tecla SOLTA na página, por isso naõ precisa de "querySelector"
//por meio de um escutador, e pega a chave do escutador e passa pro switch
//aplica o toggle para mudar a cor do botão pra saber quando apertou e soltou
//na função acima colocado o toggle também para ativa e desativar o na apertada
let tomSolto = document.addEventListener("keydown", (event) => {
    //console.log(event.code)
    switch (event.code) {
        case "KeyQ":
            //este é um toggle para quando SOLTAR ele mudar a cor
            //do botão e da borda, pra ficar visível que foi SOLTADO
            let tecladoQ = document.querySelector(".Q");
            tecladoQ.classList.toggle("botao-toggle");
            break;
        case "KeyW":
            let tecladoW = document.querySelector(".W");
            tecladoW.classList.toggle("botao-toggle");        
            break;
        case "KeyE":
            let tecladoE = document.querySelector(".E");
            tecladoE.classList.toggle("botao-toggle");        
            break;
        case "KeyA":
            let tecladoA = document.querySelector(".A");
            tecladoA.classList.toggle("botao-toggle");        
            break;
        case "KeyS":
            let tecladoS = document.querySelector(".S");
            tecladoS.classList.toggle("botao-toggle");        
            break;
        case "KeyD":
            let tecladoD = document.querySelector(".D");
            tecladoD.classList.toggle("botao-toggle");        
            break;
        case "KeyZ":
            let tecladoZ = document.querySelector(".Z");
            tecladoZ.classList.toggle("botao-toggle");
            break;
        case "KeyX":
            let tecladoX = document.querySelector(".X");
            tecladoX.classList.toggle("botao-toggle");
            break;
        case "KeyC":
            let tecladoC = document.querySelector(".C");
            tecladoC.classList.toggle("botao-toggle");
            break    
        case "Space":
            console.log("Space OK")  
            break   
        case "Backspace":
            console.log("Backspace OK")  
            break    
        case "Enter":
            alert('Clique em TOCAR')
            break 
        case "NumpadEnter":
            alert('Clique em TOCAR') 
            break
        default:
            alert('Tecla inválida') 
    }     
})

//pega o Botão Tocar Música
let tocarComp = document.querySelector("#tocar")
tocarComp.addEventListener('click', () => {
    let texto = document.querySelector('#txt')
    //pega o valor do input e já transforma em ARRAY com "split()"
    let valorTexto = texto.value.toUpperCase().split('')
    //pega o array e manda pra função TOCAR a composição
    tocarMusica(valorTexto)
})

//Toca a composição digitada no input 'TXT'
function tocarMusica(notasMusicais) {
    let wait = 0
    for (let item of notasMusicais) {
        //setTimeout para não reproduzir tudo na mesma hora
        setTimeout(() => {reproduzir(item)}, wait)
        wait += 250
    }
}