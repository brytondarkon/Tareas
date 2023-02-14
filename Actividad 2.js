let mes=parseint(prompt ("ingrese el numero del mes"));

if (mes < 1|| mes > 12){
    alert("valor Incorrect!");
return;
}

let temporada;

switch(mes){
    case 12:
        case 1:
            case 2:
                estacion= "Invierno";
                break;
    case 3:
        case 4:
            case 5:
                estacion= "Primera";
                breack ;
    case 6:
        case 7:
            case 8:
                estacion="Verano";
                break;
    case 9:
        case 10:
            case 11:
                estacion= "otono";
                break;
                
}
alert("La estacion correspondiente a su mes es:" + estacion)