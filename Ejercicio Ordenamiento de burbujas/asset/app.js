window.alert("Ingrese tres números para ordenarlos:");
    let lista = [];
    for (let i = 0; i < 3; i++) {
    contador=i+1;
    var num = parseFloat(prompt("Ingrese el número " + contador + ":"));
    lista.push(num);
    }
    
    do{n=0;
        for (let i = 0; i < lista.length - 1; i++) {
            if (lista[i] > lista[i + 1]) {  
                let temp = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = temp;
                n++;
            }   
    } }
        
    while (n!= 0);
    if(lista[0] === lista[lista.length-1]){
        document.writeln("Los números ingresados son iguales");
    }
    else{
        document.writeln("El número ordenado menor es: " + lista[0]);
        document.writeln("<br></br>");         
        document.writeln("El número ordenado mayor es: " + lista[lista.length-1]);

    }
