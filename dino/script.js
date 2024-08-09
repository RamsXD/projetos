var jogoAtivo = true

function pulo() {
    if(!jogoAtivo) return
    if(!dino.classList.contains("pulo")){
        dino.classList.add("pulo")

        setTimeout(function() {
            dino.classList.remove("pulo")
        },500)
    }
}
// quais teclas estão pressionadas
document.addEventListener("keydown", function(event){
    // se espaço for pressionado ativa a função pulo
    if(event.code == "Space"){
        pulo()
    }
})

//chão
let chaoPosition = 0

function moveChao() {
    if(!jogoAtivo) return
    chaoPosition -= 3
    chao.style.backgroundPositionX = chaoPosition + 'px' 
    requestAnimationFrame(moveChao)
}

//cacto

let cactoPosition = 0
function moveCacto() {
    if(!jogoAtivo) return
    cactoPosition -= 3
    cacto.style.left = cactoPosition + 'px'
    if (cactoPosition < 5) {
        cactoPosition = 590

    }
    requestAnimationFrame(moveCacto)
}

//nuvem

let nuvemPosition = 0  
function moveNuvem() {
    if(!jogoAtivo) return
    nuvemPosition -= 0.6
    nuvem.style.left = nuvemPosition + 'px'
    if (nuvemPosition < 5) {
        nuvemPosition = 590
    }
    requestAnimationFrame(moveNuvem)
}

//animação

var step = 1 

function animateDino() {
    if(!jogoAtivo) {
        dino.style.backgroundImage = 'url(img/Scared.png)'
    }else {
    if (dino.classList.contains("pulo")) {
        dino.style.backgroundImage = "url(img/dino.png)"
    } else {        
        if (step == 1){
            dino.style.backgroundImage = "url(img/dino1.png)" 
            step = 2 
        } else {
            dino.style.backgroundImage = "url(img/dino2.png)"
            step = 1 
    } 
    }
}
}

//colisao

function colidiu(rect1, rect2) {
    return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom)
}

function verificarColisao(){
    var dinoRect = document.getElementById ('dino').getBoundingClientRect()
    var cactoRect = document.getElementById ('cacto').getBoundingClientRect()

    if (colidiu(dinoRect, cactoRect)) {
        jogoAtivo = false
        clearInterval(verificacao)
        console.log('Colisão detectada!')
        atualizarTelaGameOver()
    }
}

function atualizarTelaGameOver(){
    var elementoGameOver = document.getElementById('gameover')
    elementoGameOver.style.visibility = 'visible'    
}

moveChao()
moveCacto()
moveNuvem()
setInterval(animateDino,100)
var verificacao = setInterval(verificarColisao,100)