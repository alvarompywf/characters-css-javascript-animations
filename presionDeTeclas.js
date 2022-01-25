
document.addEventListener("keydown", pulsarTecla);

document.addEventListener("keyup", soltarTecla);

document.addEventListener("keydown", pulsarTecla2);

document.addEventListener("keyup", soltarTecla2);

var medievalSonidoAtacar = new Audio('assets/Medieval_Warrior/sword.wav');
var medievalSonidoAndar = new Audio('assets/Medieval_Warrior/walking.wav');
var minotauroSonidoAtacar = new Audio('assets/Minotauro/MinotauroAtacar.wav');
var minotauroSonidoCorriendo = new Audio('assets/Minotauro/minotauroCorriendo.wav')


//.WAV PERMITE TODOS LOS NAVEGADORES EXCEPTO IEXPLORER POR LO QUE SERIA BUENA PRACTIVA INCLUIR .WAV Y .MP3

// ATACA AL SPACIO
function comprobar(event) {
    
console.log(event)

}
function pulsarTecla(event) {

    if (event.keyCode === 32) {
        let divGuerrero = document.querySelector(".MedievalWarriorParado");
        console.log(divGuerrero.classList.value)
        divGuerrero.removeAttribute("class");
        divGuerrero.classList.add("MedievalWarriorAtacando");

        medievalSonidoAtacar.loop = true;
        medievalSonidoAtacar.play();
    }

    if (event.keyCode === 39) {
        let divGuerrero = document.querySelector(".MedievalWarriorParado");
        divGuerrero.removeAttribute("class");
        divGuerrero.classList.add("MedievalWarriorCorriendo");

        medievalSonidoAndar.loop = true;
        medievalSonidoAndar.play();
    }
}
//SI SE SUELTA LA TECLA VUELVE AL ESTADO ORIGINAL [PARADO]
function soltarTecla(event) {

    if (event.keyCode === 32) {

        let divGuerrero = document.querySelector(".MedievalWarriorAtacando");
        divGuerrero.removeAttribute("class");
        divGuerrero.classList.add("MedievalWarriorParado");
        medievalSonidoAtacar.loop = false;
        medievalSonidoAtacar.pause();
    }

    if (event.keyCode === 39) {

        let divGuerrero = document.querySelector(".MedievalWarriorCorriendo");
        divGuerrero.removeAttribute("class");
        divGuerrero.classList.add("MedievalWarriorParado");
        medievalSonidoAndar.loop = false;
        medievalSonidoAndar.pause();
    }
    console.log(event)
}

function pulsarTecla2(event) {

    if (event.keyCode === 37) {
        let divMinotauro = document.querySelector(".minotauroParado");
        divMinotauro.removeAttribute("class");
        divMinotauro.classList.add("minotauroCorriendo");

        minotauroSonidoCorriendo.loop = true;
        minotauroSonidoCorriendo.play();
    }

    if (event.keyCode === 40) {
        
        let divMinotauro = document.querySelector(".minotauroParado");
        divMinotauro.removeAttribute("class");
        divMinotauro.classList.add("minotauroAtacando");

        minotauroSonidoAtacar.loop = true;
        minotauroSonidoAtacar.play();
    }
}

function soltarTecla2(event) {

    if (event.keyCode === 37) {
        let divMinotauro = document.querySelector(".minotauroCorriendo");
        divMinotauro.removeAttribute("class");
        divMinotauro.classList.add("minotauroParado");

        minotauroSonidoCorriendo.loop = false;
        minotauroSonidoCorriendo.pause();
    }

    if (event.keyCode === 40) {
        let divMinotauro = document.querySelector(".minotauroAtacando");
        divMinotauro.removeAttribute("class");
        divMinotauro.classList.add("minotauroParado");

        minotauroSonidoAtacar.loop = false;
        minotauroSonidoAtacar.pause();
    }
}



window.onload = pulsarTecla;
window.onload = soltarTecla;
window.onload = soltarTecla2;
window.onload = pulsarTecla2;
