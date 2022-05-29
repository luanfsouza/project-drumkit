const container = document.querySelector('#container')

const sons = {
    "A": "boom.wav",
    "S": "clap.wav",
    "D": "hihat.wav",
    "F": "kick.wav",
    "G": "openhat.wav",
    "H": "ride.wav",
    "J": "snare.wav",
    "K": "tink.wav",
    "L": "tom.wav"
}

const criarDiv = (text) => {
    const div = document.createElement('div')
    div.classList.add('key')
    div.id = text
    div.textContent = text.toUpperCase()
    container.appendChild(div)
}

const exibir = (sons) => Object.keys(sons).forEach(criarDiv)

const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`)
    audio.play()
}
//pode escrever: (letra) in sons
//ou pode escrever: sons.hasOwnProperty(letra), essa é a mlr forma pq mostra apenas as propriedades que o  usuario declarou.

const adcionarEfeito = (letra)=> document.getElementById(letra)
                                  .classList.toggle('active')
const removerEfeito = (letra) => {
    const div = document.getElementById(letra)
    const removeActive = () => div.classList.remove('active')
    div.addEventListener('transitionend', removeActive)
}

const ativarDiv = (evento) => {  
    //duas maneiras de fazer o if else
    /*
     let letra = ''
       if(evento.type == 'click'){
       letra = evento.target.id
       } else {
       letra = evento.key.toUpperCase()
       }
    */
    //ou utilizando o operador ternario: 
    const letra = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase()

    const letraPermitida = sons.hasOwnProperty(letra)
    if(letraPermitida){
        adcionarEfeito(letra)
        tocarSom(letra)
        removerEfeito(letra)
    }
}

exibir(sons)
container.addEventListener('click', ativarDiv)
window.addEventListener('keypress', ativarDiv)
