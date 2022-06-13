window.onload=function(){
let skaicius;
let skaicius1;
skaicius=250;
skaicius1=-359;

let tiesa;
let tiesa1;



tiesa=lyginisArNelyginis(skaicius);
tiesa1=lyginisArNelyginis(skaicius1);


console.log(tiesa);
console.log(tiesa1);




}

 function lyginisArNelyginis(a){
    if (a % 2 === 0 ) {
        return true;
   }
   else {
         return false;
   }
   
 }

