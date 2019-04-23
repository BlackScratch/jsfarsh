"use strict";

let appData = {
    budget:money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,
    

    detectDayBudget: function(){
        alert ("Ваш бюджет на месяц " + (appData.maneyPerDay = appData.budget / 30));
    }
};

let options ={
    width:1024,
    height:1024,
    name:"test"
}
options.bool = false;

console.log(options.name)
options.colors = {
    border:"black",
    bg:"red"
};

delete options.bool

console.log(options);

for(let key in options){
    console.log('Свойство ' + key + ' имеет значение ' + options[key])
}

console.log(Object.keys(options).length);

let arr = [1,2,3,4,5,6];
arr[99] = 99;
console.log(arr);
arr.pop();
arr.push("5");
arr.shift();// удаляет первые элемент
arr.unshift("first");

// for (let i = 0; i<arr.length; i ++){
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass){
// console.log(i + ': '+ item + " (массив: " + mass + ')')
// });

// let mass = [1,3,4,6,7];

// for (let key in mass){ // так получается просто порядковый номер
//     console.log(key);
// }

// for (let key of mass){ // так получается значение ключа
//     console.log(key);
// }

// let ans = prompt("",""),
//     arrs = [];

// arrs = ans.split(',');
// console.log(arrs);

// let arrs = ["aawe","zzzz","dsfsdfsdf", "dsfsdfsdf"],
//     i = arrs.join(", ");
//     console.log(i);

let arrs = ["aawe","zzzz","dsfsdfsdf", "dsfsdfsdf"],
    i = arrs.sort(conpareNum);
    console.log(i);

    function conpareNum(a,b){
        return a-b;
    }

    let soldier = {
        health: 400,
        aromor: 100
    }

    let john = {
        health:100
    };

    john.__proto__=soldier;

    console.log(john);
    console.log(john.aromor);