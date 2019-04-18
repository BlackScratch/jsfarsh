'use strict';
let num = 33721,
    methNow = 3*3*7*2*1,
    methToCube = methNow;
    
//возведение в степень
for(let i=0; i<2; i++){
    methNow *= methToCube;
}

console.log(methNow);
console.log(typeof methNow);

for(let i=0; i<2; i++){
document.write("Символ на позиции " + (i+1) + " " + (''+methNow)[i] + "  ");
document.write("</br>");
}