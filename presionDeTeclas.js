
document.addEventListener("keydown", pulsarTecla);

document.addEventListener("keyup", soltarTecla);

var medievalSonidoAtacar = new Audio('assets/Medieval_Warrior/sword.wav');
var medievalSonidoAndar = new Audio('assets/Medieval_Warrior/walking.wav');
//.WAV PERMITE TODOS LOS NAVEGADORES EXCEPTO IEXPLORER POR LO QUE SERIA BUENA PRACTIVA INCLUIR .WAV Y .MP3

// ATACA AL SPACIO

function pulsarTecla(event) {

    if (event.keyCode === 32) {
        let divGuerrero = document.querySelector(".MedievalWarriorParado");
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
}

window.onload = pulsarTecla;
window.onload = soltarTecla;