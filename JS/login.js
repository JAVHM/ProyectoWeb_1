//Tiene 12 nombres de animales
var nombreAleatorios = [
    "Cabra montesa", "Iguana","Koala","Lémur", 
    "Cocodrilo", "Oso hormiguero", "Dinosaurio", "Delfin", 
    "Pato", "Elefante", "Hurón","Zorro"
]
var nombreEscogido;
 
const generarNombreAleatorio =()=>{
    var nombre= document.querySelector("#input_nombre");
    var posAleatorio=parseInt(Math.random()*12);
    nombre.placeholder=nombreAleatorios[posAleatorio] + " anonimo";
}
//Genera los nombres aleatorios pero se puede mejorar 
window.addEventListener("load", generarNombreAleatorio); 