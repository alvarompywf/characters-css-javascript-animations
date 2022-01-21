
var gritoMedieval = new Audio('assets/Medieval_Warrior/grito.wav');

function pulsado1() {

    resetPage();

    let cartaVP = document.querySelector("#vistaPrevia");//se obtiene vista previa

    cartaVP.classList.remove();

    cartaVP.classList.add("MedievalWarriorParado");

    let boton = document.createElement("button");
    boton.id = "botonVP";
    boton.addEventListener("click", gritar);
    let textoBoton = document.createTextNode("🔊");


    boton.appendChild(textoBoton);
    cartaVP.appendChild(boton);

    barraDeVida();
    mana();
}
// <progress id="file" max="100" value="70"> </progress>
function gritar() {
    gritoMedieval.play();
}



function barraDeVida() {

    let divVida = document.getElementById("vida");
    divVida.classList.add("vida");


}
function mana() {
    let divVida = document.getElementById("mana");
    divVida.classList.add("mana");
}

function resetPage() {

    var divPsjs = document.querySelector("#botonVP");

    if (divPsjs !== null) {

        divPsjs.removeChild();

    }
}