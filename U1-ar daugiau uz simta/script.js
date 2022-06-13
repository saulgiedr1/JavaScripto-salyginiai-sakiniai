 window.onload=function() {
    let skaicius;
    let skaicius1;
    skaicius=123;
    skaicius1=-212;    
   

    tiesa=arDaugiauNeguSimtas(skaicius);
    tiesa1=arDaugiauNeguSimtas(skaicius1);

    console.log(tiesa);
    console.log(tiesa1);


 }
 /**
  * 
  * @param {*} a Ar skaicius didesnis uz 100;
  * @returns tai tiesa ar ne;
  */

 function arDaugiauNeguSimtas(a){
    if  ( a > 100) {
        return true;} 
    else {
        return false;
    } 
   
    }


 