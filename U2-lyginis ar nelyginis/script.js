window.onload=function(){
let skaicius;
let skaicius1;
skaicius=256;
skaicius1=389;
let tiesa;
let tiesa1;
let bele;

tiesa=lyginisArNelyginis(skaicius);
tiesa1=lyginisArNelyginis(skaicius);
bele=liekana(skaicius1, skaicius);
console.log(tiesa);
console.log(tiesa1);
console.log(bele);


}

 function lyginisArNelyginis(a){
    if ((a % 2 )< (0) ) {
        return false;
   }
    else {
       return true;
   }
 }

 function liekana (a,b){
  return   b % 2;
    
 }