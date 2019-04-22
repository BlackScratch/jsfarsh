let money = prompt ("Ваш бюджет на месяц", ''),
    time  = prompt('введите дату в формате YY-MM-DD', ''),
    i = 0;
    appData = {
    budget:money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};
//1) Оформить расчет дневного бюджета  и вывод на экран этого значения как одну функцию (detectDayBudget)
function detectDayBudget(){
    
    alert ("Ваш бюджет на месяц " + (appData.maneyPerDay = appData.budget / 30));
    detectLevel();
}
detectDayBudget();

//2) Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel)
function detectLevel(){
    if(appData.maneyPerDay < 100) {
        alert("Минимальный уровень достатка");
    } else if (appData.maneyPerDay > 100 && appData.maneyPerDay < 2000){
        alert("Средний уровень достатка");
    } else if (appData.maneyPerDay > 2000){
        alert("Высокий уровень достатка");
    } else {
        alert("Здесь какая-то ошибка");
    }
}

// 3)Создать функцию для определения необязательных расходов (chooseOptExpenses):
// Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”
// Записать ответы в объект optionalExpenses в формате Номер - Ответ.
function chooseOptExpenses(){
    let numQu = 1;
    do{
    let a = prompt("Статья необязательных расходов? ", '');
        if((typeof(a))==='string'){
        appData.optionalExpenses[numQu]=a;
    }else{
      i--;  
    }
    i ++;
    numQu ++;
} while (i<3);

console.log(appData);
}

chooseOptExpenses();








