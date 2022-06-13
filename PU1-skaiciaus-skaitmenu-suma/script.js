window.onload=function(){
    let skaicius=15746;
    let skaicius1=95000;
    let skaiucius2=39857;
     
    let zodis;
    let zodis1;
    let zodis2;    
    zodis="15746";
    zodis1="95000";
    zodis2="39857";
    let skaitmuo;
    let skaitmuo1;
    let skaitmuo2;
    let skaitmuo3;
    let skaitmuo4;
    let skaitmuo5;
    let skaitmuo6;
    let skaitmuo7;
    let skaitmuo8;
    let skaitmuo9;
    let skaitmuo10;
    let skaitmuo11;
    let skaitmuo12;
    let skaitmuo13;
    let skaitmuo14;
    let suma;
    let suma1;
    let suma2;             

    skaitmuo=skaitmenysZodziu(zodis);
    skaitmuo1=skaitmenysZodziu1(zodis);
    skaitmuo2=skaitmenysZodziu2(zodis);
    skaitmuo3=skaitmenysZodziu3(zodis);
    skaitmuo4=skaitmenysZodziu4(zodis);

    skaitmuo5=skaitmenysZodziu(zodis1);
    skaitmuo6=skaitmenysZodziu1(zodis1);
    skaitmuo7=skaitmenysZodziu2(zodis1);
    skaitmuo8=skaitmenysZodziu3(zodis1);
    skaitmuo9=skaitmenysZodziu4(zodis1);

    skaitmuo10=skaitmenysZodziu(zodis2);
    skaitmuo11=skaitmenysZodziu1(zodis2);
    skaitmuo12=skaitmenysZodziu2(zodis2);
    skaitmuo13=skaitmenysZodziu3(zodis2);
    skaitmuo14=skaitmenysZodziu4(zodis2);

    suma=skaiciausSkaitmenuSuma(skaitmuo,skaitmuo1,skaitmuo2,skaitmuo3,skaitmuo4);
    suma1=skaiciausSkaitmenuSuma(skaitmuo5,skaitmuo6,skaitmuo7,skaitmuo8,skaitmuo9);
    suma2=skaiciausSkaitmenuSuma(skaitmuo10,skaitmuo11,skaitmuo12,skaitmuo13,skaitmuo14);

    console.log(suma);
    console.log(suma1);
    console.log(suma2);
    
     

}
/**
 * Bendra skaitmenu suma skaiciuje;
 */
function skaiciausSkaitmenuSuma(a,b,c,d,e){
    return a+b+c+d+e;
}

/**
 *
 * @param {*} a Skaicius zodziu;
 * @returns Gaunamas pirmas skaiciaus skaitmuo;
 */
function skaitmenysZodziu(a){
    if (a[0] ==="1"){
        return 1;
    }
    else if (a[0]==="2"){
        return 2;
    }
    else if (a[0]==="3"){
        return 3;
    }
    else if (a[0]==="4"){
        return 4;
    }
    else if (a[0]==="5"){
        return 5;
    }
    else if (a[0]==="6"){
        return 6;
    }
    else if (a[0]==="7"){
        return 7;
    }
    else if (a[0]==="8"){
        return 8;
    }
    else if (a[0]==="9"){
        return 9;
    }
    else {
        return 0;
    }
}
/**
 * 
 * @param {*} a Skaicius zodziu;
 * @returns Gaunamas antras skaiciaus skaitmuo;
 */
function skaitmenysZodziu1(a){
    

    if (a[1] ==="1"){
        return 1;
    }
    else if (a[1]==="2"){
        return 2;
    }
    else if (a[1]==="3"){
        return 3;
    }
    else if (a[1]==="4"){
        return 4;
    }
    else if (a[1]==="5"){
        return 5;
    }
    else if (a[1]==="6"){
        return 6;
    }
    else if (a[1]==="7"){
        return 7;
    }
    else if (a[1]==="8"){
        return 8;
    }
    else if (a[1]==="9"){
        return 9;
    }
    else {
        return 0;
    }
}
/**
 * 
 * @param {*} a Skaicius zodziu;
 * @returns Gaunamas trecias skaiciaus skaitmuo;
 */
function skaitmenysZodziu2(a){   

    if (a[2] ==="1"){
        return 1;
    }
    else if (a[2]==="2"){
        return 2;
    }
    else if (a[2]==="3"){
        return 3;
    }
    else if (a[2]==="4"){
        return 4;
    }
    else if (a[2]==="5"){
        return 5;
    }
    else if (a[2]==="6"){
        return 6;
    }
    else if (a[2]==="7"){
        return 7;
    }
    else if (a[2]==="8"){
        return 8;
    }
    else if (a[2]==="9"){
        return 9;
    }
    else {
        return 0;
    }

}
/**
 * 
 * @param {*} a Skaicius zodziu;
 * @returns Gaunamas ketvirtas skaiciaus skaitmuo;
 */
function skaitmenysZodziu3(a){   

    if (a[3] ==="1"){
        return 1;
    }
    else if (a[3]==="2"){
        return 2;
    }
    else if (a[3]==="3"){
        return 3;
    }
    else if (a[3]==="4"){
        return 4;
    }
    else if (a[3]==="5"){
        return 5;
    }
    else if (a[3]==="6"){
        return 6;
    }
    else if (a[3]==="7"){
        return 7;
    }
    else if (a[3]==="8"){
        return 8;
    }
    else if (a[3]==="9"){
        return 9;
    }
    else {
        return 0;
    }
}
/**
 * 
 * @param {*} a Skaicius zodziu;
 * @returns Gaunamas penktas skaiciaus skaitmuo;
 */
function skaitmenysZodziu4(a){   

    if (a[4] ==="1"){
        return 1;
    }
    else if (a[4]==="2"){
        return 2;
    }
    else if (a[4]==="3"){
        return 3;
    }
    else if (a[4]==="4"){
        return 4;
    }
    else if (a[4]==="5"){
        return 5;
    }
    else if (a[4]==="6"){
        return 6;
    }
    else if (a[4]==="7"){
        return 7;
    }
    else if (a[4]==="8"){
        return 8;
    }
    else if (a[4]==="9"){
        return 9;
    }
    else {
        return 0;
    }

}