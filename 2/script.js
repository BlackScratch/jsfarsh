'use strict';

if (2*4 == 9) {
    console.log('dsafdasfdsf')
} else{
    console.log('asdffdasfff')
}

let num = 50;

if(num < 49) {
    console.log('Не верно')
} else if (num > 100) {
    console.log("Много")
} else {
    console.log("Верно")
}

(num == 50) ? console.log("Верно") : console.log("неверно")

switch(num){
    case num < 49:
        console.log('Не верно');
        break;
    case num > 100:
        console.log('Верно');
        break;
    case num > 80:
        console.log('Все еще много');
        break;
    case 50://в случае приравнивание просто без знаков равенства
        console.log('Верно!!');
        break;
    default: 
        console.log('Что-то пошло не так!!');
        break;
}

// while (num < 55){
//     console.log(num);
//     num++;
// }

do{
    console.log(num); 
    num++;
}
while (num < 55);

for (let i=1; i < 8; i ++){
    if(i == 6){
        break;
    }
    console.log(i); 
}

for (let i=1; i < 8; i ++){
    if(i == 6){
        continue;
    }
    console.log(i); 
}

let money = prompt ("Ваш бюджет на месяц", ''),
    time  = prompt('введите дату в формате YY-MM-DD', '');

let appData = {
    budget:money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};


for (let i = 0; i< 2; i++){
    
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдётся?", '');

        if((typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null && a !='' && b != '' && a.length < 50){
        console.log("asdfsdaf");
        appData.expenses[a]=b;
    }else{
        continue;
    }
};



appData.maneyPerDay = appData.budget / 30;

alert ("Ежедневный бюджет" + appData.maneyPerDay);

if(appData.maneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.maneyPerDay > 100 && appData.maneyPerDay < 2000){
    console.log("Средний уровень достатка");
} else if (appData.maneyPerDay > 2000){
    console.log("Высокий уровень достатка");
} else {
    console.log("Здесь какая-то ошибка");
}