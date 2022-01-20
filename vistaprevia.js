
var gritoMedieval = new Audio('assets/Medieval_Warrior/grito.wav');

function pulsado1() {
    
    resetPage();

    let cartaVP = document.querySelector("#vistaPrevia");
    cartaVP.classList.remove();
    cartaVP.classList.add("MedievalWarriorParado");

    let boton = document.createElement("button");
    boton.id = "botonVP";
    boton.addEventListener("click", gritar);
    let textoBoton = document.createTextNode("GRITO")

    boton.appendChild(textoBoton);
    cartaVP.appendChild(boton);

}


function gritar() {

    gritoMedieval.play();

}

function resetPage() {

    var divPsjs = document.querySelector("#botonVP");

    if (divPsjs !== null) {
        
            divPsjs.removeChild();
        
    }
}