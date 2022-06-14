window.onload=function(){
    let skaicius=15746;    
    let skaicius1=95000;
    let skaicius2=39857;
    let zodis=skaicius.toString(); 
    let zodis1=skaicius1.toString();
    let zodis2=skaicius2.toString();
        
    let suma;
    let suma1;
    let suma2;  
           

    suma=skaiciausSkaitmenuSuma(zodis);
    suma1=skaiciausSkaitmenuSuma(zodis1);
    suma2=skaiciausSkaitmenuSuma(zodis2);

    
    console.log(suma);
    console.log(suma1);
    console.log(suma2);
}

/**
 * Bendra skaitmenu suma skaiciuje;
 */
function skaiciausSkaitmenuSuma(sk){
    return skaitmenysZodziu(sk[0]) + skaitmenysZodziu(sk[1]) + skaitmenysZodziu(sk[2]) + skaitmenysZodziu(sk[3]) + skaitmenysZodziu(sk[4]);
}


/**
 *
 * @param {*} a Skaicius zodziu;
 * @returns Gaunamas pirmas skaiciaus skaitmuo;
 */
function skaitmenysZodziu(a){
    if (a === "1"){
        return 1;
    }
    else if (a === "2"){
        return 2;
    }
    else if (a === "3"){
        return 3;
    }
    else if (a === "4"){
        return 4;
    }
    else if (a === "5"){
        return 5;
    }
    else if (a === "6"){
        return 6;
    }
    else if (a === "7"){
        return 7;
    }
    else if (a === "8"){
        return 8;
    }
    else if (a === "9"){
        return 9;
    }
    else {
        return 0;
    }
}
