
var gritoMedieval = new Audio('assets/Medieval_Warrior/grito.wav');

function pulsado1() {

    resetPage();

    let cartaVP = document.querySelector("#vistaPrevia");


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
    let divVida = document.querySelector("#vida");
    let vida = document.createElement("progress");
    vida.setAttribute("value", "60");
    vida.setAttribute("max", "100");
    divVida.appendChild(vida);

}
function mana() {
    let divMana = document.querySelector("#mana");
    let mana = document.createElement("progress");
    mana.setAttribute("value", "30");
    mana.setAttribute("max", "100");
    divMana.appendChild(mana);

}

function resetPage() {

    var divPsjs = document.querySelector("#botonVP");

    if (divPsjs !== null) {

        divPsjs.removeChild();

    }
}