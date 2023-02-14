var mes = prompt("Ingrese el número de un mes:");

if(mes >= 1 && mes <=12)
{
    if(mes == 12 || mes == 1 || mes == 2){
        alert("Es Invierno");
    }else if (mes == 3 || mes == 4 || mes == 5){
        alert("Es Primavera");
    }else if (mes == 6 || mes == 7 || mes == 8){
        alert("Es Verano");
    }else{
        alert("Es Otoño");
    }
}else
{
    alert("Valor invalido");
}
alert("Francisco Javier Suárez Miranda | 18008884");