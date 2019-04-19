'use strict';

let arrWeek = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];


for (let i = 0; i < arrWeek.length; i ++){
        if (arrWeek[i] != 'Сб' && arrWeek[i] != 'Вс' && arrWeek[i] !== 'Пт' ){
        document.write('День недели ' + arrWeek[i] + '<br>');
    } if (arrWeek[i] === 'Пт'){
        document.write('День недели <i>' + arrWeek[i] + '</i><br>');
    } if (arrWeek[i] === 'Сб' || arrWeek[i] === 'Вс') {
        document.write('День недели <b>' + arrWeek[i] + '</b><br>');
    }
}

let arrNums = ['343252345', '23455', '34254', '445345', '435435', '7435', '4353455'];

for (let b = 0; b < arrNums.length; b ++){
    if (arrNums[b].charAt(0)== 3 || arrNums[b].charAt(0)== 7 ){
        console.log(arrNums[b])
    }
   
}
    