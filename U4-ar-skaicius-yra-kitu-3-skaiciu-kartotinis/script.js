window.onload=function(){
let skaicius;
let skaicius1;
let skaicius3;

skaicius=90;
skaicius1=10;
skaicius3=-100;

let kartotinis;
let kartotinis1;
let kartotinis2;

kartotinis=arTaiKartotinis(skaicius);
kartotinis1=arTaiKartotinis(skaicius1);
kartotinis2=arTaiKartotinis(skaicius3);

console.log(kartotinis);
console.log(kartotinis1);
console.log(kartotinis2);

}
/**
 * 
 * @param {*} a Bet koks skaicius;
 * @returns Ar jis yra kitu triju skaiciu kartotinis;
 */
function arTaiKartotinis(a) {
    if ( (a % 3 === 0 ) && (a % 5 === 0) && (a % 10===0)) {
        return true;

    }
    else {
        return false; 
    }
}