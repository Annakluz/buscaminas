 
var arreglo = [];
function bombas(){
    var i=0;
    for(i=0; i<=16; i++){ 
      arreglo[i]= "zombi2.jpg";  
    }
    
}
function abrir(imagen) {
    imagen.src = arreglo[0]; //cambia las imagenes. Todo bien hasta este punto.
}