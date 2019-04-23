let money = prompt ("Ваш бюджет на месяц", ''),
    time  = prompt('введите дату в формате YY-MM-DD', ''),
    i = 0;
    appData = {
    budget:money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,

    chooseExpenses: function(){
        for(let i=0;i<3;i++){

            let a = prompt("Статья необязательных расходов? ", '');
                if((typeof(a))==='string' && (typeof(a))!=null && a !=='' ){
                numQu ++;
                console.log('Это цикл номер '+ i);
                console.log('Это номер расхода '+ numQu);
                appData.optionalExpenses[numQu]=a;
            }else{
              i--;  
            }
        }
    },

    detectDayBudget:function (){
        alert ("Ваш бюджет на месяц " + (appData.maneyPerDay = appData.budget / 30));
        
    },

    detectLevel: function (){
        if(appData.maneyPerDay < 100) {
            alert("Минимальный уровень достатка");
        } else if (appData.maneyPerDay > 100 && appData.maneyPerDay < 2000){
            alert("Средний уровень достатка");
        } else if (appData.maneyPerDay > 2000){
            alert("Высокий уровень достатка");
        } else {
            alert("Здесь какая-то ошибка");
        }
    },

    checkSavings: function(){
        let save = +prompt('Какова сумма накоплений?', ''),
        percent = +prompt("Под какой процент?","");

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    },

    chooseOptExpenses: function(){
        let numQu = 1;
    
        for(let i=0;i<3;i++){
    
            let a = prompt("Статья необязательных расходов? ", '');
                if((typeof(a))==='string'){
                numQu ++;
                console.log('Это цикл номер '+ i);
                console.log('Это номер расхода '+ numQu);
                appData.optionalExpenses[numQu]=a;
            }else{
            i--;  
            }
        }
    },
//1) Написать проверку, что пользователь может:
// ·        Ввести в дополнительных доходах (chooseIncome) только строку
// ·        Не может оставить строку пустой
// ·        Не может отменить вопрос
    chooseIncome: function(){
        let items = prompt('что принесет дополнительный доход? (Перечислите через запятую)', '');
        if((typeof(items))==='string' && (typeof(items))!=null && items !==''){
        appData.income = items.split(',');
        appData.income.push(prompt('Может что-то ещё?',''));
        appData.income.sort();
        }
        else{appData.chooseIncome()};

        //2) При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " и полученные способы (внутри chooseIncome)
// ·        Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.
        appData.income.forEach(function(item, g, mass){
            console.log((g + 1) +': '+ item + " (массив: " + mass + ')')
        });
    },

};

appData.detectDayBudget();
appData.chooseIncome();

// 3) Используя цикл for in для объекта (appData) 
// вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)
for (let key in appData){ // так получается просто порядковый номер
    console.log('Наша программа включает в себя данные ' + key);
}