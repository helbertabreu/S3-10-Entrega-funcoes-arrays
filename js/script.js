function positions(firstPlace, secondPlace, lastPlace) {
    let podio = [firstPlace, secondPlace, lastPlace];
    if (secondPlace == "Daniel") {
        podio[0] = secondPlace;
        podio[1] = firstPlace;
        console.log(podio);
    } else if (lastPlace == "Daniel"){
        podio[1] = lastPlace;
        podio[2] = secondPlace;
        console.log(podio);
    }
    console.log("1º - Colocado - " + podio[0] +
        " 2º - Colocado - " + podio[1] +
        " 3º - Colocado - " + podio[2]);
    
}

positions ("Rafael", "Manoel", "Daniel");


