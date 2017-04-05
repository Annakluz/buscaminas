 
var arreglo = [];
function bombas(){
    var i=0;
    for(i=0; i<=16; i++){ 
      arreglo[i]= "grunge.jpg";  
    }
    arreglo[3]="zombie-vuelta.jpg";
    arreglo[10]="zombie-vuelta.jpg";
    arreglo[5]="zombie-vuelta.jpg";
    arreglo[14]="zombie-vuelta.jpg";

    
}

function abrir(imagen) {
    var indice = imagen.id;
    console.log(indice);
    imagen.src = arreglo[indice]; 
}