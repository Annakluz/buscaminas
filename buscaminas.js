 
var arreglo = [];
function bombas(){
    var i=0;
    for(i=0; i<=16; i++){ 
      arreglo[i]= "zombie-vuelta.jpg";  
    }
    

    
}

function abrir(imagen) {
    var indice = imagen.id;
    console.log(indice);
    imagen.src = arreglo[indice]; //bia las imagenes. Todo bien hasta este punto. Checar porque no puedo poner imagen.id
}