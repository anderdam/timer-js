const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let segundos = 0;
let timer;

function getTimeFromSeconds(segundos) {
    return new Date(segundos * 1000).toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'GMT'});
}

function iniciarRelogio() {
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}

function btnIniciar() {
    relogio.classList.remove("pausado");
    clearInterval(timer); 
    iniciarRelogio();
}

function btnPausar() {
    relogio.classList.add("pausado");
    clearInterval(timer);
}

function btnZerar() {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    segundos = 0; 
    relogio.innerHTML = getTimeFromSeconds(segundos);
}

document.addEventListener('click', (event) => {
    const elemento = event.target;

    if (elemento.classList.contains("iniciar")) {
        btnIniciar();
    }
    else if (elemento.classList.contains("pausar")) {
        btnPausar();
    }
    else if (elemento.classList.contains("zerar")) {
        btnZerar();
    }    
});