const entrada = document.getElementById('entrada');
const seccion = document.getElementById('seccion');
const vidas = document.getElementById('vidas');
var intentos = 4;
const solucion = 'italia'
const vis1 = 'hidden';
const vis2 = 'visible';
rows = ['row1', 'row2', 'row3', 'row4']
var i = 0;


function gano() {
    vidas.innerHTML =  'Gano ' ;
    seccion.style.visibility = vis1;

};

function perdio() { 
    vidas.innerHTML = 'Perdio ';
    seccion.style.visibility = vis1
};

function intento() {

    event.preventDefault();
    console.log(entrada.value);
    if (entrada.value == solucion) {
        gano();

    } else if (intentos > 1) {
        i = i +1
        intentos = intentos - 1

        vidas.innerHTML =  'Intentos ' + intentos;
        document.getElementById(rows[i]).style.visibility = vis1;

    }
              
    else {
        vidas.innerHTML =  'Intentos ' + intentos;
        perdio();
    }

  }

  





