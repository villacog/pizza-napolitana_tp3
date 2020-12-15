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

    // esta linea esconde el campo de entrada y el boton porque el juego ya termino y el usuario gano
    seccion.style.visibility = vis1;

};

function perdio() { 
    vidas.innerHTML = 'Perdio ';
    
        // esta linea esconde el campo de entrada y el boton porque el juego ya termino y el usuario perdio
    seccion.style.visibility = vis1

};

// Esta funcion toma lo que el usuario ingreso y lo procesa
function intento() {

    event.preventDefault();
    console.log(entrada.value);
    
// chequea si lo que entro el usuario es la respuesta correcta, si gano va a la funcion gano
    if (entrada.value == solucion) {
        gano();

    // si lo que el usuario ingreso chequea que le queden vidas o intentos, si le quedan
        // incrementa el numero de intentos (i) y resta una vida (intentos)
    } else if (intentos > 1) {
        i = i +1
        intentos = intentos - 1

        // esta linea actualiza las vidas restantes en la pantalla
        vidas.innerHTML =  'Intentos ' + intentos;
        // console.log(intentos);
        // console.log('siga intentando')
        //esta linea hace visible la siguiente pista, en el html yo escribi todas las pistas pero
        // les puse la visibilidad en hidden, asi que no se ven que les cambie el valor a visible
        document.getElementById(rows[i]).style.visibility = vis2;


    }
        
        // llega hasta aca es porque la respues q ingreso no es correctta, variable solucion, y porque se 
        // quedo sin vidas, es decir intento llego a 0, entonces perdio y se invoca la funcion perdio
    else {
        vidas.innerHTML =  'Intentos ' + intentos;
        perdio();
    }

  }

  





