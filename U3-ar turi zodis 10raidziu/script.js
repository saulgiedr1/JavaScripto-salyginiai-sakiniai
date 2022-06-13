window.onload=function(){

    let zodis;
    zodis="rutina";
    let zodis1;
    zodis1="dehidratacija";
    let daugiau;
    let daugiau1;


    daugiau=raidziuSkaicius(zodis);
    daugiau1=raidziuSkaicius(zodis1 );

    console.log(daugiau);
    console.log(daugiau1);


}
/**
 * 
 * @param {*} a Siunciamas zodis;
 * @returns Jegu zodis turi daugiau kaip 10 raidziu, sakoma true, maziau -false;
 */
function raidziuSkaicius(a){
    if( a.length >10){
        return true;
    }
    else {
        return false;
    }
}