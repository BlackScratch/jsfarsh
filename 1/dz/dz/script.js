'use strict'
let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let timeDate = {
    budget:money,
    timeData: time,
    income:[],
    savings: false,
    expenses: {},
    
};


let expensesValue = +prompt("Введите обязательную статью расходов в этом месяце");
let optionalExpenses = +prompt("Введите необязательную статью расходов на этот месяц");

timeDate.expenses[expensesValue] = optionalExpenses;

let expensesValue2 = +prompt("Введите обязательную статью расходов в этом месяце");
let optionalExpenses2 = +prompt("Введите необязательную статью расходов на этот месяц");

timeDate.expenses[expensesValue2] = optionalExpenses2;

let budDay = expensesValue + optionalExpenses + expensesValue2 + optionalExpenses2;

console.log('Ежедневные траты в день ' + budDay);

let moneyDay = money / 30;
console.log('Ваш бюджет на день ' + (money/30));




console.log(timeDate);

