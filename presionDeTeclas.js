
document.addEventListener("keydown", pulsarTecla);
document.addEventListener("keyup", soltarTecla);


// ATACA AL SPACIO

function pulsarTecla(event) {
    console.log(event);

    if (event.keyCode === 32) {

        let divGuerrero = document.querySelector(".MedievalWarriorParado");
        divGuerrero.removeAttribute("class");
        divGuerrero.classList.add("MedievalWarriorAtacando");

    }

    if (event.keyCode === 39) {

        let divGuerrero = document.querySelector(".MedievalWarriorParado");
        divGuerrero.removeAttribute("class");
        divGuerrero.classList.add("MedievalWarriorCorriendo");

    }



}
//SI SE SUELTA LA TECLA VUELVE AL ESTADO ORIGINAL [PARADO]
function soltarTecla(event) {
    console.log("tecla soltada")

    if (event.keyCode === 32) {
        let divGuerrero = document.querySelector(".MedievalWarriorAtacando");
        divGuerrero.removeAttribute("class");
        divGuerrero.classList.add("MedievalWarriorParado");
    }

    if (event.keyCode === 39) {
        let divGuerrero = document.querySelector(".MedievalWarriorCorriendo");
        divGuerrero.removeAttribute("class");
        divGuerrero.classList.add("MedievalWarriorParado");

    }
}


window.onload = pulsarTecla;
window.onload = soltarTecla;