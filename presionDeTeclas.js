document.addEventListener("keypress", pulsarTecla);



function pulsarTecla(event) {
    console.log(event)
    if (event.keyCode === 32) {

        event.repeat = true;
        let divGuerrero = document.querySelector(".MedievalWarriorParado");
        divGuerrero.removeAttribute("class");
        divGuerrero.classList.add("MedievalWarriorAtacando");

    }
}


window.onload = pulsarTecla;