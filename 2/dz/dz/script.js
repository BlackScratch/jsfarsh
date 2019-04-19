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


// for (let i = 0; i< 2; i++){
    
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдётся?", '');

//         if((typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null && a !='' && b != '' && a.length < 50){
//         console.log("asdfsdaf");
//         appData.expenses[a]=b;
//     }else{
//         continue;
//     }
// };

let i=0;
// while (i<2){
    
//     let a = prompt("Введите обязательную статью расходов в этом месяце while", ''),
//         b = prompt("Во сколько обойдётся while?", '');

//         if((typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null && a !='' && b != '' && a.length < 50){
//         console.log("asdfsdaf while");
//         appData.expenses[a]=b;
        
//     }else{
        
//     }
//     i ++;
// }


do{
    let a = prompt("Введите обязательную статью расходов в этом месяце do", ''),
        b = prompt("Во сколько обойдётся do?", '');

        if((typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null && a !='' && b != '' && a.length < 50){
        console.log("asdfsdaf do");
        appData.expenses[a]=b;
        
    }else{
        
    }
    i ++;
} while (i<2);



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