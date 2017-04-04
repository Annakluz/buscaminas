//variables globales
var arregloImagenes = []; //Declaro el arreglo donde iran las imagenes
//function que inicia las bombas en el archivo
function mordidasZombie(){
    var i=0;
    for(i=0 i<16 i++) {
        arregloImagenes[i] = "zombie02.jpg"
    }
}

function abrirCelda(imagen) {
    imagen.src = arregloImagenes[0];
    alert("click!");
}