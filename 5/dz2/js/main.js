let budget = document.getElementsByClassName('budget-value'),

    daybudget = document.getElementsByClassName('daybudget-value'),

    level = document.getElementsByClassName('level-value'),

    expenses = document.getElementsByClassName('expenses-value'),

    optionalexpenses = document.getElementsByClassName('optionalexpenses-value'),

    budgincomeet = document.getElementsByClassName('income-value'),

    monthsavings = document.getElementsByClassName('monthsavings-value'),

    yearsavings = document.getElementsByClassName('yearsavings-value'),

    //Левый верхний блок
    inputText1 = document.getElementsByClassName('expenses-item')[0],
    

    inputValue1 = document.getElementsByClassName('expenses-item')[1],
    
    inputText2 = document.getElementsByClassName('expenses-item')[2],
    
    inputValue2 = document.getElementsByClassName('expenses-item')[3],
    

    //Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
    optionalExpenses = document.querySelectorAll("optionalexpenses_1,optionalexpenses_2,optionalexpenses_3");

    btnYes = document.getElementsByTagName("button")[0];

    btnEquals = document.getElementsByTagName("button")[2];

    //Статья возможного расхода
    optExensesDop = document.querySelector('#income');

    //Чек бокс
    saveCheckpoint = document.querySelector('#savings');

    //Поле сумма
    saveSum = document.querySelector('#sum');

    //Поле процент
    savePercent= document.querySelector('#percent');

    //Поле год
    yearNow= document.querySelector('.year-value');

    //Поле месяц
    let monthNow= document.querySelector('.month-value');

    //Поле день
    dayNow= document.querySelector('.day-value');

//Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной
btnYes.addEventListener('click', handleLinkClick);
//Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной
btnEquals.addEventListener('click', handleLinkClick);




function handleLinkClick(){
    console.log('Наименование 1 '+inputText1.value);
    console.log('Цена 1 '+inputValue1.value);
    console.log('Наименование 2 '+inputText2.value);
    console.log('Цена 2 '+inputValue2.value);
    console.log('Допом '+optExensesDop.value);
}
