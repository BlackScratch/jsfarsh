'use strict';
let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),

    timeDate = {
        budget:money,
        timeData: time,
        income:[],
        savings: false,
        expenses: {},
        optionalExpenses:{},
        },

    expensesValue = prompt("Введите обязательную статью расходов в этом месяце"),
    optionalExpenses = +prompt("Во сколько обойдётся?");

timeDate.expenses[expensesValue] = optionalExpenses;

let expensesValue2 = prompt("Введите обязательную статью расходов в этом месяце"),
optionalExpenses2 = +prompt("Во сколько обойдётся?");

timeDate.expenses[expensesValue2] = optionalExpenses2;

let budDay = (optionalExpenses + optionalExpenses2);

console.log('Ежедневные траты в день ' + budDay);

let moneyDay = money / 30;
console.log('Ваш бюджет на день ' + (money/30));

console.log(timeDate);

