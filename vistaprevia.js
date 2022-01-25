
var gritoMedieval = new Audio('assets/Medieval_Warrior/grito.wav');
var gritoMinotauro = new Audio('assets/Minotauro/minotauroGrunido.wav');


function pulsado1() {

    resetPage();

    let cartaVP = document.querySelector("#vistaPrevia");//se obtiene vista previa
    
    console.log(cartaVP.classList.value+"dadad") 
    cartaVP.classList.value = "";
    cartaVP.classList.add("MedievalWarriorParado");
    

    let boton = document.createElement("button");
    boton.id = "botonVP";
    boton.addEventListener("click", gritoMedievalFuncion);
    let textoBoton = document.createTextNode("🔊");


    boton.appendChild(textoBoton);
    cartaVP.appendChild(boton);

    barraDeVida();
    mana();

}

function gritoMedievalFuncion() {
    gritoMedieval.play();
}
function gritoMinorauroFuncion() {
    gritoMinotauro.play();
}



function asignarBoton() {

    let BotonGuerrero = document.querySelector(".botonGuerrero");
    BotonGuerrero.addEventListener("click", pulsado1);

}

function pulsado2() {

    resetPage();

    let cartaVP2 = document.querySelector("#vistaPrevia");
    console.log(cartaVP2)
    cartaVP2.class = "";
    console.log(cartaVP2)
    cartaVP2.classList.add("minotauroParado");
    console.log(cartaVP2)

    let boton = document.createElement("button");
    boton.id = "botonVP";
    boton.addEventListener("click", gritoMinorauroFuncion);
    let textoBoton = document.createTextNode("🔊");


    boton.appendChild(textoBoton);
    cartaVP2.appendChild(boton);

    barraDeVida();
    mana();

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

    var divVP = document.querySelector("#vistaPrevia");
    var botonVP = document.querySelector("#botonVP");

    if (divVP !== null) {

        divVP.classList.remove();
        console.log("CL delete")
    }
    if (botonVP !== null) {

        console.log("jdkahjahdjkahdjkahjkshjd")
        divVP.removeChild(botonVP);
        console.log("djaidjaodi")


    }
}

window.onload = asignarBoton();