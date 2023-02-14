var texto1 = prompt("Ingrese un texto: ");
var texto2 = prompt("Ingrese otro texto: ");
var contar = texto1.length + texto2.length;

alert("Total de Cáracteres: " + contar);

const textos = [texto1, texto2];
alert("El orden Alfabetico es: " + textos.sort());

if(texto1.length == texto2.length){
    alert("Tienen el mismo número de caracteres");
}else if(texto1.length > texto2.length){
    alert("Es mayor: " + texto1.toUpperCase());
    alert("Es menor: " + texto2.toLowerCase());
}else{
    alert("Es mayor: " + texto2.toUpperCase());
    alert("Es menor: " + texto1.toLowerCase());
}