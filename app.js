// configuracion del mensaje de alerta al enviar el formulario

var enviar = document.getElementById('enviar');

function enviado() {
    window.alert("La informacion ha sido enviada correctamente.");
}

enviar.addEventListener('click', enviado, false);


// configuracion para esconder los badges

var badges = document.getElementsByClassName('badge');

function esconder(elemento) {
    elemento.target.style.visibility = 'hidden';
}

for (const badge of badges) {
    badge.addEventListener('click', esconder, false);
}



// configuracion del temporizador

var timer = document.getElementById('timer');
var botontimer = document.getElementById('botonTimer');

let [minutos, segundos] = [5, 0];
let intervaloTiempo;
let estadoTimer = 'activo';

function correrTimer() {
    if (segundos === 0) {
        if (minutos === 0) {
            clearInterval(intervaloTiempo);
            window.alert("El tiempo ha terminado.");
            return;
        }
        segundos = 59;
        minutos--;
    } else {
        segundos--;
    }

    var formatosegundos = formatoValores(segundos);
    var formatoMinutos = formatoValores(minutos);
    timer.innerText = `${formatoMinutos}:${formatosegundos}`;
}

function formatoValores(valorTiempo) {
    return valorTiempo < 10 ? "0" + valorTiempo : valorTiempo;
}

function cambioEstadoTimer(elemento) {
    console.log(estadoTimer);
    console.log(elemento);
    if (estadoTimer === "activo") {
        estadoTimer = 'desactivado';
        elemento.target.innerText = "Activar";
        clearInterval(intervaloTiempo);
    } else {
        estadoTimer = "activo";
        elemento.target.innerText = "Pausar";
        intervaloTiempo = setInterval(correrTimer, 1000);
    }
}

intervaloTiempo = setInterval(correrTimer, 1000);

botontimer.addEventListener('click', cambioEstadoTimer, false);

// configuracion para relacionar la musica con el audio
var cancion = document.getElementById('cancion');
var video = document.getElementById('video');

function cambiarEstadoVideo(elemento){
    if (video.paused) {
        video.play();
        cancion.play();
    } else {
        video.pause();
       cancion.pause();
    }
}

video.addEventListener('click', cambiarEstadoVideo, false);

