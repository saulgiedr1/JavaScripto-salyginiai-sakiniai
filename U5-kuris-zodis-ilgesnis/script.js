window.onload=function(){

    let zodis;
    let zodis1;
    let zodis2;
    let zodis3;
    let zodis4;
    let zodis5;
    zodis="architektūra";
    zodis1="švitrinis";    
    zodis2="zoologija";
    zodis3="reformacija";   
    zodis4="pusiausvyra";
    zodis5="kardiograma";
    let ilgesnis;
    let ilgesnis1;
    let ilgesnis2;

    ilgesnis=kurisIlgesnisZodis(zodis,zodis1);
    ilgesnis1=kurisIlgesnisZodis(zodis2,zodis3);
    ilgesnis2=kurisIlgesnisZodis(zodis4,zodis5);
    console.log(ilgesnis);
    console.log(ilgesnis1);
    console.log(ilgesnis2);
}
/**
 * 
 * @param {*} a Pirmas zodis;
 * @param {*} b Antras zodis;
 * @returns Raidziu skaiciaus zodziuose palyginimas;
 */
function kurisIlgesnisZodis(a,b){
    if(a.length > b.length){
        return 1;
      }
    else if(a.length < b.length){
        return -1;
    }
    else {
        return 0;
    }


}